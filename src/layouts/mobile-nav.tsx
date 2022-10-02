import { FC } from "react";
import Link from "next/link";
import { ActionIcon, Container, Group } from "@mantine/core";
import { Home, Menu2, User, Mail } from "tabler-icons-react";

export const MobileNav: FC = () => {
  return (
    <Container className="absolute bottom-5 left-2/4 z-50 -translate-x-1/2 bg-black">
      <Group>
        <div className="">
          <Link href="/" passHref>
            <ActionIcon component="a">
              <Home size={24} strokeWidth={1.5} color={"#fff"} />
            </ActionIcon>
          </Link>
        </div>
        <div className="">
          <Link href="/" passHref>
            <ActionIcon component="a">
              <Menu2 size={24} strokeWidth={1.5} color={"#fff"} />
            </ActionIcon>
          </Link>
        </div>
        <div className="">
          <Link href="/" passHref>
            <ActionIcon component="a">
              <User size={24} strokeWidth={1.5} color={"#fff"} />
            </ActionIcon>
          </Link>
        </div>
        <div className="">
          <Link href="/" passHref>
            <ActionIcon component="a">
              <Mail size={24} strokeWidth={1.5} color={"#fff"} />
            </ActionIcon>
          </Link>
        </div>
      </Group>
    </Container>
  );
};
