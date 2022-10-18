import {
  Grid,
  Card,
  Image,
  Text,
  Badge,
  Container,
  Avatar,
} from "@mantine/core";
import { parseISO, format } from "date-fns";

export const BlogCard = ({ posts }) => {
  // author
  //   const isAuthorHaveFullName =
  //   author?.node?.firstName && author?.node?.lastName;
  // const name = isAuthorHaveFullName
  //   ? `${author.node.firstName} ${author.node.lastName}`
  //   : author.node.name || null;

  return (
    <Grid className="mt-10">
      {posts.map(({ node }) => (
        <Grid.Col span={4} key={node.slug}>
          <Card shadow="sm" p="xl" component="a" href={`/posts/${node.slug}`}>
            <Card.Section>
              <Image
                src={node.featuredImage?.node.sourceUrl}
                height={160}
                alt={node.title}
              />
            </Card.Section>

            <Text weight={500} size="lg" mt="md">
              {node.title}
            </Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>

            <Text mt="xs" color="dimmed" size="sm">
              {node.excerpt}
            </Text>
            <Container>
              {/* <Avatar  radius="xl" src={node.author.node.avatar.url} alt={name} />
          <div className="text-xl font-bold">{name}</div> */}
              <time dateTime={node.date}>
                {format(parseISO(node.date), "LLLL	d, yyyy")}
              </time>
            </Container>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};
