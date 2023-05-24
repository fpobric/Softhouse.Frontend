import "../styles/application.scss";
import { wrapper } from "../store/store-wrapper";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import LoadingProvider from "../providers/loading";
import { useRouter } from "next/router";
import AuthProvider from "../providers/auth";

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { locale } = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [locale]);

  return (
    <AuthProvider session={rest.pageProps.session}>
      <Provider store={store}>
        <LoadingProvider>
          <Component {...props.PageProps} />
        </LoadingProvider>
      </Provider>
    </AuthProvider>
  );
};

export default appWithTranslation(App);
