import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nContext";
import { regions, type Region } from "@/i18n/translations";

const regionKeys: Region[] = ["AR", "CL", "UY", "PY", "BR"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const { t, region, setRegion } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t.nav.inicio, href: "#inicio" },
    { label: t.nav.servicios, href: "#servicios" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.contacto, href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#inicio" className="text-xl font-extrabold tracking-tight text-primary">
          Solutions IA
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Region selector */}
          <div className="relative">
            <button
              onClick={() => setRegionOpen(!regionOpen)}
              className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              <span>{regions[region].flag}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {regionOpen && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg py-1 min-w-[140px] z-50">
                {regionKeys.map((r) => (
                  <button
                    key={r}
                    onClick={() => { setRegion(r); setRegionOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors flex items-center gap-2 ${
                      r === region ? "text-primary font-semibold" : "text-foreground/70"
                    }`}
                  >
                    <span>{regions[r].flag}</span>
                    {regions[r].label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="https://wa.me/5493794735500" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(142, 70%, 45%)">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.368 0-4.56-.796-6.309-2.135a.75.75 0 00-.653-.128l-3.11 1.04 1.04-3.11a.75.75 0 00-.127-.654A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setRegionOpen(!regionOpen)}
            className="text-foreground/70 text-lg"
          >
            {regions[region].flag}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-foreground"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Region dropdown mobile */}
      {regionOpen && (
        <div className="md:hidden absolute right-4 top-14 bg-card border border-border rounded-xl shadow-lg py-1 min-w-[140px] z-50">
          {regionKeys.map((r) => (
            <button
              key={r}
              onClick={() => { setRegion(r); setRegionOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors flex items-center gap-2 ${
                r === region ? "text-primary font-semibold" : "text-foreground/70"
              }`}
            >
              <span>{regions[r].flag}</span>
              {regions[r].label}
            </button>
          ))}
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 pb-4"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="https://wa.me/5493794735500" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="w-full mt-2 gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(142, 70%, 45%)">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.368 0-4.56-.796-6.309-2.135a.75.75 0 00-.653-.128l-3.11 1.04 1.04-3.11a.75.75 0 00-.127-.654A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </Button>
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
