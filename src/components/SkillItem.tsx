type SkillItemProps = {
  skillName: string;
  children: React.ReactNode;
};

const SkillItem = ({ skillName, children }: SkillItemProps) => {
  return (
    <li className="flex justify-center items-center gap-2 group">
      {children}
      <span className="text-[0.8rem] sm:text-[1rem] lg:text-[1.2rem]">
        {skillName}
      </span>
    </li>
  );
};

export default SkillItem;
