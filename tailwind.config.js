module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4F46E5", // Indigo
                secondary: "#10B981", // Emerald
                dark: "#1F2937", // Gray-800
                light: "#F9FAFB", // Gray-50
                accent: "#F59E0B", // Amber-500
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};