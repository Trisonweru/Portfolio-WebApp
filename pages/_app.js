import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "react-sweet-progress/lib/style.css";
import store from "../redux/store";
// import { Provider } from "react-redux";
import { Provider } from "next-auth/client";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { ApolloProvider } from "@apollo/client";
import client from "../components/Apollo_Client/Client";
import { AnimatePresence } from "framer-motion";

const progress = new ProgressBar({
  size: 4,
  color: "#01bf71",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps, router }) {
  return (
    // <Provider store={store}>
    <Provider session={pageProps.session}>
      <ApolloProvider client={client}>
        <AnimatePresence exitBeforeEnter>
          <Layout key={router.route}>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ApolloProvider>
    </Provider>
    // </Provider>
  );
}

export default MyApp;
