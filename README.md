# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and SCSS.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **SCSS/Sass** for advanced styling capabilities
- **Responsive Design** optimized for all devices
- **Modern UI** with smooth animations and transitions
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with Next.js built-in optimizations

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS + SCSS
- **Package Manager:** npm
- **Linting:** ESLint
- **Bundler:** Turbopack (Next.js)

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sonbuiGFD/emonnghi.git
   cd emonnghi
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   └── *.scss          # Component styles
├── styles/             # Global styles
│   └── globals.scss    # Global SCSS with Tailwind
└── lib/                # Utility functions
```

## 🎨 Customization

### Colors

Update CSS variables in `src/styles/globals.scss`:

```scss
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
}
```

### Content

- Update personal information in `src/components/Hero.tsx`
- Modify about section in `src/components/About.tsx`
- Add your projects, skills, and contact information

### Styling

- Global styles: `src/styles/globals.scss`
- Component styles: Individual `.scss` files next to components
- Utility classes: Use Tailwind CSS classes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `out` directory to your preferred hosting platform

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀**
