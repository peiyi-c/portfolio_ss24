type CodeNameProps<T> = {
  itemName: T;
  liClass: T;
  spanClass?: T;
};

const CodeItem = ({ itemName, liClass, spanClass }: CodeNameProps<string>) => {
  return (
    <li
      className={`my-1 mx-1 px-[0.3rem] py-[0.1rem] md:px-[0.4rem] md:py-[0.2rem] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] font-semibold inline-block rounded-md shadow-sm ${liClass}`}
    >
      <span className={`text-dark dark:text-light ${spanClass}`}>
        {itemName}
      </span>
    </li>
  );
};

export default CodeItem;
