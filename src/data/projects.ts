import portfolioGrosso from "@/assets/portfolio-grosso.png";
import portfolioSociogym from "@/assets/portfolio-sociogym.png";
import portfolioMarketing from "@/assets/portfolio-marketing.png";
import portfolioVentix from "@/assets/portfolio-ventix.png";
import portfolioFutmatch from "@/assets/portfolio-futmatch.png";
import portfolioFitcoachub from "@/assets/portfolio-fitcoachub.png";
import portfolioPicca from "@/assets/portfolio-picca.png";
import portfolioInvitadigital from "@/assets/portfolio-invitadigital.png";

export interface ProjectMeta {
  image: string;
  url: string;
}

// Order matches translations.portfolio.projects
export const projectMeta: ProjectMeta[] = [
  { image: portfolioGrosso, url: "https://take.app/es/grosso" },
  { image: portfolioSociogym, url: "https://sociogym.lovable.app" },
  { image: portfolioMarketing, url: "https://marketing-master-game.lovable.app" },
  { image: portfolioVentix, url: "https://ventix.lovable.app" },
  { image: portfolioFutmatch, url: "https://futmatch.lovable.app" },
  { image: portfolioFitcoachub, url: "https://fitcoachub.lovable.app" },
  { image: portfolioPicca, url: "https://picca.lovable.app" },
  { image: portfolioInvitadigital, url: "https://invitadodigital.netlify.app" },
];
