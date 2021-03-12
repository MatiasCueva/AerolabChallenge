import App from 'next/app';
import { AppContextProvider } from "../context/context";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    );
  }
}

export default MyApp;