import SkillItem from "../components/SkillItem";
import {
  HTML,
  CSS3,
  SCSS,
  Tailwind,
  Bootstrap,
  JavaScript,
  TypeScript,
  ReactIcon,
  VueIcon,
  GitIcon,
  NpmIcon,
  SQLIcon,
  Webpack,
  ViteIcon,
  AstroIcon,
  VSCode,
} from "./Icons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className="[&_div]:mb-[3rem] md:[&_div]:mb-[5rem] [&_h3]:mb-4">
        {/* <!-- part 1 --> */}
        <h2 className="h2 text-primary dark:text-primaryDark font-bold">
          My Technical Stack
        </h2>
        {/* <!-- part 1.1 --> */}
        <motion.div
          initial={{ y: 10 }}
          whileInView={{
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className=""
        >
          <h3 className="h3">Language ‧ Library ‧ Framework</h3>
          <ul className="grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
            <SkillItem skillName="HTML">
              <HTML />
            </SkillItem>
            <SkillItem skillName="CSS3">
              <CSS3 />
            </SkillItem>
            <SkillItem skillName="SCSS">
              <SCSS />
            </SkillItem>
            <SkillItem skillName="Tailwind">
              <Tailwind />
            </SkillItem>
            <SkillItem skillName="Bootstrap">
              <Bootstrap />
            </SkillItem>
            <SkillItem skillName="JavaScript">
              <JavaScript />
            </SkillItem>
            <SkillItem skillName="TypeScript">
              <TypeScript />
            </SkillItem>
            <SkillItem skillName="React">
              <ReactIcon />
            </SkillItem>
            <SkillItem skillName="Vue">
              <VueIcon />
            </SkillItem>
            <SkillItem skillName="SQL">
              <SQLIcon />
            </SkillItem>
          </ul>
        </motion.div>

        {/* <!-- part 1.2 --> */}
        <motion.div
          initial={{ y: 10 }}
          whileInView={{
            y: 0,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className=""
        >
          <h3 className="h3">Build Tools ‧ Manager ‧ Editor</h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 ">
            <SkillItem skillName="Vite">
              <ViteIcon className="p-[0.1rem]" />
            </SkillItem>
            <SkillItem skillName="Webpack">
              <Webpack />
            </SkillItem>
            <SkillItem skillName="Astro">
              <AstroIcon />
            </SkillItem>
            <SkillItem skillName="Git">
              <GitIcon />
            </SkillItem>
            <SkillItem skillName="npm">
              <NpmIcon />
            </SkillItem>
            <SkillItem skillName="VSCode">
              <VSCode className="p-[0.1rem]" />
            </SkillItem>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: -10 }}
        whileInView={{
          y: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row [&_div]:mb-[3rem] md:[&_div]:mb-[5rem] [&_h3]:mb-4"
      >
        {/* <!-- part 2 --> */}
        <div className="flex-1">
          <h2 className="h2 text-primary dark:text-primaryDark font-bold">
            Strengths
          </h2>
          <ul className="flex flex-wrap justify-center gap-5 text-[0.9rem] sm:text-[1rem] lg:text-[1.2rem]">
            <li>Connectedness</li>
            <li>Consistency</li>
            <li>Empathy</li>
            <li>Organization</li>
            <li>Learner</li>
            <li>Thoroughness</li>
            <li>Restorative</li>
          </ul>
        </div>
        {/* <!-- part 3--> */}
        <div className="flex-1">
          <h2 className="h2 text-primary dark:text-primaryDark font-bold">
            Hobbies
          </h2>
          <ul className="flex flex-wrap justify-center gap-5 text-[0.9rem] sm:text-[1rem] lg:text-[1.2rem]">
            <li>Japanese Series</li>
            <li>Bouldering</li>
            <li>Aerial Yoga</li>
            <li>Yoga</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
