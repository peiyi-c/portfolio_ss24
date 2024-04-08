import React from "react";

type NavbarIconProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const NavbarIconReact = ({ href, className, children }: NavbarIconProps) => {
  return (
    <li className={`${className} w-9 mt-5 mb-10 lg:mt-0 lg:mb-0`}>
      <a href={href} target="_blank">
        {children}
      </a>
    </li>
  );
};

export default NavbarIconReact;
