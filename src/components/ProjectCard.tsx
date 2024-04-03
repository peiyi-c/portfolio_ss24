import CodeItem from "./CodeItem";
import { GithubIcon, GlobeIcon } from "./Icons";

type LanguagesType = {
  [key: string]: string;
};

type ProjectCardProps = {
  title: string;
  languages: LanguagesType[];
  screenshot: string;
  description: string;
  repoLink: string;
  demoLink: string;
};

const ProjectCard = ({
  title,
  languages,
  screenshot,
  description,
  repoLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div className="w-full p-5 lg:my-8 border-none bg-dark dark:bg-light text-light dark:text-dark flex flex-col md:flex-row gap-5 items-center rounded-[1.5rem] shadow-md">
      {/* wrapper 1 */}
      <div className="cursor-pointer ">
        <img src={screenshot} alt="" className="object-cover w-[10rem]" />
      </div>
      {/* wrapper 2 */}
      <div className="flex-1 ">
        <div className="grid grid-rows-7 grid-cols-4  md:grid-rows-3 justify-center items-center">
          <h3 className="md:text-left text-[1.2rem] col-span-4 md:text-[1.3rem] font-semibold md:col-span-2">
            {title}
          </h3>
          <ul className="row-start-2 col-span-4 md:col-span-2 md:row-span-1">
            {languages.map((language, index) => (
              <CodeItem
                key={index}
                itemName={language.name}
                liClass={language.liClass}
                spanClass={language.spanClass}
              />
            ))}
          </ul>
          <p className="row-span-4 col-span-4 md:row-span-2">{description}</p>
        </div>
        <button className="btn m-2 p-2 bg-primary dark:bg-primaryDark rounded-md shadow-md group">
          <a
            href={repoLink}
            className="flex items-center text-[1.1rem] text-light dark:text-dark gap-2 group-hover:font-bold"
          >
            Repository
            <GithubIcon />
          </a>
        </button>
        <button className="btn m-2 p-2 bg-space dark:bg-spaceDark rounded-md shadow-md group">
          <a
            href={demoLink}
            className="flex items-center text-[1.1rem] text-light dark:text-dark gap-2 group-hover:font-bold"
          >
            Live Demo
            <GlobeIcon />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
