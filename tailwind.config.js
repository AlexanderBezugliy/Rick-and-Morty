/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
        backgroundImage: {
            'app-bg': "url('/bg-second.jpg')",
            'login-bg': "url('/bg-login(1).jpg')",
            'registr-bg': "url('/register-bg.jpg')"
        },
        animation: {
            'spin-slow': 'spin 3s linear infinite',
        },
    },
  },
  plugins: [],
}

