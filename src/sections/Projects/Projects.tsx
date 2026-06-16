import { useLanguage } from '../../hooks/useLanguage';
import { portfolios, uiCopy } from '../../data/portfolio';
import { SectionTitle } from '../../components';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];

  return (
    <section id="projects" className="section">
      <SectionTitle index="02" {...copy.sections.projects} />
      <div className="project-grid">
        {portfolio.projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            linkLabel={copy.projectLink}
            carouselCopy={copy.projectCarousel}
          />
        ))}
      </div>
    </section>
  );
}
