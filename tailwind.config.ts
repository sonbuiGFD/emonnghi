import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS v4 Configuration
 *
 * Note: In Tailwind v4, theme customization is done in CSS using @theme directive.
 * This config file is only used for:
 * - Content paths (where to scan for class names)
 * - Plugins (if needed)
 *
 * See src/styles/globals.css for theme customization.
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
