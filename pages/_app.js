// import '../styles/globals.css'

import { StyleSheetManager } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager>
      <Component {...pageProps} />
    </StyleSheetManager>
  );
}
