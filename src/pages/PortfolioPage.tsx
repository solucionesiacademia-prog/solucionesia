import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nContext";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ProjectCard from "@/components/landing/ProjectCard";
import { projectMeta } from "@/data/projects";

const PortfolioPage = () => {
  const { t } = useI18n();
  const p = t.portfolio;

  return (
    <main className="overflow-x-hidden">
      <Header />

      <section className="pt-28 pb-24 lg:pt-36 lg:pb-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              {p.pageHeading}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{p.pageIntro}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 max-w-6xl mx-auto">
            {p.projects.map((project, i) => (
              <ProjectCard
                key={i}
                index={i}
                title={project.title}
                description={project.description}
                image={projectMeta[i].image}
                url={projectMeta[i].url}
                cta={p.viewProject}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/" className="text-primary font-semibold hover:underline">
              {p.backHome}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PortfolioPage;
