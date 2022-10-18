import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";
import {
  Container,
  Image,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";

import PostTitle from "src/components/post-title";
import { getAllPostsWithSlug, getPostAndMorePosts } from "src/lib/api";
import { CMS_NAME } from "src/lib/constants";
import { parseISO, format } from "date-fns";
import { BlogCard } from "src/components/elements/BlogCard";
import { Layout as LayoutCustom } from "src/layouts";

type PostProps = {
  post: any;
  posts: any;
  preview: any;
};

const Post: CustomNextPage<PostProps> = ({ post, posts, preview }) => {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta
                property="og:image"
                content={post.featuredImage?.sourceUrl}
              />
            </Head>
            <Title order={1}>This is h1 title</Title>
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLLL	d, yyyy")}
            </time>
            {post.tags.edges.length > 0 && (
              <div className="mx-auto max-w-2xl">
                <p className="mt-8 text-lg font-bold">
                  Tagged
                  {post.tags.edges.map((tag, index) => (
                    <span key={index} className="ml-4 font-normal">
                      {tag.node.name}
                    </span>
                  ))}
                </p>
              </div>
            )}
            <Image
              height={80}
              src={post.featuredImage.node.souresUrl}
              alt={`Cover Image for ${post.title}`}
            />
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </TypographyStylesProvider>
          </article>
          <BlogCard posts={morePosts} />
        </>
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};

Post.getLayout = (page) => <LayoutCustom>{page}</LayoutCustom>;

export default Post;
