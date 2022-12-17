import "../styles/globals.css";
import Layout from "../components/Layout";
import { Inter } from "@next/font/google";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";
import { motion, AnimatePresence } from "framer-motion";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps, router }) {


  return (
    <main className={inter.className}>
      <NextNProgress
        color="#F97E27"
        startPosition={0.3}
        height={3}
        options={{ easing: "ease", showSpinner: false }}
      />

      <ToastContainer />
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
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          {" "}
          <Layout inter={inter}>
            <Component {...pageProps} />{" "}
          </Layout>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default MyApp;
