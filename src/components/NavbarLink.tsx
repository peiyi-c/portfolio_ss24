type NavbarLinkProps = {
  title: string;
  href: string;
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
  className?: string;
};
const NavbarLink = ({
  title,
  href,
  toggleMenu,
  setToggleMenu,
  className,
}: NavbarLinkProps) => {
  return (
    <li
      className={`nav-link relative group my-9 lg:my-0 text-center group ${className}`}
    >
      <a
        onClick={() => setToggleMenu(!toggleMenu)}
        href={href}
        className="text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark"
      >
        {title}
      </a>
      <span className="h-1 absolute left-0 -bottom-0.5 rounded-sm group-hover:w-full translate-[width] ease duration-300 w-0 bg-dark dark:bg-light hover:w-full group-hover:bg-primary dark:group-hover:bg-primaryDark">
        &nbsp;
      </span>
    </li>
  );
};

export default NavbarLink;
