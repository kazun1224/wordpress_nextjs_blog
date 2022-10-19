import Head from "next/head";
import { GetStaticProps, CustomNextPage } from "next";
import { Container } from "@mantine/core";
import MoreStories from "src/components/more-stories";
import HeroPost from "src/components/hero-post";
import { Layout as LayoutCustom } from "src/layouts";
import { getAllPostsForHome } from "src/lib/api";

type Posts = {
  allPosts: any;
  preview: any;
};

const Articles: CustomNextPage<Posts> = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Head>
        <title>Ocean Script</title>
      </Head>
      <Container>
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
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

Articles.getLayout = (page) => <LayoutCustom>{page}</LayoutCustom>;

export default Articles;
