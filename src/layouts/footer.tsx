import { createStyles, Container, Group, ActionIcon } from "@mantine/core";
import {
  Battery4,
  BrandInstagram,
  BrandYoutube,
  BrandTwitter,
} from "tabler-icons-react";
import { FC } from "react";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export const FooterComponent: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Battery4 size={28} />
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandTwitter size={18} strokeWidth={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} strokeWidth={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} strokeWidth={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
