import { HeaderComponent } from "src/layouts/header";
import { FooterComponent } from "src/layouts/footer";
import { CustomLayout } from "next";
import Head from "next/head";
import { Meta } from "src/layouts/meta";
import { MobileNav } from "src/layouts/mobile-nav";
import { useMediaQuery } from "@mantine/hooks";

export const Layout: CustomLayout = (props) => {
  const media = useMediaQuery("max-width: 700px)");

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <div className="relative"></div>
      <HeaderComponent />
      <main className="py-20 md:py-32">{props.children}</main>
      <FooterComponent />
      {media ? <MobileNav /> : undefined}
    </>
  );
};
