import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Container,
} from "@mantine/core";
import Link from "next/link";
import { NAV_ITEMS } from "src/utils/nav";
import { ChevronDown } from "tabler-icons-react";
import { FC } from "react";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    borderBottom: 0,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export const HeaderComponent: FC = () => {
  const { classes } = useStyles();

  const items = NAV_ITEMS.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <Link href={link.link}>
              <a className={classes.link}>
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <ChevronDown size={12} strokeWidth={1.5} />
                </Center>
              </a>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link href={link.link} key={link.label}>
        <a className={classes.link}>{link.label}</a>
      </Link>
    );
  });

  return (
    <Header height={56} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <div>
            <Link href="/">
              <a>
                <h2 className="text-white">Ocean Script</h2>
              </a>
            </Link>
          </div>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
        </div>
      </Container>
    </Header>
  );
};
