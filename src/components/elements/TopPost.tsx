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

export const TopHost = ({ title, coverImage, date, excerpt, author, slug }) => {
  // author
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  // date
  const datetext = parseISO(date);

  return (
    <Grid className="mt-10">
      <Grid.Col span={4}>
        <Card shadow="sm" p="xl" component="a" href={`/posts/${slug}`}>
          <Card.Section>
            <Image src={coverImage?.node.sourceUrl} height={160} alt={title} />
          </Card.Section>

          <Text weight={500} size="lg" mt="md">
            {title}
          </Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>

          <Text mt="xs" color="dimmed" size="sm">
            {excerpt}
          </Text>
          <Container>
            <Avatar radius="xl" src={author.node.avatar.url} alt={name} />
            <div className="text-xl font-bold">{name}</div>
            <time dateTime={date}>{format(datetext, "LLLL	d, yyyy")}</time>
          </Container>
        </Card>
      </Grid.Col>
    </Grid>
  );
};
