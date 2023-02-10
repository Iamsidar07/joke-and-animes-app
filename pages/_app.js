import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";
import { MyContextProvider } from "../context/myContext";

function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Head>
        <title>Jokeshub</title>
        <meta name="description" content="Easily access free
Jokes,memes" />
        <link
          rel="icon"
          href="https://iconape.com/wp-content/files/vc/201433/png/201433.png"
        />
      </Head>
      <Navbar />
     

      <Component {...pageProps} />

      <Footer />
    </MyContextProvider>
  );
}

export default MyApp;
