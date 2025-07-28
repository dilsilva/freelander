# 🎨 Freelander Customization Guide

Welcome to Freelander! This guide will help you customize your portfolio website without any coding knowledge. Everything is configured through one simple file: `config.yaml`.

## 📋 Quick Start Checklist

1. ✅ **Clone or download** Freelander template
2. ⏳ **Edit `config.yaml`** (this guide)
3. ⏳ **Add your portfolio images**
4. ⏳ **Choose your colors and fonts**
5. ⏳ **Deploy your site**

## 🧑‍💼 Personal Information Setup

All your personal information is stored in the main `config.yaml` file. Simply open this file and replace the example content with your own information.

### Step 1: Basic Information
In the `personal:` section of `config.yaml`:
```yaml
personal:
  name: "Jane Doe"                    # Your full name
  profession: "UX Designer"           # Your job title  
  tagline: "Creating beautiful, user-centered digital experiences"
  
  # Contact Information  
  email: "jane@example.com"
  phone: "+1 (555) 123-4567"          # Leave empty to hide: ""
  location: "San Francisco, CA"
```

### Step 2: Your Bio
```yaml
personal:
  bio_short: "UX Designer with 5+ years creating digital products that users love."
  bio_long: |
    I'm a passionate UX Designer based in San Francisco, specializing in 
    creating intuitive digital experiences for startups and established brands.
    
    **My background in psychology** helps me understand user behavior, while my
    technical skills allow me to create designs that developers can actually build.
    
    You can use **markdown formatting** like bold text, lists, and links!
```

### Step 3: Social Media Links
In the `social:` section, add your profiles. Leave empty (`""`) to hide:
```yaml
social:
  linkedin: "https://linkedin.com/in/janedoe"
  instagram: "https://instagram.com/janedoe"
  twitter: "https://twitter.com/janedoe"
  behance: "https://behance.net/janedoe"    # For designers
  dribbble: "https://dribbble.com/janedoe"  # For designers
  github: "https://github.com/janedoe"      # For developers
  website: ""  # Your personal blog/website
  
  # Professional Links
  resume_pdf: "/files/jane-doe-resume.pdf"  # Link to your resume
```

### Step 4: Profile Photos
Add your photos to the `static/img/profile/` folder:

**File structure:**
```
static/img/profile/
├── profile.jpg        # Your main photo
└── profile@2x.jpg     # High resolution version (optional)
```

**Photo Tips:**
- Use professional, high-quality photos
- Recommended size: 800x800px for main image
- Use 1600x1600px for the @2x (retina) version
- Keep file sizes under 500KB for fast loading

## 🎯 Professional Sections

### Show/Hide Sections
In `data/site.yml`, control which sections appear on your site:
```yaml
settings:
  sections:
    hero: true          # Main intro section
    about: true         # About you
    portfolio: true     # Your work
    experience: true    # Work history
    education: false    # Education background
    testimonials: false # Client testimonials
    contact: true       # Contact form
```

## 🎨 Visual Customization

### Colors
Choose your brand colors in `data/site.yml`:
```yaml
theme:
  primary_color: "#007bff"      # Your main brand color
  secondary_color: "#6c757d"    # Supporting color
  accent_color: "#28a745"       # Highlight color
```

**Color Tips:**
- Use hex codes (#123456) or color names (blue, red)
- Test colors for accessibility and contrast
- Keep it simple - 2-3 colors maximum

### Fonts
Choose your typography:
```yaml
fonts:
  primary: "Inter, system-ui, sans-serif"     # Body text
  headings: "Inter, system-ui, sans-serif"    # Headlines
```

## 📞 Contact Form Setup

Freelander supports multiple contact form backends:

### Option 1: GitHub Issues (Free)
```yaml
contact_form:
  backend: "github"
  github:
    repository: "yourusername/your-repo-name"
    labels: ["contact-form"]
```

### Option 2: Formspree (Free tier available)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update your config:
```yaml
contact_form:
  backend: "formspree"
  formspree:
    endpoint: "https://formspree.io/f/yourcode"
```

### Option 3: Netlify Forms (Free with Netlify hosting)
```yaml
contact_form:
  backend: "netlify"
  netlify:
    enabled: true
```

## 🔍 SEO Optimization

Help people find your site by updating your SEO settings:
```yaml
seo:
  description: "Jane Doe - UX Designer creating beautiful digital experiences in San Francisco"
  keywords: "UX Designer, UI Designer, San Francisco, Digital Products"
```

## 📱 Testing Your Changes

1. **Start the development server:**
   ```bash
   hugo server -D
   ```

2. **View your site at:** http://localhost:1313

3. **Make changes** to the YAML files and refresh your browser

## 🚀 Ready to Deploy?

Once you're happy with your customization:
1. Build your site: `hugo --minify`
2. Deploy to your chosen platform (GitHub Pages, Netlify, Vercel)
3. Share your new portfolio with the world!

## 🆘 Need Help?

- Check the full documentation in `docs/`
- Open an issue in the Freelander GitHub repository
- Join our community discussions

---

**Next Step:** [Add Your Portfolio Content →](PORTFOLIO.md)