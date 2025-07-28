# Freelander - Hugo Portfolio Template for Creatives

## Memory Imports
@.claude/hugo-workflow.md
@.claude/component-patterns.md
@.claude/github-integration.md
@.claude/memory-imports.md
@.claude/usage-guide.md
@.claude/role-contexts.md
@.claude/session-context.md

## Product Vision
**Freelander** is a production-ready Hugo template for small artists, freelancers, and creative professionals who need a professional web presence without technical complexity.

## Target Users
- Artists (photographers, designers, painters)
- Freelance professionals (consultants, writers, developers)
- Creative professionals needing quick portfolio sites
- Non-technical users requiring easy customization

## Agent Behaviors
When working on this project, always:

1. **User-First Design**: Consider non-technical users for all customization features
2. **Production Ready**: Test performance, accessibility, SEO optimization
3. **Documentation**: Create clear guides for end-user customization
4. **Before coding**: Run `hugo server -D` to test changes locally
5. **After making changes**: Test responsive design across devices
6. **Deployment Testing**: Verify one-click deployment workflows
7. **Before releasing**: Run production build and performance audits

## Core Features (MVP)
- **Portfolio Showcase**: Image galleries with lightbox, project descriptions
- **Contact Integration**: Multiple form backend options (Formspree, Netlify, GitHub)
- **About/Bio Section**: Personal story, skills, experience timeline
- **Blog/News**: Simple content management for updates
- **Easy Customization**: YAML-driven configuration, no coding required
- **Mobile-First**: Responsive design, optimized loading

## Technical Requirements
- **Base Theme**: Raditian (customized for Freelander)
- **Performance**: <3s load time, optimized images, lazy loading
- **SEO**: Meta tags, structured data, sitemap generation
- **Accessibility**: WCAG 2.1 AA compliance
- **Analytics**: GA4 and privacy-focused options
- **Deployment**: GitHub Pages, Netlify, Vercel ready

## Project Overview
Current Status: Foundation established with Raditian theme
- **Theme**: Raditian (github.com/radity/raditian-free-hugo-theme) - customizing for Freelander
- **Status**: Site initialized, theme installed, server running
- **Next Phase**: User experience design and production optimization

## Tech Stack
- **Static Site Generator**: Hugo
- **Styling**: Bootstrap 5 (for simplicity and maintenance)
- **JavaScript**: Vanilla JS with minimal dependencies
- **Deployment**: GitHub Pages via GitHub Actions
- **Images**: Hugo image processing for optimization

## Project Structure
```
├── config.yaml           # Hugo configuration
├── content/              # Markdown content
│   ├── _index.md        # Homepage content
│   ├── about/           # About pages
│   └── blog/            # Blog posts
├── static/              # Static assets
│   ├── images/          # Gallery images
│   └── uploads/         # User uploads
├── layouts/             # Hugo templates
│   ├── _default/        # Default layouts
│   ├── partials/        # Reusable components
│   └── shortcodes/      # Custom shortcodes
├── assets/              # Assets to be processed
│   ├── css/            # SCSS/CSS files
│   └── js/             # JavaScript files
└── data/               # Data files (contact form config, etc.)
```

## Development Commands
- `hugo server -D`: Start development server with drafts
- `hugo server --bind=0.0.0.0`: Server accessible from network
- `hugo`: Build production site
- `hugo new content/blog/post-name.md`: Create new blog post
- `hugo new site .`: Initialize new Hugo site (if needed)

## Hugo Shortcodes to Create
- `{{< gallery folder="path/to/images" >}}`: Image gallery
- `{{< contact-form type="general" >}}`: Contact form
- `{{< lightbox src="image.jpg" alt="description" >}}`: Single lightbox image

## Contact Form Configuration
Types stored in `data/contact-types.yaml`:
- general: General inquiries
- portfolio: Portfolio-related
- business: Business inquiries
- support: Technical support

Form fields:
- name (required)
- email (required, validated)
- phone (optional, validated)
- subject (required)
- message (required)
- type (dropdown, required)
- attachments (optional, links only)

## Image Processing
- Resize images to multiple sizes: 300px, 600px, 1200px
- Generate WebP versions for modern browsers
- Create thumbnails for gallery view
- Optimize for web delivery

## Content Guidelines
- Use descriptive filenames for images
- Add alt text for accessibility
- Keep blog posts in `content/blog/`
- Use front matter consistently
- Tag posts appropriately

## Deployment
- Push to main branch triggers GitHub Actions
- Build with Hugo extended version
- Deploy to GitHub Pages
- Custom domain support via CNAME

## Code Style
- Use semantic HTML5 elements
- Follow BEM methodology for CSS classes
- Minimize JavaScript dependencies
- Progressive enhancement approach
- Mobile-first responsive design

## Testing
- Test locally before pushing
- Validate HTML/CSS
- Check responsive design
- Test contact form integration
- Verify image optimization