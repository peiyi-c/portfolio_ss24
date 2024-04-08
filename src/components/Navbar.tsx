import { useEffect, useState } from "react";
import { MenuIcon, GithubIcon, LinkedInIcon } from "./Icons";
import ModeSwitcher from "./ModeSwitcher";
import NavbarIcon from "./NavbarIcon";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isX, setIsX] = useState(false);

  useEffect(() => {
    let width = window.innerWidth || document.documentElement.clientWidth;
    const setMenu = () => {
      if (width < 1024) setIsX(false);
      setToggleMenu(false);
    };
    window.addEventListener("resize", setMenu);
    return () => window.removeEventListener("resize", setMenu);
  });

  const links = [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/about", title: "About" },
    { id: 3, href: "/projects", title: "Projects" },
    { id: 4, href: "/contact", title: "Contact" },
  ];
  return (
    <>
      <MenuIcon
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        isX={isX}
        setIsX={setIsX}
      />
      <nav
        className={`bg-light/75 dark:bg-dark/75 ${toggleMenu ? "open" : ""}`}
      >
        <ul className="menu p-10 mx-auto mt-5 lg:mt-0 font-medium w-[85%] lg:w-full flex flex-col lg:flex-row justify-between items-center lg:col-span-6">
          {links.map((link) => (
            <NavbarLink
              key={link.id}
              href={link.href}
              title={link.title}
              toggleMenu={toggleMenu}
              setToggleMenu={setToggleMenu}
            />
          ))}
        </ul>
        <div className="lg:col-span-2"></div>
        <ul className="menu mx-auto w-[85%] lg:w-full flex items-center justify-around lg:col-span-4">
          <NavbarIcon href="https://github.com/peiyi-c">
            <GithubIcon className="text-dark dark:text-light" />
          </NavbarIcon>
          <NavbarIcon href="https://www.linkedin.com/in/peiyichena/">
            <LinkedInIcon className="fill-dark dark:fill-light" />
          </NavbarIcon>
          <NavbarIcon>
            <ModeSwitcher />
          </NavbarIcon>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
