/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#5c57ff',
				foreground: '#575759',
				accent: '#FED924'
			},
			borderRadius: {
				button: '0.25rem'
			}
		}
	},

	plugins: []
};

module.exports = config;
