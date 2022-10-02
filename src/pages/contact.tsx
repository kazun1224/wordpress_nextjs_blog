import Head from "next/head";
import { CustomNextPage } from "next";
import { Container } from '@mantine/core';


import { Layout as LayoutCustom } from "src/layouts";

const Contact: CustomNextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Ocean Script</title>
      </Head>
      <Container>
        <h2>Contact</h2>
      </Container>
    </>
  );
};

Contact.getLayout = (page) => <LayoutCustom>{page}</LayoutCustom>;

export default Contact;
