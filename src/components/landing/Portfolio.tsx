import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nContext";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/landing/ProjectCard";
import { projectMeta } from "@/data/projects";

const Portfolio = () => {
  const { t } = useI18n();

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-16"
        >
          {t.portfolio.heading1}
          <span className="text-primary">{t.portfolio.headingHighlight}</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {t.portfolio.projects.slice(0, 4).map((project, i) => (
            <ProjectCard
              key={i}
              index={i}
              title={project.title}
              description={project.description}
              image={projectMeta[i].image}
              url={projectMeta[i].url}
              cta={t.portfolio.viewProject}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/portfolio">
            <Button variant="hero" size="lg" className="rounded-xl h-12 px-8">
              {t.portfolio.viewAll}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
