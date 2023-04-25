import { CirculeChoiceProvider } from "@/context/CirculeChoiceContext.js";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CirculeChoiceProvider>
      <Component {...pageProps} />
    </CirculeChoiceProvider>
  );
}
