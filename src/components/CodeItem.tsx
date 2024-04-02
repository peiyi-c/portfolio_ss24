type CodeNameProps<T> = {
  itemName: T;
  liClass: T;
  spanClass?: T;
};

const CodeItem = ({ itemName, liClass, spanClass }: CodeNameProps<string>) => {
  return (
    <li
      className={`px-[0.3rem] py-[0.1rem] mx-1 text-[0.7rem] md:text-[0.8rem] font-semibold inline-block rounded-md shadow-sm ${liClass}`}
    >
      <span className={`text-dark dark:text-light ${spanClass}`}>
        {itemName}
      </span>
    </li>
  );
};

export default CodeItem;
