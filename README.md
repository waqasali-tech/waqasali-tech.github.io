# 🚀 Waqas Ali — AI Engineer Portfolio

**Live Site:** [https://waqasali-tech.github.io/](https://waqasali-tech.github.io/)

A modern, responsive portfolio showcasing AI/ML projects, computer vision work, and technical expertise. Built with React 18, Vite 5, and deployed on GitHub Pages as a **user site** at the root domain.

---

## ✨ Features

- 🎨 **Modern Dark UI** — Minimalist design with glassmorphism elements
- ⚡ **Lightning Fast** — Vite-optimized build (~306 KB total, 75 KB gzipped)
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- ♿ **Accessible** — WCAG AA compliant with ARIA labels and semantic HTML
- 🎭 **Interactive** — Smooth animations, reveal effects with IntersectionObserver
- 🔍 **SEO Optimized** — Canonical URLs, Open Graph tags, structured data
- ⌨️ **Keyboard Navigation** — Full keyboard support for interactive elements
- 🌙 **Reduced Motion Support** — Respects user's motion preferences
- 🤖 **Automated Deployment** — GitHub Actions CI/CD on every push
- 🌐 **GitHub Pages User Site** — Deployed at root domain with automatic HTTPS

---

## 🛠 Technologies Used

### Frontend
- **React 18.2** — UI component framework with hooks
- **Vite 5.0** — Lightning-fast build tool and dev server
- **CSS Grid & Flexbox** — Responsive layout system
- **Vanilla JavaScript** — Page transitions, animations, keyboard handling

### Build & Deployment
- **GitHub Pages (User Site)** — Free static hosting at `https://waqasali-tech.github.io/`
- **GitHub Actions** — Automated CI/CD pipeline (`.github/workflows/deploy.yml`)
- **gh-pages** — npm package for deploying dist/ to GitHub Pages

### Styling & Assets
- **Google Fonts** — Playfair Display (serif), Inter (sans-serif)
- **Inline SVGs** — Project mockups and decorative graphics
- **Minified CSS** — Global styles (~9 KB gzipped)

### Development Tools
- **Node.js 18+** — JavaScript runtime
- **npm** — Package manager and task runner

---

## 📋 Project Structure

```
waqasali-tech.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions auto-deployment
├── src/
│   ├── main.jsx                 # Vite entry point
│   ├── App.jsx                  # React intro card component
│   ├── script.js                # Page transitions & animations
│   └── styles.css               # Global portfolio styles
├── dist/                        # Build output (generated)
├── index.html                   # Main HTML template
├── photo.jpeg                   # Profile image
├── vite.config.js               # Vite base: '/' for root deployment
├── package.json                 # Dependencies & scripts
├── .gitignore                   # Ignore build & node_modules
├── .nojekyll                    # Skip Jekyll processing
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher
- Git 2.30 or higher
- GitHub account (for deployment)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/waqasali-tech/waqasali-tech.github.io.git
   cd waqasali-tech.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173/` with hot reloads

4. **Build for production:**
   ```bash
   npm run build
   ```
   Creates optimized `dist/` directory

5. **Preview production build:**
   ```bash
   npm run preview
   ```
   Serves at `http://localhost:4173/`

---

## 📦 Deployment

### Automatic Deployment (GitHub Actions) ⭐ Recommended

This repository is configured for automatic deployment. Every time you push to `main`:

1. ✅ GitHub Actions runs the build workflow
2. ✅ Dependencies installed (`npm ci`)
3. ✅ Project built (`npm run build`)
4. ✅ `dist/` deployed to GitHub Pages
5. ✅ Site live at `https://waqasali-tech.github.io/` (~2-3 minutes)

**Workflow file:** `.github/workflows/deploy.yml`

**Monitor deployment:** https://github.com/waqasali-tech/waqasali-tech.github.io/actions

### Manual Deployment

To deploy manually using gh-pages:

```bash
npm run deploy
```

This runs `npm run build && gh-pages -d dist`

### One-Time Repository Setup (If Needed)

If this is a fresh repository:

```bash
git init
git remote add origin https://github.com/waqasali-tech/waqasali-tech.github.io.git
git add .
git commit -m "Initial commit: React + Vite portfolio"
git branch -M main
git push -u origin main
```

---

## ⚙️ Configuration

### Vite Configuration (`vite.config.js`)

```javascript
export default defineConfig({
  base: '/',                    // Root domain deployment
  plugins: [react()],
  server: { open: true },
  build: {
    outDir: 'dist',
    sourcemap: false,           // No sourcemaps in production
  }
});
```

**Key Setting:** `base: '/'` (root domain deployment, not subdirectory)

### Package.json Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Build production to dist/ |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Manual deploy to GitHub Pages |

### GitHub Pages Configuration

- **Repository:** `waqasali-tech/waqasali-tech.github.io`
- **Deployment Type:** User Site (root domain)
- **Live URL:** `https://waqasali-tech.github.io/`
- **CI/CD:** GitHub Actions (automatic)

---

## 🌐 Key URLs

| Resource | URL |
|----------|-----|
| **Live Site** | `https://waqasali-tech.github.io/` |
| **Repository** | `https://github.com/waqasali-tech/waqasali-tech.github.io` |
| **GitHub Actions** | `https://github.com/waqasali-tech/waqasali-tech.github.io/actions` |
| **Canonical URL** | `https://waqasali-tech.github.io/` |
| **Pages Settings** | `https://github.com/waqasali-tech/waqasali-tech.github.io/settings/pages` |

---

## 🔗 External Links

All project links point to GitHub repositories:
- [YOLOv8 Object Detection](https://github.com/waqasali-tech/Object-Detection-using-Yolo-v8-in-Python)
- [SVM Object Detection](https://github.com/waqasali-tech/Object-Detection-using-SVM-Support-Vector-Machinein-Python)
- [Diabetes Prediction System](https://github.com/waqasali-tech/Diabetes-Detection-ML-Comparison)
- [Flutter Music Player](https://github.com/waqasali-tech/Flutter-Mini-Player-Api-Based-)

---

## ♿ Accessibility

This portfolio meets **WCAG 2.1 Level AA** compliance:

- ✅ Semantic HTML: `<nav>`, `<footer>`, `<h1>`, etc.
- ✅ ARIA labels on interactive elements
- ✅ `.sr-only` class for screen reader text
- ✅ `aria-current="page"` on active navigation
- ✅ `role="tablist"` and `aria-label` on navigation
- ✅ Keyboard navigation: Tab through links, Enter/Space to activate
- ✅ `prefers-reduced-motion` respected (animations disabled for users)
- ✅ Color contrast > 4.5:1 for WCAG AA
- ✅ Loading state with `role="status"` and `aria-live="polite"`

---

## 🔍 SEO Optimization

- ✅ **Canonical URL:** `https://waqasali-tech.github.io/`
- ✅ **Meta Description:** "I build intelligent systems that see, learn & decide."
- ✅ **Open Graph Tags:** og:title, og:description, og:url, og:type, og:locale
- ✅ **Twitter Card:** twitter:card, twitter:title, twitter:description
- ✅ **Viewport:** `width=device-width, initial-scale=1.0`
- ✅ **Language:** `lang="en"` on `<html>` tag
- ✅ **Semantic HTML landmarks**
- ✅ **Mobile-friendly responsive design**

---

## ⚡ Performance Metrics

| Metric | Value | Status |
|--------|-------|--------|
| **Total Bundle** | 306 KB | ✓ Good |
| **Gzipped** | 75 KB | ✓ Excellent |
| **JavaScript** | 145.79 KB | ✓ Minified |
| **CSS** | 9.04 KB | ✓ Optimized |
| **Image** | 108.65 KB | ✓ Hashed |
| **Build Time** | ~1.3s | ✓ Fast |

---

## 🐛 Troubleshooting

### Build Fails with EISDIR Error
- Ensure `vite.config.js` has `base: '/'` (root deployment)
- All asset paths must be valid file paths, not directories

### Assets Not Loading After Deploy
- Verify `base` in vite.config.js matches deployment type
- Check dist/ folder was uploaded correctly
- Clear browser cache (Ctrl+Shift+Delete)

### GitHub Pages Site Not Updating
- Visit https://github.com/waqasali-tech/waqasali-tech.github.io/actions
- Check workflow status (green ✓ = deployed, red ✗ = error)
- Click failed workflow to see error logs

### Deployment Not Triggering
- Ensure you pushed to `main` branch (not `master`)
- Verify `.github/workflows/deploy.yml` exists in repository
- Check repository has GitHub Pages enabled

---

## 🔐 Security

- ✅ No hardcoded secrets or API keys
- ✅ HTTPS enforced on GitHub Pages
- ✅ `rel="noopener noreferrer"` on external links
- ✅ CSP-ready (no inline scripts except React)
- ✅ No sensitive data in bundle

---

## 📚 Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)** — Step-by-step deployment guide
- **[GITHUB_PAGES_CONFIG_SUMMARY.md](GITHUB_PAGES_CONFIG_SUMMARY.md)** — Complete configuration reference

---

## 🤝 Contributing

This is a personal portfolio. For suggestions or fixes:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📝 License

© 2026 Waqas Ali. All rights reserved.

---

## 🤝 Contact

- **LinkedIn:** [waqasali-tech](https://linkedin.com/in/waqasali-tech/)
- **GitHub:** [@waqasali-tech](https://github.com/waqasali-tech)
- **Email:** waqasvanikay2030@gmail.com

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages User Sites Guide](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Built with ❤️ using React + Vite**

**Deployment Type:** GitHub Pages User Site (Root Domain)  
**Status:** ✅ Production Ready  
**Last Updated:** December 2024
