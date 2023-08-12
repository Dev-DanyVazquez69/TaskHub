import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import ContainerIndex from "@/components/containerIndex";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContainerIndex>
      <Component {...pageProps} />
    </ContainerIndex>
  );
}
