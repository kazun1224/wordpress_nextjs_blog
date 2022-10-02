import Head from "next/head";
import { CustomNextPage } from "next";
import { Container } from '@mantine/core';
import { Layout as LayoutCustom } from "src/layouts";

const Profile: CustomNextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | Ocean Script</title>
      </Head>
      <Container>
        <h2>Profile</h2>
      </Container>
    </>
  );
};

Profile.getLayout = (page) => <LayoutCustom>{page}</LayoutCustom>;

export default Profile;
