import React from "react";
import { AnimatePresence } from "framer-motion";

type MainProps = {
  children: any; // https://tanggd.github.io/en/guides/typescript/
};

const Main = ({ children }: MainProps) => {
  return (
    <AnimatePresence mode="wait">
      <main>{children}</main>
    </AnimatePresence>
  );
};

export default Main;
