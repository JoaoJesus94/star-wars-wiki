/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Inter, sans-serif',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: { themes: ['dark'] },
}
