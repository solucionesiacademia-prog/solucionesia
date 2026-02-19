import { motion } from "framer-motion";
import { Shield, TrendingUp, Clock, Rocket } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const icons = [Shield, TrendingUp, Clock, Rocket];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const ValueSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-16 lg:mb-20"
        >
          {t.value.heading1}
          <span className="text-primary">{t.value.headingHighlight}</span>
        </motion.h2>

        <div className="grid gap-12 lg:gap-16 max-w-4xl mx-auto">
          {t.value.blocks.map((block, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`flex flex-col md:flex-row gap-6 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{block.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{block.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
