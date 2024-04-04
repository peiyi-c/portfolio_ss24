// import component
import ProjectCard from "./ProjectCard";
// import data
import data from "../data/data.json";
// import type
import { type ProjectCardProps } from "./ProjectCard";

const ProjectCards = () => {
  const cards: ProjectCardProps[] = data.projectCards;

  return (
    <>
      {cards.map((card, index) => (
        <ProjectCard
          key={`${card.id}-${index}-${card.title}`}
          id={card.id}
          title={card.title}
          subtitle={card.subtitle}
          languages={card.languages}
          screenshot={card.screenshot}
          description={card.description}
          repoLink={card.repoLink}
          demoLink={card.demoLink}
        />
      ))}
    </>
  );
};

export default ProjectCards;
