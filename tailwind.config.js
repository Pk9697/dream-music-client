/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-red': '#0e0e0e',
				'primary-red': '#410100',
				'primary-red-200': '#270504',
				'highlight-red': '#520000',
				'border-highlight-red': '#b30909',
				'logo-red': '#FF5656',
				'input-red': '#2c0001',
				'light-gray': '#CFC5C5',
				'light': '#f6f6f6',
			},
		},
	},
	plugins: [],
}
