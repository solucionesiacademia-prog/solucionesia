import { motion } from "framer-motion";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  image: string;
  url: string;
  cta: string;
}

const ProjectCard = ({ index, title, description, image, url, cta }: ProjectCardProps) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
    className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={image}
        alt={`Screenshot de ${title}`}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <span className="text-primary font-semibold text-sm group-hover:underline">{cta}</span>
    </div>
  </motion.a>
);

export default ProjectCard;
