import { motion } from "framer-motion";
import portfolioGrosso from "@/assets/portfolio-grosso.png";
import portfolioSociogym from "@/assets/portfolio-sociogym.png";
import portfolioMarketing from "@/assets/portfolio-marketing.png";
import portfolioVentix from "@/assets/portfolio-ventix.png";

const projects = [
  {
    title: "Grosso",
    description: "Tienda online de moda urbana con catálogo dinámico y carrito integrado.",
    image: portfolioGrosso,
    url: "https://take.app/es/grosso",
  },
  {
    title: "SocioGym Pro",
    description: "Plataforma SaaS de gestión integral para gimnasios y centros deportivos.",
    image: portfolioSociogym,
    url: "https://sociogym.lovable.app",
  },
  {
    title: "MarketingMaster",
    description: "App educativa gamificada de marketing digital con módulos y certificados.",
    image: portfolioMarketing,
    url: "https://marketing-master-game.lovable.app",
  },
  {
    title: "Ventix",
    description: "Herramienta de ventas por WhatsApp con leads automáticos y seguimiento.",
    image: portfolioVentix,
    url: "https://ventix.lovable.app",
  },
];

const Portfolio = () => {
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
          Proyectos que <span className="text-primary">hablan por sí solos</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
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
                  src={project.image}
                  alt={`Screenshot de ${project.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <span className="text-primary font-semibold text-sm group-hover:underline">
                  Ver proyecto →
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
