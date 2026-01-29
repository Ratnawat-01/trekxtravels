/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx,html}"
    ],
    theme: {
        extend: {
            colors: {
                'trekx-black': '#0f0f0f',
                'trekx-dark': '#1a1a1a',
                'trekx-gold': '#FFA500',
                'trekx-green': '#228B22',
                'trekx-light': '#f3f4f6'
            },
            fontFamily: {
                'sans': ['Outfit', 'sans-serif'],
                'display': ['Montserrat', 'serif']
            }
        },
    },
    plugins: [],
}
