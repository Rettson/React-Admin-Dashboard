import "../styles/globals.css";
import Layout from "../components/Layout";
import "react-loading-skeleton/dist/skeleton.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
