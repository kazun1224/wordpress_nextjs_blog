import Head from "next/head";
import { CustomLayout, GetStaticProps,CustomNextPage } from "next";
import Container from "src/components/container";
import MoreStories from "src/components/more-stories";
import HeroPost from "src/components/hero-post";
import Intro from "src/components/intro";
import Layout from "src/components/layout";
import { Layout as LayoutCustom } from "src/layouts";
import { getAllPostsForHome } from "src/lib/api";
import { CMS_NAME } from "src/lib/constants";
import { Button } from "@mantine/core";

type Posts = {
  allPosts:any;
  preview: any;
}

const Home: CustomNextPage<Posts> = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

Home.getLayout = (page) => <LayoutCustom>{page}</LayoutCustom>;

export default Home;
