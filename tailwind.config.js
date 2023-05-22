/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts}', './index.html'],
    theme: {
        extend: {
            colors: {
                LightSand: '#FCF7E6',
            },
        },
        fontFamily: {
            grotest: ['Space Grotesk', 'sans-serif'],
            space: ['Space Mono', 'monospace'],
        },
    },
    plugins: [],
};
