import Link from "next/link";

import data from "@/data/navbar.json";

export const Navbar = () => {
  const { navbarLinks } = data;
  return (
    <>
      <ul>
        {navbarLinks.map(({ path, label }) => (
          <li key={path}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
