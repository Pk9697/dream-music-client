/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-red': '#0e0e0e',
				'primary-red': '#c00',
				'highlight-red': '#990000',
				'light-gray': '#CFC5C5',
				'light': '#f6f6f6',
				'logo-red': '#FF5656',
				
			},
		},
	},
	plugins: [],
}
