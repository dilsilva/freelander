# FreeLanding

A professional landing page built with Hugo and the Scroll theme, featuring three main sections: About Us, Gallery, and Contact form powered by GitHub Issues.

## =� Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/freelanding.git
   cd freelanding
   ```

2. **Install Hugo**
   ```bash
   # macOS
   brew install hugo
   
   # Or download from https://gohugo.io/installation/
   ```

3. **Initialize submodules**
   ```bash
   git submodule update --init --recursive
   ```

4. **Configure your site**
   - Edit `hugo.toml` to customize your site settings
   - See [Configuration](#configuration) section below

5. **Run the development server**
   ```bash
   hugo server --buildDrafts
   ```

6. **Visit your site**
   - Open `http://localhost:1313` in your browser

## � Configuration

All site customization is centralized in `hugo.toml`. Edit these sections to personalize your site:

### Basic Settings
```toml
baseURL = 'https://your-domain.com'
title = "Your Site Title"
```

### Contact Form Configuration
```toml
[params.contact]
    github_username = "your-github-username"
    github_repo = "your-repository-name"
    primary_email = "your-email@example.com"
    business_hours = "Monday - Friday, 9:00 AM - 6:00 PM"
    response_time = "Within 24 hours"
    phone = ""  # Optional
```

### Site Branding
```toml
[params.site]
    company_name = "Your Company Name"
    tagline = "Your Professional Tagline"
    about_title = "About Us"
    gallery_title = "Gallery"
    contact_title = "Contact"
```

### Contact Information
```toml
[[params.contacts]]
    label = "email"
    value = "your-email@example.com"
    url = "mailto:your-email@example.com"
    icon = "fa fa-envelope"
```

### Color Theme Configuration
```toml
[params.colors]
    # Primary brand colors
    primary = "#2C3E50"           # Dark blue-gray (headers, nav)
    primary_light = "#34495E"     # Lighter shade for hover states
    primary_dark = "#1A252F"      # Darker shade for depth
    
    # Secondary colors
    secondary = "#3498DB"         # Bright blue (buttons, links)
    secondary_light = "#5DADE2"   # Lighter blue for hover
    secondary_dark = "#2980B9"    # Darker blue for active states
    
    # Accent colors
    accent = "#E74C3C"            # Red for emphasis/CTAs
    accent_light = "#EC7063"      # Lighter red for hover
    
    # Neutral colors
    background = "#FFFFFF"        # Main background
    background_alt = "#F8F9FA"    # Alternate background (sections)
    text = "#2C3E50"              # Main text color
    text_light = "#7F8C8D"        # Secondary text color
    text_muted = "#BDC3C7"        # Muted text color
    
    # UI elements
    border = "#E5E5E5"            # Border color
    shadow = "rgba(0,0,0,0.1)"    # Shadow color
    
    # Section backgrounds (alternating)
    section_odd = "#FFFFFF"       # Odd sections background
    section_even = "#F8F9FA"      # Even sections background
```

## =� Content Management

### Adding Content
- **About Us**: Edit `content/en/homepage/about-us.md`
- **Gallery**: Edit `content/en/homepage/gallery.md`
- **Contact**: Edit `content/en/homepage/contact.md`

### Adding Images
1. Place images in `static/images/`
2. Reference them in markdown: `![Alt text](/images/filename.jpg)`
3. Update `header_image` in `content/en/_index.md` for the header background

### Page Sections
Each page section is a separate markdown file in `content/en/homepage/`:
- `opener.md` - Welcome section
- `about-us.md` - About Us section
- `gallery.md` - Gallery section
- `contact.md` - Contact section

## =' GitHub Issues Contact Form

The contact form uses GitHub Issues for submissions. This provides:
-  No backend required
-  Automatic email notifications
-  Issue tracking and organization
-  Anti-spam protection

### Setup
1. Update `github_username` and `github_repo` in `hugo.toml`
2. The `.github/ISSUE_TEMPLATE/contact.md` template is already configured
3. Customize the template as needed

## <� Customization

### Theme Colors
Colors are now fully configurable through `hugo.toml`. The system provides:

**Color Categories:**
- **Primary**: Main brand colors (header, navigation)
- **Secondary**: Interactive elements (buttons, links)
- **Accent**: Call-to-action elements (contact button)
- **Neutral**: Text and background colors
- **UI**: Borders, shadows, and structural elements

**Color Matching Tips:**
1. Use a **primary color** that represents your brand
2. Choose a **secondary color** that complements the primary
3. Select an **accent color** for important actions
4. Keep **neutral colors** subtle for readability
5. Use tools like [coolors.co](https://coolors.co) to generate harmonious palettes

**Example Color Schemes:**
```toml
# Professional Blue
primary = "#2C3E50"
secondary = "#3498DB"
accent = "#E74C3C"

# Modern Green
primary = "#27AE60"
secondary = "#2ECC71"
accent = "#F39C12"

# Elegant Purple
primary = "#8E44AD"
secondary = "#9B59B6"
accent = "#E67E22"
```

### Fonts
Edit `hugo.toml` to change font families or add custom fonts.

### Layout
- Modify section order by changing `weight` in page frontmatter
- Add/remove sections by creating/deleting files in `content/en/homepage/`

## =� Deployment

### GitHub Pages
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Select source: GitHub Actions
4. The site will build automatically

### Netlify
1. Connect your GitHub repository
2. Build command: `hugo`
3. Publish directory: `public`

### Manual Build
```bash
hugo --minify
```
Upload the `public/` directory to your web server.

## =� Project Structure

```
freelanding/
   .github/
      ISSUE_TEMPLATE/
          contact.md          # Contact form template
   content/
      en/
          _index.md           # Homepage settings
          homepage/
              opener.md       # Welcome section
              about-us.md     # About Us section
              gallery.md      # Gallery section
              contact.md      # Contact section
   layouts/
      shortcodes/
          github_contact_form.html  # Contact form shortcode
   static/
      images/                 # Your images go here
   themes/
      hugo-scroll/            # Theme submodule
   hugo.toml                   # Main configuration
   README.md                   # This file
```

## > Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## =� License

This project is open source. The Hugo Scroll theme has its own license - see the theme's repository for details.

## <� Support

- Create an issue for bugs or feature requests
- Check the [Hugo documentation](https://gohugo.io/documentation/)
- Review the [Scroll theme documentation](https://github.com/zjedi/hugo-scroll)

---

**Happy building! <�**