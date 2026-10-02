import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { Button } from "@/components/ui/button";
import { projectMeta, featuredProjects, categoryLabels, openAccessLabel } from "@/data/projects";

const Portfolio = () => {
  const { t, locale } = useI18n();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = featuredProjects.length;

  const go = useCallback((dir: number) => setActive((a) => (a + dir + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [paused, go]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50 || info.velocity.x < -400) go(1);
    else if (info.offset.x > 50 || info.velocity.x > 400) go(-1);
  };

  const activeMeta = projectMeta[featuredProjects[active]];
  const activeText = t.portfolio.projects[featuredProjects[active]];
  const tone = `var(${activeMeta.ambient ?? "--primary"})`;

  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient brand glow */}
      <AnimatePresence>
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(60% 55% at 50% 55%, hsl(${tone} / 0.28), transparent 70%), linear-gradient(180deg, hsl(var(--background)), hsl(${tone} / 0.10) 50%, hsl(var(--background)))`,
          }}
        />
      </AnimatePresence>

      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-12 lg:mb-16"
        >
          {t.portfolio.heading1}
          <span className="text-primary">{t.portfolio.headingHighlight}</span>
        </motion.h2>

        {/* Stage */}
        <div className="relative h-[230px] sm:h-[340px] lg:h-[420px] max-w-5xl mx-auto [perspective:1200px]">
          {featuredProjects.map((idx, i) => {
            let offset = i - active;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;
            const isActive = offset === 0;
            const abs = Math.abs(offset);
            const meta = projectMeta[idx];
            const proj = t.portfolio.projects[idx];
            return (
              <motion.div
                key={idx}
                className="absolute top-0 left-1/2 w-[78%] sm:w-[62%] lg:w-[58%] cursor-grab active:cursor-grabbing"
                style={{ zIndex: 10 - abs }}
                initial={false}
                animate={{
                  x: `calc(-50% + ${offset * 62}%)`,
                  scale: isActive ? 1 : 0.82,
                  rotateY: offset * -12,
                  opacity: abs > 1 ? 0 : isActive ? 1 : 0.55,
                  filter: isActive ? "blur(0px)" : "blur(1.5px)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}
                onClick={() => !isActive && setActive(i)}
              >
                <div
                  className="rounded-2xl overflow-hidden border border-border bg-card aspect-video"
                  style={{
                    boxShadow: isActive
                      ? `0 30px 60px -20px hsl(var(${meta.ambient ?? "--primary"}) / 0.55)`
                      : "none",
                  }}
                >
                  <img
                    src={meta.image}
                    alt={`Screenshot de ${proj.title}`}
                    draggable={false}
                    className="w-full h-full object-cover object-top select-none"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info */}
        <div className="max-w-xl mx-auto text-center mt-6 min-h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {categoryLabels[locale][activeMeta.category]}
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-1 mb-2">{activeText.title}</h3>
              <p className="text-muted-foreground mb-3">{activeText.description}</p>
              {activeMeta.openAccess && (
                <p className="inline-flex items-center gap-2 text-xs font-medium text-accent mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {openAccessLabel[locale]}
                </p>
              )}
              <div>
                <a
                  href={activeMeta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  {t.portfolio.viewProject}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {featuredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Proyecto ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Siguiente"
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="hero" size="lg" className="rounded-xl h-12 px-8">
              {t.portfolio.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
