import CodeItem from "./CodeItem";
import { GithubIcon, GlobeIcon } from "./Icons";
import { motion } from "framer-motion";

export type ProjectItemProps = {
  id: string;
  title: string;
  subtitle: string;
  languages: string[];
  description: string;
  repoLink: string;
  demoLink: string;
};

const ProjectItem = ({
  id,
  title,
  subtitle,
  languages,
  description,
  repoLink,
  demoLink,
}: ProjectItemProps) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="w-full p-5 lg:my-6 border-[0.2rem] border-dark dark:border-light text-dark dark:text-light rounded-[1.5rem] grid grid-rows-5 grid-cols-6 md:grid-rows-4 items-center lg:grid-rows-4 xl:grid-rows-3"
    >
      <div className="self-start row-span-1 col-span-6 lg:col-span-5 lg:text-left">
        <h3 className=" text-[1.2rem] md:text-[1.3rem] font-semibold">
          {title}
        </h3>
        <h4 className="text-[1.1rem] md:text-[1.2rem] opacity-75">
          {subtitle}
        </h4>
      </div>

      <ul className="row-span-1 col-span-6 lg:text-left">
        {languages.map((language) => (
          <CodeItem key={`${language}-${id}`} itemName={language} />
        ))}
      </ul>

      <p className="row-span-2 col-span-6 md:row-span-1 md:text-[1.1rem] lg:text-left xl:text-[1.2rem]">
        {description}
      </p>

      {/* buttons */}
      <div className="flex flex-row row-span-1 col-span-2 col-start-1 xl:col-start-6 xl:row-start-1">
        <button id="github-button" className="btn w-8 mx-1">
          <a href={repoLink} target="_blank">
            <GithubIcon />
          </a>
        </button>
        <button id="demolink-button" className="btn text-[1.7rem] mx-1">
          <a href={demoLink} target="_blank">
            <GlobeIcon />
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
