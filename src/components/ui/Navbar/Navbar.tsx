import Link from "next/link";

import data from "@/data/navbar.json";

export const Navbar = () => {
  const { navbarLinks } = data;
  return (
    <>
      <ul className="flex gap-4 justify-center py-[10px]">
        {navbarLinks.map(({ path, label }) => (
          <li className="text-accent text-xl font-medium" key={path}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
