# VLK InfoSec Consulting - Deployment Guide

Canonical domain: `vlk-infosec.com`

Primary Google Workspace contact: `milica@vlk-infosec.com`

## Quick Start: GitHub + Cloudflare Pages

This guide will help you deploy your VLK InfoSec Consulting website to Cloudflare Pages using GitHub.

### Prerequisites

- GitHub account
- Cloudflare account (free tier is sufficient)
- Git installed on your computer

---

## Step 1: Prepare Your GitHub Repository

### Option A: Create a New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name your repository: `vlk-infosec-consulting`
3. Add description: "VLK InfoSec Consulting - Strategic CISO Leadership"
4. Choose "Public" or "Private" (your preference)
5. Click "Create repository"

### Option B: Use an Existing Repository

If you already have a repository, you can use it directly.

---

## Step 2: Push Your Code to GitHub

### On Your Computer (Terminal/Command Prompt)

Navigate to your project directory and run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: VLK InfoSec Consulting website"

# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/vlk-infosec-consulting.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Connect Cloudflare Pages

### 1. Log in to Cloudflare Dashboard

- Go to [dash.cloudflare.com](https://dash.cloudflare.com)
- Log in with your Cloudflare account

### 2. Create a New Pages Project

1. In the left sidebar, click **"Pages"**
2. Click **"Create a project"**
3. Select **"Connect to Git"**
4. Authorize Cloudflare to access your GitHub account
5. Select your GitHub organization
6. Find and select `vlk-infosec-consulting` repository
7. Click **"Begin setup"**

### 3. Configure Build Settings

In the "Set up builds and deployments" screen:

- **Project name**: `vlk-infosec-consulting` (or your preferred name)
- **Production branch**: `main`
- **Framework preset**: Select `"Vite"`
- **Build command**: `pnpm build`
- **Build output directory**: `dist/public`
- **Root directory**: `/`

### 4. Environment Variables (Optional)

If you need to add environment variables:

1. Click **"Environment variables"**
2. Add any variables your site needs (usually not needed for static sites)
3. Click **"Save and deploy"**

### 5. Deploy

> Napomena: ovaj projekat koristi template koji tokom builda pravi statičke fajlove u `dist/public`. Zato je upravo `dist/public` folder potrebno izabrati kao Cloudflare Pages output directory.

Cloudflare will automatically:

1. Pull your code from GitHub
2. Run the build command (`pnpm build`)
3. Deploy the `dist` folder to Cloudflare Pages
4. Provide you with a live URL

---

## Step 4: Custom Domain

The intended production domain is `vlk-infosec.com`. After the first Pages deployment, connect it under **Custom domains** and follow Cloudflare's DNS instructions.

### Add Your Own Domain

1. In your Cloudflare Pages project, go to **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter your domain name
4. Follow the DNS setup instructions (Cloudflare will guide you)

### Using a Domain You Already Own

If you own a domain elsewhere:

1. Point your domain's nameservers to Cloudflare
2. Add the domain to your Cloudflare account
3. Link it to your Pages project

---

## Step 5: Automatic Deployments

Once connected, Cloudflare Pages will automatically:

- Deploy whenever you push to the `main` branch
- Create preview deployments for pull requests
- Provide deployment logs and history

### Making Updates

To update your website:

```bash
# Make changes to your files
# Then:
git add .
git commit -m "Update: description of changes"
git push origin main
```

Cloudflare will automatically rebuild and deploy your changes within minutes.

---

## Project Structure

```
vlk-infosec-consulting/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Main landing page
│   │   │   └── NotFound.tsx      # 404 page
│   │   ├── components/           # Reusable UI components
│   │   ├── App.tsx               # Main app component
│   │   ├── main.tsx              # React entry point
│   │   └── index.css             # Global styles & design tokens
│   ├── public/                   # Static files (favicon, robots.txt)
│   └── index.html                # HTML template
├── package.json                  # Dependencies
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
└── DEPLOYMENT.md                 # This file
```

---

## Customization Guide

### Brand and Content Notes

The page intentionally follows the supplied VLK identity: midnight/black surfaces, violet, magenta and royal-blue wave gradients, metallic-gold accents, network linework, the original VLK logo and the Direction · Structure · Assurance triangle. Do not replace these with generic light cards or a different consulting palette.

The contact CTA is connected to `milica@vlk-infosec.com`, the provided Google Workspace address.

### Updating Content

Edit `/client/src/pages/Home.tsx` to modify:

- Headings and descriptions
- Service offerings
- Company information
- Contact details

### Changing Colors

The current brand tokens are defined in `/client/src/index.css` and should remain aligned with the supplied templates:

```css
--vlk-midnight: #000030;
--vlk-deep-violet: #300050;
--vlk-violet: #6000c0;
--vlk-magenta: #d01060;
--vlk-pink: #e02060;
--vlk-blue: #0050d0;
--vlk-gold: #d4a574;
--vlk-soft-gold: #f2d39b;
```

### Updating Typography

Typography is intentionally kept bold, geometric and highly legible against dark surfaces, following the supplied logo and PowerPoint templates. If the original brand font file becomes available, update the `--font-brand`, `--font-display` and `--font-body` variables in `/client/src/index.css` in one place.

### Adding New Sections

1. Create a new component in `/client/src/components/`
2. Import it in `/client/src/pages/Home.tsx`
3. Add it to the page layout
4. Style using Tailwind CSS classes

---

## Troubleshooting

### Build Fails on Cloudflare

**Problem**: Build command fails
**Solution**: 
- Check that `pnpm build` works locally: `pnpm build`
- Ensure all dependencies are in `package.json`
- Check Cloudflare build logs for specific errors

### Images Not Showing

**Problem**: Images appear broken
**Solution**:
- Verify image URLs in the code match the generated asset URLs
- Check that images are in `/home/ubuntu/webdev-static-assets/`
- Ensure image paths use the correct `/manus-storage/` prefix

### Site Not Updating

**Problem**: Changes don't appear after push
**Solution**:
- Wait 2-3 minutes for Cloudflare to rebuild
- Check Cloudflare Pages deployment history
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that you pushed to the correct branch (`main`)

---

## Local Development

To test changes locally before pushing:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

---

## Performance Tips

- Images are automatically optimized by Cloudflare
- CSS and JavaScript are minified during build
- Static files are cached globally
- Use Cloudflare's analytics to monitor performance

---

## Support & Resources

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Vite Documentation**: https://vitejs.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **React Documentation**: https://react.dev/

---

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Connect Cloudflare Pages
3. ✅ Configure custom domain (optional)
4. ✅ Monitor deployments
5. ✅ Update content as needed

Your website is now live and will automatically update whenever you push changes to GitHub!
