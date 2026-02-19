import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nContext";
import portfolioGrosso from "@/assets/portfolio-grosso.png";
import portfolioSociogym from "@/assets/portfolio-sociogym.png";
import portfolioMarketing from "@/assets/portfolio-marketing.png";
import portfolioVentix from "@/assets/portfolio-ventix.png";

const images = [portfolioGrosso, portfolioSociogym, portfolioMarketing, portfolioVentix];
const urls = [
  "https://take.app/es/grosso",
  "https://sociogym.lovable.app",
  "https://marketing-master-game.lovable.app",
  "https://ventix.lovable.app",
];

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
          {t.portfolio.projects.map((project, i) => (
            <motion.a
              key={i}
              href={urls[i]}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={images[i]}
                  alt={`Screenshot de ${project.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <span className="text-primary font-semibold text-sm group-hover:underline">
                  {t.portfolio.viewProject}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
