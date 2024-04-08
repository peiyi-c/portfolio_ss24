import CodeItem from "./CodeItem";
import { GithubIcon, GlobeIcon } from "./Icons";
import { motion } from "framer-motion";

export type ProjectCardProps = {
  id?: string;
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
    <motion.div
      initial={{ y: 10 }}
      whileInView={{
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="w-full p-5 lg:my-8 border-none bg-dark dark:bg-light text-light dark:text-dark flex flex-col lg:flex-row gap-5 lg:gap-10 items-center rounded-[1.5rem] shadow-md"
    >
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
        <div className="justify-center items-center grid grid-rows-5 grid-cols-4 lg:grid-cols-3 lg:grid-rows-3 xl:grid-rows-4 ">
          <div className="col-span-4 lg:text-left lg:col-span-2">
            <h3 className="text-[1.2rem] md:text-[1.3rem] font-semibold  md:font-bold lg:text-[2rem]">
              {title}
            </h3>
            <h4 className="text-[1.1rem] md:text-[1.2rem] font-semibold lg:text-[1.5rem] opacity-75">
              {subtitle}
            </h4>
          </div>

          <ul className="row-start-2 row-span-1 col-span-4 lg:text-left">
            {languages.map((language) => (
              <CodeItem key={`${language}-${id}`} itemName={language} />
            ))}
          </ul>

          <p className="row-span-4 col-span-4 sm:row-start-3 md:text-[1.1rem] lg:row-span-2 lg:text-left xl:text-[1.2rem]">
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
    </motion.div>
  );
};

export default ProjectCard;
