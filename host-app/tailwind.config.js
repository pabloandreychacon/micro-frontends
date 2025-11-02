/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../remote-app/src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-gray-800',
    'bg-red-500',
    'hover:bg-red-600',
    'text-white',
    'text-2xl',
    'p-4',
    'px-4',
    'py-2',
    'rounded',
    'hover:cursor-pointer'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}