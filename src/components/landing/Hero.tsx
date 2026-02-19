import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroAbstract from "@/assets/hero-abstract.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-16">
      {/* Abstract background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src={heroAbstract}
          alt=""
          className="absolute bottom-0 right-0 w-full lg:w-3/4 opacity-20 lg:opacity-30 object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground"
          >
            ¿Querés una presencia digital que realmente{" "}
            <span className="text-primary">impulse tu negocio</span>?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Desarrollamos landings, tiendas virtuales y herramientas a medida que generan ventas reales para emprendedores argentinos serios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10"
          >
            <a
              href="https://wa.me/5493794735500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="gap-3 text-lg px-8 py-6 rounded-xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="hsl(142, 70%, 45%)">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.368 0-4.56-.796-6.309-2.135a.75.75 0 00-.653-.128l-3.11 1.04 1.04-3.11a.75.75 0 00-.127-.654A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Hablemos por WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
