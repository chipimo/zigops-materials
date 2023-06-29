import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import merge from "deepmerge";
import theme from "../theme/index";
import combineMerge from "../utils/combineMerge";

const ZigOpsMaterialTheme = createContext(theme);

ZigOpsMaterialTheme.displayName = "ZigOpsMaterialThemeProvider";

function ThemeProvider({ value = theme, children }) {
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge });

  return (
    <ZigOpsMaterialTheme.Provider value={mergedValue}>{children}</ZigOpsMaterialTheme.Provider>
  );
}

const useTheme = () => useContext(ZigOpsMaterialTheme);

ThemeProvider.propTypes = {
  value: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};

export { ZigOpsMaterialTheme, ThemeProvider, useTheme };
