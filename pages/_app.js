import "../styles/globals.css";
import Layout from "../components/Layout";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({
  variable: "--inter-font",
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout inter={inter}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
