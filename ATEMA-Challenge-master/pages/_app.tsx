import Layout from "../src/components/commons/layout";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { createContext } from "react";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const value = {};

  return (
    <GlobalContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

export default MyApp;
