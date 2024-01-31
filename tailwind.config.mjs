/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: theme => ({
				'gradient-dark':  'linear-gradient(#1b1c39 1px, transparent 1px), linear-gradient(to right, #1b1c39 1px, #13151a 1px)',
				'gradient-light':  'linear-gradient(#d1dcf6 1px, transparent 1px), linear-gradient(to right, #d1dcf6 1px, #c8d4ef 1px)'
			}),
			colors: {
				background0: "#13151a",
				background1: "#2D3250",
				background2: "#424769",
				background3: "#7077A1",
				primary: "#F6B17A",
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
				'infinite-scroll-reverse': 'infinite-scroll-reverse 25s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				'infinite-scroll-reverse': {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(0)' },
				}
			}    
		},
	},
	plugins: [],
}
