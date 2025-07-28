/**
 * Enhanced Analytics Event Tracking for Freelander
 * Tracks user interactions across portfolio, blog, and contact sections
 */

(function() {
    'use strict';
    
    // Wait for analytics to be ready
    function waitForAnalytics(callback) {
        let attempts = 0;
        const maxAttempts = 50;
        
        const check = () => {
            if (window.FreelanderAnalytics || attempts >= maxAttempts) {
                callback();
            } else {
                attempts++;
                setTimeout(check, 100);
            }
        };
        
        check();
    }
    
    // Initialize all event tracking
    function initializeTracking() {
        if (!window.FreelanderAnalytics) return;
        
        // Portfolio Event Tracking
        initPortfolioTracking();
        
        // Blog Event Tracking
        initBlogTracking();
        
        // Contact Event Tracking
        initContactTracking();
        
        // Navigation Event Tracking
        initNavigationTracking();
        
        // Download Event Tracking
        initDownloadTracking();
        
        // Scroll Depth Tracking
        initScrollTracking();
        
        // Time on Page Tracking
        initTimeTracking();
    }
    
    // Portfolio interaction tracking
    function initPortfolioTracking() {
        // Project view tracking
        const portfolioItems = document.querySelectorAll('.portfolio-item, [data-portfolio-item]');
        portfolioItems.forEach(item => {
            item.addEventListener('click', function(e) {
                const title = this.dataset.title || this.querySelector('h3, h4, .project-title')?.textContent || 'Unknown';
                const category = this.dataset.category || this.querySelector('.category')?.textContent || 'General';
                const year = this.dataset.year || new Date().getFullYear();
                
                window.FreelanderAnalytics.trackEvent('portfolio_project_view', {
                    project_title: title.trim(),
                    project_category: category.trim(),
                    project_year: year
                });
            });
        });
        
        // Gallery image clicks
        const portfolioImages = document.querySelectorAll('.portfolio-gallery img, .lightbox-trigger, [data-lightbox]');
        portfolioImages.forEach(img => {
            img.addEventListener('click', function() {
                const projectContainer = this.closest('.portfolio-item, [data-portfolio-item]');
                const projectTitle = projectContainer?.dataset.title || 
                                   projectContainer?.querySelector('h3, h4, .project-title')?.textContent || 'Unknown';
                
                window.FreelanderAnalytics.trackEvent('portfolio_image_click', {
                    image_name: this.alt || this.src.split('/').pop(),
                    project_title: projectTitle.trim(),
                    image_position: Array.from(this.parentElement.children).indexOf(this) + 1
                });
            });
        });
        
        // Category filter clicks
        const filterButtons = document.querySelectorAll('.filter-btn, [data-filter]');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.dataset.filter || this.textContent;
                const resultsContainer = document.querySelector('.portfolio-grid, .portfolio-container');
                const resultsCount = resultsContainer ? resultsContainer.children.length : 0;
                
                window.FreelanderAnalytics.trackEvent('portfolio_category_filter', {
                    category: category.trim(),
                    results_count: resultsCount
                });
            });
        });
    }
    
    // Blog interaction tracking
    function initBlogTracking() {
        // Blog post reading progress
        if (document.querySelector('.post-content, .blog-post-content')) {
            let maxScroll = 0;
            let readingStartTime = Date.now();
            
            function trackReadingProgress() {
                const content = document.querySelector('.post-content, .blog-post-content');
                if (!content) return;
                
                const scrollPercent = Math.round((window.scrollY / (content.offsetHeight - window.innerHeight)) * 100);
                maxScroll = Math.max(maxScroll, scrollPercent);
                
                if (scrollPercent >= 90 && !window.blogPostReadTracked) {
                    window.blogPostReadTracked = true;
                    const readingTime = Math.round((Date.now() - readingStartTime) / 1000);
                    
                    window.FreelanderAnalytics.trackEvent('blog_post_read', {
                        post_title: document.title,
                        post_category: document.querySelector('[data-category]')?.dataset.category || 'General',
                        reading_time: readingTime,
                        scroll_depth: maxScroll
                    });
                }
            }
            
            window.addEventListener('scroll', throttle(trackReadingProgress, 500));
        }
        
        // Blog category clicks
        const categoryLinks = document.querySelectorAll('.blog-category, .post-category, [data-blog-category]');
        categoryLinks.forEach(link => {
            link.addEventListener('click', function() {
                const category = this.dataset.category || this.textContent;
                
                window.FreelanderAnalytics.trackEvent('blog_category_click', {
                    category: category.trim()
                });
            });
        });
        
        // Blog sharing buttons
        const shareButtons = document.querySelectorAll('.share-btn, [data-share]');
        shareButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                const platform = this.dataset.platform || this.dataset.share || 
                               this.className.split(' ').find(c => c.includes('share')) || 'unknown';
                
                window.FreelanderAnalytics.trackEvent('blog_share_click', {
                    platform: platform.replace('share-', '').replace('-share', ''),
                    post_title: document.title,
                    url: window.location.href
                });
            });
        });
    }
    
    // Contact interaction tracking
    function initContactTracking() {
        // Contact form submissions
        const contactForms = document.querySelectorAll('form, [data-form]');
        contactForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const formType = this.dataset.type || this.dataset.form || 'general';
                
                // Track the attempt
                window.FreelanderAnalytics.trackEvent('contact_form_submit', {
                    form_type: formType,
                    success: true // Will be updated by form handler if needed
                });
                
                // Track as goal conversion
                window.FreelanderAnalytics.trackGoal('contact_form_submission', 50);
            });
        });
        
        // Email link clicks
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', function() {
                window.FreelanderAnalytics.trackEvent('contact_email_click', {
                    email_address: this.href.replace('mailto:', '').split('?')[0]
                });
            });
        });
        
        // Phone link clicks
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.addEventListener('click', function() {
                window.FreelanderAnalytics.trackEvent('contact_phone_click', {
                    phone_number: this.href.replace('tel:', '').replace(/\s/g, '')
                });
            });
        });
    }
    
    // Navigation tracking
    function initNavigationTracking() {
        // Social media links
        const socialLinks = document.querySelectorAll('.social-links a, .social-link, [data-social]');
        socialLinks.forEach(link => {
            link.addEventListener('click', function() {
                const url = new URL(this.href);
                const platform = this.dataset.social || getPlatformFromURL(url.hostname);
                
                window.FreelanderAnalytics.trackEvent('social_link_click', {
                    platform: platform,
                    profile_url: this.href
                });
                
                // Track as goal if it's a follow link
                if (this.classList.contains('follow') || this.dataset.action === 'follow') {
                    window.FreelanderAnalytics.trackGoal('social_follow', 10);
                }
            });
        });
        
        // Internal navigation
        const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="#"]');
        internalLinks.forEach(link => {
            if (link.href.includes('#') && !link.href.startsWith('http')) {
                link.addEventListener('click', function() {
                    const section = this.href.split('#')[1];
                    window.FreelanderAnalytics.trackEvent('internal_navigation', {
                        section: section,
                        link_text: this.textContent.trim()
                    });
                });
            }
        });
    }
    
    // Download tracking
    function initDownloadTracking() {
        const downloadLinks = document.querySelectorAll('a[href*=".pdf"], a[href*=".doc"], a[href*=".zip"], [data-download]');
        downloadLinks.forEach(link => {
            link.addEventListener('click', function() {
                const fileName = this.href.split('/').pop().split('?')[0];
                const fileType = fileName.split('.').pop().toLowerCase();
                const downloadType = this.dataset.download || 
                                   (fileName.toLowerCase().includes('resume') ? 'resume' : 'portfolio');
                
                const eventName = downloadType === 'resume' ? 'resume_download' : 'portfolio_download';
                
                window.FreelanderAnalytics.trackEvent(eventName, {
                    file_name: fileName,
                    file_type: fileType
                });
                
                // Track as goal conversion
                const goalValue = downloadType === 'resume' ? 100 : 50;
                window.FreelanderAnalytics.trackGoal(downloadType + '_download', goalValue);
            });
        });
    }
    
    // Scroll depth tracking
    function initScrollTracking() {
        const scrollMilestones = [25, 50, 75, 90, 100];
        const trackedMilestones = new Set();
        
        function trackScrollDepth() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            scrollMilestones.forEach(milestone => {
                if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
                    trackedMilestones.add(milestone);
                    window.FreelanderAnalytics.trackEvent('scroll_depth', {
                        scroll_percentage: milestone,
                        page_type: getPageType()
                    });
                }
            });
        }
        
        window.addEventListener('scroll', throttle(trackScrollDepth, 500));
    }
    
    // Time on page tracking
    function initTimeTracking() {
        const startTime = Date.now();
        const timeIntervals = [30, 60, 120, 300, 600]; // seconds
        const trackedIntervals = new Set();
        
        setInterval(() => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            
            timeIntervals.forEach(interval => {
                if (timeOnPage >= interval && !trackedIntervals.has(interval)) {
                    trackedIntervals.add(interval);
                    window.FreelanderAnalytics.trackEvent('time_on_page', {
                        time_seconds: interval,
                        page_type: getPageType()
                    });
                }
            });
        }, 10000); // Check every 10 seconds
    }
    
    // Utility functions
    function throttle(func, delay) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, delay);
            }
        };
    }
    
    function getPlatformFromURL(hostname) {
        const platforms = {
            'twitter.com': 'twitter',
            'facebook.com': 'facebook', 
            'instagram.com': 'instagram',
            'linkedin.com': 'linkedin',
            'github.com': 'github',
            'dribbble.com': 'dribbble',
            'behance.net': 'behance',
            'youtube.com': 'youtube',
            'vimeo.com': 'vimeo'
        };
        
        return platforms[hostname] || hostname.replace('www.', '');
    }
    
    function getPageType() {
        const path = window.location.pathname;
        if (path === '/' || path === '/index.html') return 'homepage';
        if (path.includes('/blog/') || path.includes('/posts/')) return 'blog';
        if (path.includes('/portfolio/') || path.includes('/work/')) return 'portfolio';
        if (path.includes('/about/')) return 'about';
        if (path.includes('/contact/')) return 'contact';
        return 'other';
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            waitForAnalytics(initializeTracking);
        });
    } else {
        waitForAnalytics(initializeTracking);
    }
})();