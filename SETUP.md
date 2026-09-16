# CYSEC Project Setup Guide

## Quick Start

1. **Navigate to project directory:**
   ```bash
   cd "C:\Users\Hanip aja sih\cysec-website"
   ```

2. **Install dependencies** (if npm works in your environment):
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## Environment Configuration

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_CONTENTFUL_SPACE_ID=your-space-id
VITE_CONTENTFUL_ACCESS_TOKEN=your-contentful-token
```

## Project Structure

```
cysec-website/
+-- src/
¦   +-- components/       # Reusable UI components
¦   ¦   +-- Navbar.jsx
¦   ¦   +-- Footer.jsx
¦   ¦   +-- TerminalHero.jsx
¦   +-- pages/           # Page components
¦   ¦   +-- LandingPage.jsx
¦   ¦   +-- Roadmap.jsx
¦   ¦   +-- EbookStore.jsx
¦   ¦   +-- Webinars.jsx
¦   ¦   +-- Forum.jsx
¦   ¦   +-- MemberArea.jsx
¦   ¦   +-- Blog.jsx
¦   ¦   +-- Contact.jsx
¦   +-- lib/             # External integrations
¦   ¦   +-- supabaseClient.js
¦   ¦   +-- contentfulClient.js
¦   +-- App.jsx          # Main app with routing
¦   +-- main.jsx         # Entry point
¦   +-- index.css        # Global styles
+-- public/              # Static assets
¦   +-- manifest.json    # PWA manifest
+-- index.html
+-- package.json
+-- vite.config.js
+-- tailwind.config.js
+-- postcss.config.js
+-- vercel.json
+-- .gitignore
+-- README.md
```

## Customization

### Colors (tailwind.config.js)
- Primary: `#08157D` (dark blue)
- Cyber Cyan: `#00f3ff`
- Cyber Green: `#00ff41`
- Cyber Red: `#ff0055`

### Logo Integration
To use your existing logo (`cysec.mp4`):
1. Place logo files in `public/` folder
2. Update `Navbar.jsx` logo section

## Vercel Deployment

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_CONTENTFUL_SPACE_ID`
   - `VITE_CONTENTFUL_ACCESS_TOKEN`
4. Deploy!

## Features Implemented

? Landing Page with terminal animation
? Interactive Learning Roadmap
? Ebook Store with filtering
? Webinars with registration
? Community Forum
? Member Dashboard
? Blog/News section
? Contact Form
? Responsive mobile-first design
? PWA support
? Glitch effects
? HUD elements

## Next Steps

- Replace placeholder images with actual content
- Configure Supabase authentication
- Connect Contentful CMS
- Add Firebase/Supabase for backend
- Set up analytics
- Add real-time features
