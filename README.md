# Nghi Ho - Product Designer Portfolio

A modern, responsive single-page portfolio website built with Next.js, Tailwind CSS, and SCSS. This portfolio showcases a clean, professional design with smooth scrolling, accessibility features, and optimized performance.

## 🎯 Features

- **Modern Design**: Clean, minimal design with generous whitespace and thoughtful typography
- **Fully Responsive**: Mobile-first approach with breakpoints for all screen sizes (sm, md, lg, xl, 2xl)
- **Accessibility**: WCAG compliant with semantic HTML, keyboard navigation, skip links, and proper ARIA labels
- **Performance Optimized**: Optimized images with next/image, minimal client-side JavaScript
- **SEO Ready**: Complete metadata, Open Graph tags, and structured content
- **Smooth Interactions**: Smooth scrolling navigation and subtle hover effects

## � Tech Stack

- **Next.js 15.5.5** (App Router)
- **React 19.1.0**
- **TypeScript**
- **Tailwind CSS 4**
- **SCSS/Sass**
- **ESLint** for code quality

## 📱 Sections

1. **Header** - Sticky navigation with smooth scroll links
2. **Hero** - Introduction with illustration and call-to-action
3. **About** - Biography, experience timeline, and education
4. **Clients** - Logo grid of trusted partners and clients
5. **Work** - Portfolio showcase organized by categories (Website, App, System Design)
6. **Contact** - Contact information with copy-to-clipboard functionality
7. **Footer** - Simple footer with navigation and copyright

## 🎨 Design System

### Typography

- **Display Font**: Georgia (fallback serif) for headlines
- **Body Font**: System fonts (system-ui, -apple-system, etc.) for body text
- **Responsive Sizing**: `clamp()` functions for fluid typography

### Colors

- **Primary Text**: `#1a1a1a`
- **Secondary Text**: `#666666`
- **Borders**: `#eaeaea`
- **Background**: `#ffffff`

### Spacing

- Mobile-first responsive spacing using Tailwind utilities
- Generous vertical spacing (py-16 md:py-24 lg:py-32)
- Consistent container max-widths with responsive padding

## 🏃‍♂️ Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx            # Main page component
│   └── globals.scss        # Global styles and Tailwind imports
├── components/
│   ├── SiteHeader.tsx      # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section with experience
│   ├── Clients.tsx        # Client logos and stats
│   ├── Work.tsx           # Portfolio showcase
│   ├── Contact.tsx        # Contact information
│   ├── Footer.tsx         # Site footer
│   └── Section.tsx        # Generic section wrapper
public/
├── hero-illustration.svg   # Hero section illustration
├── contact-illustration.svg # Contact section illustration
├── logo-*.svg             # Client logo assets
└── og-image.png           # Social media preview image
```

## ⚡ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance & Accessibility

### Performance Features

- Optimized images with `next/image`
- Minimal client-side JavaScript
- Efficient font loading with system font fallbacks
- CSS optimization with Tailwind

### Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Skip to main content link
- Keyboard navigation support
- Focus indicators
- ARIA labels and landmarks
- Color contrast compliance (≥4.5:1)

## 🌐 SEO Optimization

- Complete metadata configuration
- Open Graph tags for social sharing
- Twitter Card support
- Structured data with proper headings
- Optimized images with alt text
- Clean, crawlable URLs

## � Responsive Breakpoints

- **Mobile**: 375px+ (base styles)
- **Small**: 640px+ (sm:)
- **Medium**: 768px+ (md:)
- **Large**: 1024px+ (lg:)
- **Extra Large**: 1280px+ (xl:)
- **2X Large**: 1536px+ (2xl:)

## 🎨 Customization

### Updating Content

1. Edit component files in `src/components/` to update content
2. Replace placeholder images in `public/` with actual assets
3. Update contact information in `Contact.tsx`
4. Modify experience data in `About.tsx`

### Styling

1. Update design tokens in `tailwind.config.ts`
2. Modify global styles in `src/app/globals.scss`
3. Customize component styles using Tailwind classes

### Adding Sections

1. Create new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `SiteHeader.tsx` if needed

## 🤝 Contact

For questions about this portfolio:

- Email: nghi.ho@example.com
- LinkedIn: linkedin.com/in/nghiho

---

Built with ❤️ using Next.js and Tailwind CSS

---
