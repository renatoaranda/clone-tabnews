import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove margens e padding padrão
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
