# VLK InfoSec Consulting - Strategic CISO Leadership

A modern, professional landing page for VLK InfoSec Consulting showcasing Virtual CISO (vCISO) services, core competencies, and organizational governance functions.

## 🎯 Project Overview

This website presents VLK InfoSec Consulting's vCISO services with a focus on:

- **Strategic Guidance**: Defining security direction and business-aligned cybersecurity strategy
- **Risk Management**: Identifying and prioritizing cybersecurity risks based on business impact
- **Compliance Leadership**: Helping organizations meet regulatory and industry requirements
- **Governance Structure**: Building sustainable security processes and accountability
- **Oversight & Assurance**: Ensuring security controls are effectively implemented and measured

## 🎨 Design Philosophy

The site follows the user-provided VLK InfoSec Consulting identity rather than a generic consulting template. It uses a midnight/black base, controlled royal-blue/violet/magenta wave gradients, metallic-gold foreground details, fine network linework, the original VLK logo and the Direction · Structure · Assurance triangle as a recurring strategic motif. The result is dark, dramatic, structured and professional, with gold frames and sharp geometric accents instead of light SaaS cards.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and pnpm
- Git

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build optimized production bundle
pnpm build

# Preview production build locally
pnpm preview
```

## 📁 Project Structure

```
vlk-infosec-consulting/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx              # Main landing page with all sections
│   │   │   └── NotFound.tsx          # 404 error page
│   │   ├── components/
│   │   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── ErrorBoundary.tsx     # Error handling
│   │   │   └── Map.tsx               # Google Maps integration
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx      # Theme management
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── lib/                      # Utility functions
│   │   ├── App.tsx                   # Main app component & routing
│   │   ├── main.tsx                  # React entry point
│   │   └── index.css                 # Global styles & design tokens
│   ├── public/
│   │   ├── favicon.ico               # Website icon
│   │   └── robots.txt                # SEO robots file
│   └── index.html                    # HTML template
├── server/                           # Backend placeholder (not used for static)
├── shared/                           # Shared types (compatibility)
├── package.json                      # Dependencies & scripts
├── vite.config.ts                    # Vite configuration
├── tsconfig.json                     # TypeScript configuration
├── DEPLOYMENT.md                     # Deployment guide (GitHub + Cloudflare)
└── README.md                         # This file
```

## 🎨 Design Tokens

All colors and typography are defined in `/client/src/index.css`:

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Midnight | #000030 | Main surfaces and footer |
| Deep Violet | #300050 | Gradient depth and section surfaces |
| Violet | #6000C0 | Secondary gradient and linework |
| Magenta | #D01060 | Energy accent and hover states |
| Pink Magenta | #E02060 | Strong highlight edge |
| Royal Blue | #0050D0 | Secondary gradient |
| Gold | #D4A574 | Logo, headings, rules and frames |
| Soft Gold | #F2D39B | Highlighted text and contrast |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| Geometric sans-serif brand fallback | 700-800 | Main headings and strategic labels |
| Geometric sans-serif brand fallback | 600-700 | Section headings and cards |
| Geometric sans-serif brand fallback | 400-500 | Body copy and supporting text |

## 📄 Page Sections

### Hero Section
- Eye-catching headline with abstract merkaba background
- Subheading and call-to-action buttons
- Professional brand introduction

### What a vCISO Does
- Three core service offerings with icons
- Strategic Guidance, Risk Management, Compliance Leadership
- Interactive cards with hover effects

### Core Competencies
- Technical Depth, Business Acumen, Communication Skills
- Illustrated cards with detailed descriptions
- Visual hierarchy and professional styling

### Three Core Functions
- Strategic Function (Direction)
- Governance Function (Structure)
- Oversight Function (Assurance)
- Detailed breakdowns with checkmarks and organized layout

### vCISO Responsibility Map
- What vCISO "Owns" (Security Strategy, Risk Register, etc.)
- What vCISO "Oversees" (SOC, Vulnerability Management, etc.)
- What vCISO "Advises On" (Tool Selection, Architecture, etc.)
- Three-column card layout with color-coded categories

### Call-to-Action Section
- Prominent heading and description
- Primary CTA button for contact/inquiry

### Footer
- Company information and branding
- Navigation links
- Legal links (Privacy, Terms)
- Copyright notice

## 🔧 Customization

### Updating Content

Edit `/client/src/pages/Home.tsx` to modify:

- Headings, descriptions, and service offerings
- Company information and contact details
- Links and navigation items
- Any text throughout the page

### Changing Colors

Edit color variables in `/client/src/index.css`:

```css
--vlk-navy: #1a2a4a;      /* Change primary color */
--vlk-gold: #d4a574;      /* Change accent color */
--vlk-purple: #6b5b95;    /* Change secondary color */
--vlk-cream: #f9f8f6;     /* Change background */
--vlk-slate: #5a6b7a;     /* Change text color */
```

### Updating Typography

Modify font imports in `/client/src/index.css` or change font family variables:

```css
--font-display: 'Playfair Display', serif;
--font-heading: 'Poppins', sans-serif;
--font-body: 'Inter', sans-serif;
```

### Adding New Sections

1. Create a new component in `/client/src/components/`
2. Import it in `/client/src/pages/Home.tsx`
3. Add to the page layout
4. Style using Tailwind CSS and brand colors

## 🚀 Deployment

### Cloudflare Pages (Recommended)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step instructions.

**Quick summary:**
1. Push code to GitHub
2. Connect GitHub repository to Cloudflare Pages
3. Set build command: `pnpm build`
4. Set output directory: `dist`
5. Deploy and get automatic updates on every push

### Other Hosting Options

- **Vercel**: Supports Vite projects natively
- **Netlify**: Drag-and-drop or Git integration
- **AWS Amplify**: AWS-based hosting
- **Any static host**: Build locally with `pnpm build`, upload `dist/` folder

## 📊 Performance

- **Optimized Images**: Generated assets are automatically optimized
- **Code Splitting**: Vite automatically splits code for optimal loading
- **Minification**: CSS and JavaScript are minified in production
- **Caching**: Cloudflare provides global edge caching
- **Fast Refresh**: Hot module replacement during development

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Responsive design for all devices

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for larger screens
- **Breakpoints**: Tailwind CSS responsive utilities (sm, md, lg, xl)
- **Touch Friendly**: Large tap targets and spacing
- **Flexible Layouts**: Grid and flexbox for responsive behavior

## 🔐 Security

- No external API calls (static site)
- No user data collection
- HTTPS enforced by Cloudflare
- Content Security Policy headers
- Regular dependency updates

## 🛠️ Available Scripts

```bash
# Development
pnpm dev          # Start dev server with hot reload

# Production
pnpm build        # Build optimized production bundle
pnpm preview      # Preview production build locally

# Code Quality
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier
```

## 📦 Dependencies

### Core
- **React 19**: UI library
- **Vite 7**: Build tool and dev server
- **Tailwind CSS 4**: Utility-first CSS framework
- **TypeScript**: Type safety

### UI Components
- **shadcn/ui**: High-quality React components
- **Lucide React**: Icon library
- **Framer Motion**: Animation library

### Utilities
- **Wouter**: Lightweight routing
- **Sonner**: Toast notifications
- **Zod**: Schema validation

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

MIT License - feel free to use and modify this template

## 🤝 Contributing

To make updates:

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make changes and test locally: `pnpm dev`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Create a pull request on GitHub

## 📞 Support

For questions or issues:

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
2. Review Cloudflare Pages documentation
3. Check Vite documentation for build issues
4. Review React documentation for component questions

## 🎓 Learning Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

---

**VLK InfoSec Consulting** — Strategic CISO Leadership for Organizations That Refuse to Compromise

Built with ❤️ using React, Vite, and Tailwind CSS
