import { HeaderComponent } from "src/layouts/header";
import { FooterComponent } from "src/layouts/footer";
import { CustomLayout } from "next";
import Head from "next/head";

export const Layout: CustomLayout = (props) => {
  const links = [
    {
      link: "/",
      label: "Home",
      links: [
        {
          link: "",
          label: "",
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Ocean Script</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent links={links} />
      <main className="py-20 md:py-32">{props.children}</main>
      <FooterComponent />
    </>
  );
};
