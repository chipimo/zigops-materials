/**
 * This is a helper function for merging the main configuration of @zigops-material with the Tailwind CSS configuration
 */

const merge = require("deepmerge");
const colors = require("../theme/base/colors");
const typography = require("../theme/base/typography");
const shadows = require("../theme/base/shadows");
const breakpoints = require("../theme/base/breakpoints");

const ZigOpsMaterialConfig = {
  content: [],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows,
    screens: breakpoints,
  },
  plugins: [],
};

/**
 * Merge @zigops-material and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function withZM(tailwindConfig) {
  const themeFont = ZigOpsMaterialConfig.theme.fontFamily;

  if (tailwindConfig.theme.fontFamily) {
    const { sans, serif, body } = tailwindConfig.theme.fontFamily;

    themeFont.sans = sans || themeFont.sans;
    themeFont.serif = serif || themeFont.serif;
    themeFont.body = body || themeFont.body;
  }

  return merge(ZigOpsMaterialConfig, { ...tailwindConfig });
}

module.exports = withZM;
