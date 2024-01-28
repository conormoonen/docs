/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'mb-6',
    'inline-block',
    'mb-1',
    'mb-2',
    'mb-4',
    'mb-6',
    'mt-1',
    'mt-0.5',
    'mt-2',
    'max-w-3xl',
    'max-w-xl',
    'max-w-md',
    'max-w-sm',
    'mx-auto',
    'lg:text-4xl',

  ],
  plugins: [],
}