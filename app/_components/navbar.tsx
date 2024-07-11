import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const links: { name: string; href: string }[] = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  {
    name: "Our Board Game Collection",
    href: "https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?gid=0#gid=0",
  },
  { name: "Menu", href: "/menu" },
  { name: "Press", href: "/press" },
];

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <div>
        <Link href="/">
          {/* <img src="/sipnplay.png" alt="sipnplay logo" className="w-24" /> */}
          <h1 className="text-bold">Sip & Play</h1>
        </Link>
      </div>
      <div className="flex gap-6">
        {links.map(({ name, href }) => (
          <Button variant="ghost" asChild>
            <NavLink href={href}>{name}</NavLink>
          </Button>
        ))}
        <div className="flex gap-2 items-center">
          <NavLink href="https://www.facebook.com/sipnplaynyc/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-[1.5em] h-[1.5em]"
              viewBox="0 0 30 30"
            >
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
          </NavLink>
          <NavLink href="https://www.instagram.com/sipnplaynyc/?hl=en">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-[1.5em] h-[1.5em]"
              viewBox="0 0 50 50"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Button variant="ghost" className="p-2" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export default NavBar;
