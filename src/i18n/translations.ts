export type Locale = "es" | "pt";
export type Region = "AR" | "CL" | "UY" | "PY" | "BR";

export interface RegionConfig {
  locale: Locale;
  currency: string;
  symbol: string;
  rate: number; // relative to ARS
  flag: string;
  label: string;
}

export const regions: Record<Region, RegionConfig> = {
  AR: { locale: "es", currency: "ARS", symbol: "$", rate: 1, flag: "🇦🇷", label: "Argentina" },
  CL: { locale: "es", currency: "CLP", symbol: "CLP", rate: 0.62, flag: "🇨🇱", label: "Chile" },
  UY: { locale: "es", currency: "UYU", symbol: "UYU", rate: 0.028, flag: "🇺🇾", label: "Uruguay" },
  PY: { locale: "es", currency: "PYG", symbol: "PYG", rate: 4.7, flag: "🇵🇾", label: "Paraguay" },
  BR: { locale: "pt", currency: "BRL", symbol: "R$", rate: 0.004, flag: "🇧🇷", label: "Brasil" },
};

export function detectRegion(): Region {
  const lang = navigator.language || "es";
  if (lang.startsWith("pt")) return "BR";
  return "AR";
}

export function formatPrice(arsAmount: number, region: Region): string {
  const cfg = regions[region];
  const converted = Math.round(arsAmount * cfg.rate);
  const formatted = converted.toLocaleString("es-AR");
  if (region === "AR") return `$${formatted}`;
  return `${cfg.symbol} ${formatted}`;
}

// --- Translations ---

export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      servicios: "Servicios",
      portfolio: "Portfolio",
      contacto: "Contacto",
    },
    hero: {
      title1: "¿Querés una presencia digital que realmente ",
      titleHighlight: "impulse tu negocio",
      title2: "?",
      subtitle: "Desarrollamos landings, tiendas virtuales y herramientas a medida que generan ventas reales para negocios serios.",
      cta: "Hablemos por WhatsApp",
    },
    value: {
      heading1: "Por qué una web propia es ",
      headingHighlight: "tu mejor inversión hoy",
      blocks: [
        {
          title: "Control total vs redes prestadas",
          text: "Imaginá que mañana cambia el algoritmo y tus clientes dejan de verte. Pasa todo el tiempo. Con tu propia web, vos controlás el mensaje, el diseño y la estrategia. No dependés de ninguna plataforma que puede limitarte o desaparecer tus publicaciones de un día para el otro. Tu sitio es tu terreno, y nadie te lo puede sacar.",
        },
        {
          title: "Profesionalismo y confianza instantánea",
          text: "¿Sabías que el 75% de las personas juzgan la credibilidad de un negocio por su sitio web? Un negocio con una landing profesional transmite seriedad desde el primer segundo. No es lo mismo mandar un link de Instagram que uno con tu propio dominio. La primera impresión define si ese prospecto se queda o se va.",
        },
        {
          title: "Ventas y leads 24/7 automáticos",
          text: "Tu web trabaja mientras dormís. Un formulario bien puesto, un botón de WhatsApp estratégico, una página de ventas con copy que convierte: todo eso genera consultas y ventas sin que estés ahí. Es como tener un vendedor que nunca se cansa, nunca se enferma y nunca pide vacaciones.",
        },
        {
          title: "Escalabilidad sin límites ni costos ocultos",
          text: "Empezás con una landing simple y mañana la convertís en tienda virtual, le sumás un sistema de reservas o un dashboard de gestión. Todo crece con vos, sin tener que arrancar de cero. Y lo mejor: sin costos sorpresa. Sabés exactamente cuánto invertís y qué obtenés a cambio.",
        },
      ],
    },
    services: {
      heading: "Nuestros servicios",
      items: [
        { title: "Landings", description: "Ideal para empezar rápido y convertir visitas en clientes." },
        { title: "Tiendas Virtuales", description: "Vendé online con carrito seguro y pagos integrados." },
        { title: "Herramientas / Apps", description: "Automatizá tu día a día con dashboards y gamificación." },
      ],
      cta: "Ver paquetes y precios",
    },
    portfolio: {
      heading1: "Proyectos que ",
      headingHighlight: "hablan por sí solos",
      viewProject: "Ver proyecto →",
      viewAll: "Ver todos los proyectos",
      pageHeading: "Nuestro portfolio completo",
      pageIntro: "Cada proyecto resuelve un problema real de un negocio real. Mirá lo que podemos hacer con el tuyo.",
      backHome: "← Volver al inicio",
      projects: [
        { title: "Grosso", description: "Tienda online de moda urbana con catálogo dinámico y carrito integrado." },
        { title: "SocioGym Pro", description: "Plataforma SaaS de gestión integral para gimnasios y centros deportivos." },
        { title: "MarketingMaster", description: "App educativa gamificada de marketing digital con módulos y certificados." },
        { title: "Ventix", description: "Herramienta de ventas por WhatsApp con leads automáticos y seguimiento." },
        { title: "FutMatch", description: "Plataforma para organizar partidos de fútbol, armar equipos y gestionar reservas." },
        { title: "FitCoach Hub", description: "Panel para entrenadores personales con rutinas, seguimiento y clientes." },
        { title: "Picca", description: "Sitio de pedidos online con menú digital y checkout directo por WhatsApp." },
        { title: "Invita Digital", description: "Invitaciones digitales interactivas con confirmación de asistencia en tiempo real." },
      ],
    },

    contact: {
      heading1: "¿Tenés una idea? ",
      headingHighlight: "Hablemos ya",
      subtitle: "Contanos qué necesitás y te respondemos en menos de 24 horas.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "Contanos tu idea...",
      send: "Enviar",
      altText: "O si preferís, hablá directo:",
      altCta: "Hablame ahora",
      waPrefix: "Hola! Soy",
    },
    footer: {
      priceNote: "Precios adaptados a tu región – cotización final por WhatsApp.",
    },
    servicios: {
      heading: "Paquetes y Precios Transparentes",
      intro: "Soluciones a medida para dueños de negocios. Precios realistas, sin sorpresas ni letra chica. Cotización personalizada en 24h.",
      desde: "desde",
      consultCta: "Consultar este paquete",
      waMessage: "Hola, quiero cotización para",
      note: "Precios referenciales febrero 2026. Personalizamos según necesidades.",
      backHome: "← Volver al inicio",
      packages: [
        {
          title: "Sitios Web / Landings",
          features: [
            "Diseño responsive premium",
            "SEO básico incluido",
            "Dominio y hosting",
            "Formulario de contacto",
            "Integración con redes sociales",
            "Soporte post-lanzamiento",
          ],
        },
        {
          title: "Tiendas Virtuales",
          features: [
            "Catálogo ilimitado de productos",
            "Carrito de compras seguro",
            "Integración Mercado Pago",
            "Panel de administración",
            "Control de stock",
            "Mobile-first + capacitación",
          ],
        },
        {
          title: "Herramientas / Apps Web",
          features: [
            "Dashboards personalizados",
            "Gamificación y engagement",
            "Sistema POS integrado",
            "Integraciones avanzadas",
            "Base de datos + API",
            "Soporte continuo dedicado",
          ],
        },
      ],
    },
  },
  pt: {
    nav: {
      inicio: "Início",
      servicios: "Serviços",
      portfolio: "Portfólio",
      contacto: "Contato",
    },
    hero: {
      title1: "Quer uma presença digital que realmente ",
      titleHighlight: "impulsione seu negócio",
      title2: "?",
      subtitle: "Desenvolvemos landings, lojas virtuais e ferramentas sob medida que geram vendas reais para negócios sérios.",
      cta: "Fale pelo WhatsApp",
    },
    value: {
      heading1: "Por que um site próprio é ",
      headingHighlight: "seu melhor investimento hoje",
      blocks: [
        {
          title: "Controle total vs redes emprestadas",
          text: "Imagine que amanhã o Instagram muda o algoritmo e seus clientes param de te ver. Acontece o tempo todo. Com seu próprio site, você controla a mensagem, o design e a estratégia. Não depende de nenhuma plataforma que pode te limitar ou sumir com suas publicações de um dia para o outro.",
        },
        {
          title: "Profissionalismo e confiança instantânea",
          text: "Você sabia que 75% das pessoas julgam a credibilidade de um negócio pelo site? Um negócio com uma landing profissional transmite seriedade desde o primeiro segundo. Não é o mesmo mandar um link do Instagram e um com seu próprio domínio. A primeira impressão define se o prospect fica ou vai.",
        },
        {
          title: "Vendas e leads 24/7 automáticos",
          text: "Seu site trabalha enquanto você dorme. Um formulário bem posicionado, um botão de WhatsApp estratégico, uma página de vendas com copy que converte: tudo isso gera consultas e vendas sem que você esteja ali. É como ter um vendedor que nunca cansa.",
        },
        {
          title: "Escalabilidade sem limites nem custos ocultos",
          text: "Comece com uma landing simples e amanhã transforme em loja virtual, adicione um sistema de reservas ou um dashboard de gestão. Tudo cresce com você, sem começar do zero. E o melhor: sem custos surpresa. Você sabe exatamente quanto investe e o que obtém.",
        },
      ],
    },
    services: {
      heading: "Nossos serviços",
      items: [
        { title: "Landings", description: "Ideal para começar rápido e converter visitas em clientes." },
        { title: "Lojas Virtuais", description: "Venda online com carrinho seguro e pagamentos integrados." },
        { title: "Ferramentas / Apps", description: "Automatize seu dia a dia com dashboards e gamificação." },
      ],
      cta: "Ver pacotes e preços",
    },
    portfolio: {
      heading1: "Projetos que ",
      headingHighlight: "falam por si mesmos",
      viewProject: "Ver projeto →",
      viewAll: "Ver todos os projetos",
      pageHeading: "Nosso portfólio completo",
      pageIntro: "Cada projeto resolve um problema real de um negócio real. Veja o que podemos fazer com o seu.",
      backHome: "← Voltar ao início",
      projects: [
        { title: "Grosso", description: "Loja online de moda urbana com catálogo dinâmico e carrinho integrado." },
        { title: "SocioGym Pro", description: "Plataforma SaaS de gestão integral para academias e centros esportivos." },
        { title: "MarketingMaster", description: "App educativa gamificada de marketing digital com módulos e certificados." },
        { title: "Ventix", description: "Ferramenta de vendas por WhatsApp com leads automáticos e acompanhamento." },
        { title: "FutMatch", description: "Plataforma para organizar partidas de futebol, montar times e gerenciar reservas." },
        { title: "FitCoach Hub", description: "Painel para personal trainers com treinos, acompanhamento e clientes." },
        { title: "Picca", description: "Site de pedidos online com cardápio digital e checkout direto pelo WhatsApp." },
        { title: "Invita Digital", description: "Convites digitais interativos com confirmação de presença em tempo real." },
      ],
    },

    contact: {
      heading1: "Tem uma ideia? ",
      headingHighlight: "Vamos conversar",
      subtitle: "Conte o que precisa e respondemos em menos de 24 horas.",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu email",
      messagePlaceholder: "Conte sua ideia...",
      send: "Enviar",
      altText: "Ou se preferir, fale direto:",
      altCta: "Fale agora",
      waPrefix: "Olá! Sou",
    },
    footer: {
      priceNote: "Preços adaptados à sua região – cotação final pelo WhatsApp.",
    },
    servicios: {
      heading: "Pacotes e Preços Transparentes",
      intro: "Soluções sob medida para donos de negócios. Preços realistas, sem surpresas. Cotação personalizada em 24h.",
      desde: "a partir de",
      consultCta: "Consultar este pacote",
      waMessage: "Olá, quero cotação para",
      note: "Preços referenciais fevereiro 2026. Personalizamos conforme necessidades.",
      backHome: "← Voltar ao início",
      packages: [
        {
          title: "Sites / Landings",
          features: [
            "Design responsivo premium",
            "SEO básico incluído",
            "Domínio e hospedagem",
            "Formulário de contato",
            "Integração com redes sociais",
            "Suporte pós-lançamento",
          ],
        },
        {
          title: "Lojas Virtuais",
          features: [
            "Catálogo ilimitado de produtos",
            "Carrinho de compras seguro",
            "Integração Mercado Pago",
            "Painel de administração",
            "Controle de estoque",
            "Mobile-first + capacitação",
          ],
        },
        {
          title: "Ferramentas / Apps Web",
          features: [
            "Dashboards personalizados",
            "Gamificação e engajamento",
            "Sistema POS integrado",
            "Integrações avançadas",
            "Banco de dados + API",
            "Suporte contínuo dedicado",
          ],
        },
      ],
    },
  },
} as const;

// Use a widened type so both locales are assignable
export type Translations = {
  nav: { inicio: string; servicios: string; portfolio: string; contacto: string };
  hero: { title1: string; titleHighlight: string; title2: string; subtitle: string; cta: string };
  value: {
    heading1: string;
    headingHighlight: string;
    blocks: readonly { title: string; text: string }[];
  };
  services: {
    heading: string;
    items: readonly { title: string; description: string }[];
    cta: string;
  };
  portfolio: {
    heading1: string;
    headingHighlight: string;
    viewProject: string;
    viewAll: string;
    pageHeading: string;
    pageIntro: string;
    backHome: string;
    projects: readonly { title: string; description: string }[];

  };
  contact: {
    heading1: string;
    headingHighlight: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    altText: string;
    altCta: string;
    waPrefix: string;
  };
  footer: { priceNote: string };
  servicios: {
    heading: string;
    intro: string;
    desde: string;
    consultCta: string;
    waMessage: string;
    note: string;
    backHome: string;
    packages: readonly {
      title: string;
      features: readonly string[];
    }[];
  };
};
