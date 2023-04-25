import Head from "next/head.js";
import Footer from "./Footer.js";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="App to have fun with game and test" />
        <title>{pageTitle}</title>
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
