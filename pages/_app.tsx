import { Fragment } from "react";

// next.js components
import Script from "next/script";

// @zigops-material components
import { ThemeProvider } from "@zigops-material/react";

// styles
import "/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
