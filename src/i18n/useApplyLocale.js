import { useEffect } from "react";
import { useLocale } from "./locale";

const META = {
  en: {
    title: "Taha Nasrollahi · Software Engineer",
    description:
      "Taha Nasrollahi is a Software Engineer in Tehran building scalable backends, full-stack web platforms, Telegram Mini-Apps, and AI-powered systems with Python, Django, FastAPI, NestJS, and Next.js 16.",
  },
  fa: {
    title: "طاها نصرالهی · مهندس نرم‌افزار",
    description:
      "طاها نصرالهی، مهندس نرم‌افزار در تهران. طراحی و توسعه بک‌اندهای مقیاس‌پذیر، پلتفرم‌های وب فول‌استک، مینی‌اپ‌های تلگرام و سیستم‌های هوش مصنوعی با Python، Django، FastAPI، NestJS و Next.js 16.",
  },
};

// Keeps <html lang/dir>, the title and the description in sync with the
// chosen language. Mount once.
export const useApplyLocale = () => {
  const locale = useLocale();
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "fa" ? "rtl" : "ltr";
    document.title = META[locale].title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", META[locale].description);
  }, [locale]);
};
