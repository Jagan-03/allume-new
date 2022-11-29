import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TransitionProvider } from "../components/TransitionProvider";
import TransitionLayout from "../components/TransitionLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Component {...pageProps} />
      </TransitionLayout>
    </TransitionProvider>
  );
}
