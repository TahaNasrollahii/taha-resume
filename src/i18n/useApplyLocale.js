import { useEffect } from "react";
import { useLocale } from "./locale";

const META = {
  en: {
    title: "Taha Nasrollahi · Back-End Developer",
    description:
      "Taha Nasrollahi is a backend developer in Tehran building RESTful & async APIs, event-driven pipelines, and AI-powered systems with Python, Django, DRF, and FastAPI. Explore Eventra, Kelaasor, Briefly, and StudyMate in a macOS-style portfolio.",
  },
  fa: {
    title: "طاها نصرالهی · توسعه‌دهنده بک‌اند",
    description:
      "طاها نصرالهی، توسعه‌دهنده بک‌اند در تهران. ساخت APIهای ناهم‌زمان، پایپ‌لاین‌های رویدادمحور و سیستم‌های هوشمند با Python، Django، DRF و FastAPI. پروژه‌هایی مثل Eventra، کلاسور، Briefly و StudyMate را در پورتفولیویی به سبک macOS ببینید.",
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
