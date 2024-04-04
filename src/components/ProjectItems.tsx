// import compoent
import ProjectItem from "./ProjectItem";
// import data
import data from "../data/data.json";
// import type
import { type ProjectItemProps } from "./ProjectItem";

const ProjectItems = () => {
  const items: ProjectItemProps[] = data.projectItems;

  return (
    <>
      {items.map((item, index) => (
        <ProjectItem
          key={`${item.id}-${index}-${item.title}`}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          languages={item.languages}
          description={item.description}
          repoLink={item.repoLink}
          demoLink={item.demoLink}
        />
      ))}
    </>
  );
};

export default ProjectItems;
