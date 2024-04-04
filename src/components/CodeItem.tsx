type CodeNameProps<T> = {
  itemName: T;
};

const CodeItem = ({ itemName }: CodeNameProps<string>) => {
  return (
    <li
      className={`my-1 mx-1 px-[0.3rem] py-[0.1rem] md:px-[0.4rem] md:py-[0.2rem] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] font-semibold inline-block rounded-md shadow-sm ${itemName} z-10 bg-light border-[1px] border-dark dark:border-light dark:bg-black`}
    >
      <span className={`text-dark dark:text-light`}>{itemName}</span>
    </li>
  );
};

export default CodeItem;
