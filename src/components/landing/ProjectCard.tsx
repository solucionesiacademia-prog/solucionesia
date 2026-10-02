import { motion } from "framer-motion";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  image: string;
  url: string;
  cta: string;
  tag?: string;
  badge?: string;
}

const ProjectCard = ({ index, title, description, image, url, cta, tag, badge }: ProjectCardProps) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ delay: (index % 4) * 0.06, duration: 0.4 }}
    className="group bg-card rounded-2xl border border-border overflow-hidden card-hover flex flex-col"
  >
    <div className="aspect-video overflow-hidden relative">
      <img
        src={image}
        alt={`Screenshot de ${title}`}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {tag && (
        <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-card/90 text-foreground border border-border backdrop-blur">
          {tag}
        </span>
      )}
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 flex-1">{description}</p>
      {badge && (
        <span className="inline-flex items-center gap-2 text-xs font-medium text-accent mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </span>
      )}
      <span className="text-primary font-semibold text-sm group-hover:underline">{cta}</span>
    </div>
  </motion.a>
);

export default ProjectCard;
