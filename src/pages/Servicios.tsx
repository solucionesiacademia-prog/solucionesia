import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nContext";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const basePricesARS = [280000, 550000, 1200000];

const Servicios = () => {
  const { t, price } = useI18n();
  const s = t.servicios;

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
              {s.heading}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {s.intro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16 max-w-6xl mx-auto">
            {s.packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className={`bg-card rounded-2xl border border-border p-8 card-hover flex flex-col ${
                  i === 1 ? "md:-mt-4 md:mb-4 ring-2 ring-primary/20" : ""
                }`}
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {s.desde}{" "}
                  <span className="text-2xl font-extrabold text-primary">
                    {price(basePricesARS[i])}
                  </span>
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/5493794735500?text=${encodeURIComponent(
                    `${s.waMessage} ${pkg.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" className="w-full rounded-xl gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(142, 70%, 45%)">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.368 0-4.56-.796-6.309-2.135a.75.75 0 00-.653-.128l-3.11 1.04 1.04-3.11a.75.75 0 00-.127-.654A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    {s.consultCta}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-muted-foreground mt-12"
          >
            {s.note}
          </motion.p>

          <div className="text-center mt-8">
            <a href="/" className="text-primary font-medium text-sm hover:underline">
              {s.backHome}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Servicios;
