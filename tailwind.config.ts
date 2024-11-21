import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				white: '#fff',
				green: '#0909'
				// Add our application colors here
			},
			fontFamily: {
				bauhaus93: ['Bauhaus93', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif']
			}
		}
	},

	plugins: [typography]
} satisfies Config;
