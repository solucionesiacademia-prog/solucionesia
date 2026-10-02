import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nContext";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ProjectCard from "@/components/landing/ProjectCard";
import { projectMeta, categoryLabels, openAccessLabel, type ProjectCategory } from "@/data/projects";

const filters: (ProjectCategory | "all")[] = ["all", "store", "saas", "tool"];

const PortfolioPage = () => {
  const { t, locale } = useI18n();
  const p = t.portfolio;
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const labels = categoryLabels[locale];

  const items = p.projects
    .map((project, i) => ({ project, meta: projectMeta[i], i }))
    .filter(({ meta }) => filter === "all" || meta.category === filter);

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

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {labels[f]}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {items.map(({ project, meta, i }, k) => (
                <ProjectCard
                  key={i}
                  index={k}
                  title={project.title}
                  description={project.description}
                  image={meta.image}
                  url={meta.url}
                  cta={p.viewProject}
                  tag={labels[meta.category]}
                  badge={meta.openAccess ? openAccessLabel[locale] : undefined}
                />
              ))}
            </AnimatePresence>
          </motion.div>

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
