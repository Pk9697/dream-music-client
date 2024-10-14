/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-red': '#0e0e0e',
				'dark-red-light': '#0e0e0e80',
				'primary-red': '#410100',
				'primary-red-200': '#270504',
				'highlight-red': '#520000',
				'border-highlight-red': '#b30909',
				'logo-red': '#FF5656',
				'input-red': '#2c0001',
				'player-red': '#6a0000',
				'light-gray': '#CFC5C5',
				'light': '#f6f6f6',
				'lighter': '#F6F6F680',
			},
		},
	},
	plugins: [],
}
