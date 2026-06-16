import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../../data/portfolio';
import { fadeUp } from '../../lib/animations';
import { ProjectCarousel } from './ProjectCarousel';

type CarouselCopy = {
  prev: string;
  next: string;
  slide: (n: number, total: number) => string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  linkLabel: string;
  carouselCopy: CarouselCopy;
};

export function ProjectCard({ project, index, linkLabel, carouselCopy }: ProjectCardProps) {
  const alt = `${project.title} preview`;

  return (
    <motion.article
      className="project-card glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <div className="project-media">
        {project.images.length > 1 ? (
          <ProjectCarousel images={project.images} alt={alt} copy={carouselCopy} />
        ) : (
          <img src={project.images[0]} alt={alt} loading="lazy" />
        )}
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="chip-row">
          {project.stack.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
          {linkLabel} <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.article>
  );
}
