/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				128: "32rem",
			},
			backgroundColor: {
				"blue-violet": "#8a2be2",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	},
};
