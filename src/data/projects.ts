import portfolioGrosso from "@/assets/portfolio-grosso.png";
import portfolioSociogym from "@/assets/portfolio-sociogym.png";
import portfolioMarketing from "@/assets/portfolio-marketing.png";
import portfolioVentix from "@/assets/portfolio-ventix.png";
import portfolioFutmatch from "@/assets/portfolio-futmatch.png";
import portfolioFitcoachub from "@/assets/portfolio-fitcoachub.png";
import portfolioPicca from "@/assets/portfolio-picca.png";
import portfolioInvitadigital from "@/assets/portfolio-invitadigital.png";

export type ProjectCategory = "store" | "saas" | "tool";

export interface ProjectMeta {
  image: string;
  url: string;
  category: ProjectCategory;
  /** Open platform: visitors can sign up and use it for free */
  openAccess?: boolean;
  /** CSS variable name holding the ambient brand tone (HSL) */
  ambient?: string;
}

// Order matches translations.portfolio.projects
export const projectMeta: ProjectMeta[] = [
  { image: portfolioGrosso, url: "https://take.app/es/grosso", category: "store", ambient: "--ambient-grosso" },
  { image: portfolioSociogym, url: "https://sociogym.lovable.app", category: "saas" },
  { image: portfolioMarketing, url: "https://marketing-master-game.lovable.app", category: "tool", ambient: "--ambient-marketing" },
  { image: portfolioVentix, url: "https://ventix.lovable.app", category: "saas", openAccess: true },
  { image: portfolioFutmatch, url: "https://futmatch.lovable.app", category: "saas", openAccess: true },
  { image: portfolioFitcoachub, url: "https://fitcoachub.lovable.app", category: "saas", openAccess: true },
  { image: portfolioPicca, url: "https://picca.lovable.app", category: "store", openAccess: true, ambient: "--ambient-picca" },
  { image: portfolioInvitadigital, url: "https://invitadodigital.netlify.app", category: "tool", ambient: "--ambient-invita" },
];

/** Indexes featured in the home carousel */
export const featuredProjects = [0, 2, 6, 7];

export const categoryLabels: Record<"es" | "pt", Record<ProjectCategory | "all", string>> = {
  es: { all: "Todos", store: "Tiendas online", saas: "SaaS y plataformas", tool: "Herramientas y experiencias" },
  pt: { all: "Todos", store: "Lojas online", saas: "SaaS e plataformas", tool: "Ferramentas e experiências" },
};

export const openAccessLabel: Record<"es" | "pt", string> = {
  es: "Demo en vivo · Registro libre",
  pt: "Demo ao vivo · Cadastro livre",
};
