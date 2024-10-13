/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-red': '#3c0c0c',
				'primary-red': '#c00',
				'highlight-red': '#990000',
				'light-gray': '#f5f5f5',
			},
		},
	},
	plugins: [],
}
