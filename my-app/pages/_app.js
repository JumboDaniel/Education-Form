import { NameContextProvider } from "../context/state";

function Application({ Component, pageProps }) {
  return (
    <NameContextProvider>
      <Component {...pageProps} />
    </NameContextProvider>
  );
}

export default Application;
