import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { CustomAppPage } from "next/app";
import { useState } from "react";
import { useLoading } from "src/hooks/useLoading";
import "src/styles/index.css";
import { ApolloProvider } from '@apollo/client';
import { client } from "src/lib/apolloClient";

const MyApp: CustomAppPage = ({ Component, pageProps }) => {
  const { pageLoading, loadingComponent } = useLoading();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ApolloProvider client={client}>

    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {pageLoading
          ? loadingComponent
          : getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </ColorSchemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
