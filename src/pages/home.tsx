import Head from "next/head";
import { GetStaticProps, CustomNextPage } from "next";
import { Container, Pagination } from "@mantine/core";
import { Layout as LayoutCustom } from "src/layouts";
import { getAllPostsForHome } from "src/lib/api";
import { TopHost } from "src/components/elements/TopPost";
import { BlogCard } from "src/components/elements/BlogCard";
import { HeroHeader } from "src/components/elements/HeroHeader";

type Posts = {
  allPosts: any;
  preview: any;
};

const Home: CustomNextPage<Posts> = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Head>
        <title>Ocean Script</title>
      </Head>
      <Container>
        <HeroHeader />
        {heroPost && (
          <TopHost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <BlogCard posts={morePosts} />}
        <Pagination total={20} boundaries={2} initialPage={10} />
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

Home.getLayout = (page) => <LayoutCustom>{page}</LayoutCustom>;

export default Home;
