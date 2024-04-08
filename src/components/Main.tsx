type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className="text-dark dark:text-light text-center">{children}</main>
  );
};

export default Main;
