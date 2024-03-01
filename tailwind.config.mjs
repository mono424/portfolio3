const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: theme => ({
				'gradient-dark':  'linear-gradient(#efece908 1px, transparent 1px), linear-gradient(to right, #efece908 1px, transparent 1px)',
				'gradient-light':  'linear-gradient(#3c575817 1px, transparent 1px), linear-gradient(to right, #3c575817 1px, transparent 1px)'
			}),
			colors: {
				darkBlue: "#1a2523",
				darkGreen: "#3c5758",
				midGreen: "#949d8f",
				lightGreen: "#d1ebdb",
				lighterGreen: "#d0d5ce",
				beige: "#efece9",

				backgroundDark: "#1a2523",
				background0: "#d0d5ce",
				background1: "#efece9",
				background2: "#efece9",
				background3: "#efece9",
				primary: "#d1ebdb",
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
	plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }