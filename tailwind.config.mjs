/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
