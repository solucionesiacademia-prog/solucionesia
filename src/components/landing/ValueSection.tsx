import { motion } from "framer-motion";
import { Shield, TrendingUp, Clock, Rocket } from "lucide-react";

const blocks = [
  {
    icon: Shield,
    title: "Control total vs redes prestadas",
    text: "Imaginá que mañana Instagram cambia el algoritmo y tus clientes dejan de verte. Pasa todo el tiempo. Con tu propia web, vos controlás el mensaje, el diseño y la estrategia. No dependés de ninguna plataforma que puede limitarte o desaparecer tus publicaciones de un día para el otro. Tu sitio es tu terreno, y nadie te lo puede sacar.",
  },
  {
    icon: TrendingUp,
    title: "Profesionalismo y confianza instantánea",
    text: "¿Sabías que el 75% de las personas juzgan la credibilidad de un negocio por su sitio web? Un emprendedor con una landing profesional transmite seriedad desde el primer segundo. No es lo mismo mandar un link de Instagram que uno con tu propio dominio. La primera impresión define si ese prospecto se queda o se va.",
  },
  {
    icon: Clock,
    title: "Ventas y leads 24/7 automáticos",
    text: "Tu web trabaja mientras dormís. Un formulario bien puesto, un botón de WhatsApp estratégico, una página de ventas con copy que convierte: todo eso genera consultas y ventas sin que estés ahí. Es como tener un vendedor que nunca se cansa, nunca se enferma y nunca pide vacaciones.",
  },
  {
    icon: Rocket,
    title: "Escalabilidad sin límites ni costos ocultos",
    text: "Empezás con una landing simple y mañana la convertís en tienda virtual, le sumás un sistema de reservas o un dashboard de gestión. Todo crece con vos, sin tener que arrancar de cero. Y lo mejor: sin costos sorpresa. Sabés exactamente cuánto invertís y qué obtenés a cambio.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const ValueSection = () => {
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
          Por qué una web propia es{" "}
          <span className="text-primary">tu mejor inversión hoy</span>
        </motion.h2>

        <div className="grid gap-12 lg:gap-16 max-w-4xl mx-auto">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
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
                <block.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {block.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {block.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
