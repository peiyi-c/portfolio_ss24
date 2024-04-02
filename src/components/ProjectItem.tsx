import CodeItem from "./CodeItem";
import { GithubIcon, GlobeIcon } from "./Icons";

type LanguagesType = {
  [key: string]: string;
};

type ProjectItemProps = {
  title: string;
  languages: LanguagesType[];
  description: string;
  repoLink: string;
  demoLink: string;
};

const ProjectItem = ({
  title,
  languages,
  description,
  repoLink,
  demoLink,
}: ProjectItemProps) => {
  return (
    <div className="w-full p-5 lg:my-6 border-[0.2rem] border-dark dark:border-light text-dark dark:text-light rounded-[1.5rem] grid grid-rows-5 grid-cols-6 items-center lg:grid-rows-4">
      <h3 className="lg:text-left self-start text-[1.2rem] md:text-[1.3rem] font-semibold row-span-1 col-span-6 lg:col-span-5">
        {title}
      </h3>

      <ul className="flex mb-3 row-span-1 col-span-6">
        {languages.map((language) => (
          <CodeItem
            itemName={language.name}
            liClass={language.liClass}
            spanClass={language.spanClass}
          />
        ))}
      </ul>

      <p className="lg:text-left row-span-2 col-span-6 lg:row-span-3">
        {description}
      </p>

      {/* buttons */}
      <div className="flex flex-row row-span-1 col-span-2 col-start-1 lg:col-start-6 lg:row-start-1">
        <button className="btn w-8 mx-1">
          <a href={repoLink}>
            <GithubIcon />
          </a>
        </button>
        <button className="btn text-[1.7rem] mx-1">
          <a href={demoLink}>
            <GlobeIcon />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
