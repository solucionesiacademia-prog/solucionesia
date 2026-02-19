import { motion } from "framer-motion";
import { Globe, ShoppingCart, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nContext";

const serviceIcons = [Globe, ShoppingCart, LayoutDashboard];

const Services = () => {
  const { t } = useI18n();

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-16"
        >
          {t.services.heading}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl border border-border p-8 card-hover cursor-default"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href="/servicios">
            <Button variant="outline" size="lg" className="font-semibold">
              {t.services.cta}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
