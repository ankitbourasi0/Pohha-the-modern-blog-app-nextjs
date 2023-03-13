import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import { Layout } from "../Components";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
      
  );
}

export default MyApp;
