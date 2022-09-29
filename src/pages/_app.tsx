import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { CustomAppPage } from "next/app";
import { useState } from "react";
import { useLoading } from "src/hooks/useLoading";
import "src/styles/index.css";

const MyApp: CustomAppPage = ({ Component, pageProps }) => {
  const { pageLoading, loadingComponent } = useLoading();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
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
  );
};

export default MyApp;
