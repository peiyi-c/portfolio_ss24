import CodeItem from "./CodeItem";
import { GithubIcon, GlobeIcon } from "./Icons";

export type ProjectCardProps = {
  id?: number;
  title: string;
  subtitle?: string;
  languages: string[];
  screenshot: string;
  description: string;
  repoLink: string;
  demoLink: string;
};

const ProjectCard = ({
  id,
  title,
  subtitle,
  languages,
  screenshot,
  description,
  repoLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div className="w-full p-5 lg:my-8 border-none bg-dark dark:bg-light text-light dark:text-dark flex flex-col lg:flex-row gap-5 lg:gap-10 items-center rounded-[1.5rem] shadow-md">
      {/* wrapper 1 */}
      <div className="cursor-pointer ">
        <img
          src={`./projects/project-${screenshot}.png`}
          alt={`project-${id}-screenshot`}
          className="object-cover w-[60svw] sm:w-[50svw] md:w-[20rem] rounded-lg"
        />
      </div>
      {/* wrapper 2 */}
      <div className="flex-1">
        <div className="grid grid-rows-5 grid-cols-4 md:grid-rows-3 justify-center items-center">
          <div className="lg:text-left col-span-4 md:col-span-2">
            <h3 className="text-[1.2rem] md:text-[1.3rem] font-semibold  md:font-bold lg:text-[2rem]">
              {title}
            </h3>
            <h4 className="">{subtitle}</h4>
          </div>

          <ul className="row-start-2 row-span-2 col-span-4 md:col-span-2 md:row-span-1 xl:col-span-3 lg:text-left">
            {languages.map((language) => (
              <CodeItem key={id} itemName={language} />
            ))}
          </ul>
          <p className="sm:row-start-4 md:row-span-2 lg:my-2 row-span-4 col-span-4 lg:text-left ">
            {description}
          </p>
        </div>
        <div className="lg:flex lg:justify-end">
          <button
            id="repository-button"
            className="btn m-2 p-2 bg-primary dark:bg-primaryDark rounded-md shadow-md group"
          >
            <a
              href={repoLink}
              className="flex items-center text-[1.1rem] text-light dark:text-dark gap-2 group-hover:font-bold"
              target="_blank"
            >
              Repository
              <GithubIcon />
            </a>
          </button>
          <button
            id="demolink-button"
            className="btn m-2 p-2 bg-space dark:bg-spaceDark rounded-md shadow-md group"
          >
            <a
              href={demoLink}
              className="flex items-center text-[1.1rem] text-light dark:text-dark gap-2 group-hover:font-bold"
              target="_blank"
            >
              Live Demo
              <GlobeIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
