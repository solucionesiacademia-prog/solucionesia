import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, regions, formatPrice, detectRegion, type Locale, type Region, type Translations } from "./translations";

interface I18nContextType {
  locale: Locale;
  region: Region;
  t: Translations;
  setRegion: (r: Region) => void;
  price: (arsAmount: number) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [region, setRegion] = useState<Region>(() => detectRegion());

  const locale = regions[region].locale;
  const t = translations[locale];
  const price = (ars: number) => formatPrice(ars, region);

  return (
    <I18nContext.Provider value={{ locale, region, t, setRegion, price }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be inside I18nProvider");
  return ctx;
};
