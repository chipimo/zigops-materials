const withZM = require("./packages/zigops-material-react/src/utils/withZM");

module.exports = withZM({
  content: [
    "./packages/zigops-material-react/src/components/**/*.{js,ts,jsx,tsx}",
    "./packages/zigops-material-react/src/theme/components/**/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./documentation/**/*.mdx",
    "./public/zigops-material-html-v2.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
});
