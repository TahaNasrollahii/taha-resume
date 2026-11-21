// Single source of truth for who I am and how to reach me.
// Everything else (Notes, Contact, Terminal, Resume, meta tags) reads from here.

export const profile = {
  name: "Taha Nasrollahi",
  firstName: "Taha",
  initials: "TN",
  role: "Software Engineer",
  resumeRole: "Software Engineer · Back-End, Full-Stack & AI Systems",
  headline:
    "Software engineer building scalable backends, full-stack web platforms, Telegram Mini-Apps, and AI-powered systems with Python, Django, FastAPI, NestJS & Next.js",
  location: "Tehran, Iran",
  timezone: "Asia/Tehran",
  email: "tahanasrollahii@gmail.com",
  phone: "09014829025",
  phoneFormatted: "+98 901 482 9025",
  phoneHref: "tel:+989014829025",
  website: "https://taha-nasrollahi.vercel.app",
  websiteHost: "taha-nasrollahi.vercel.app",
  resumeUrl: "/files/taha-nasrollahi-resume.pdf",
  availability:
    "Available for software engineering roles, custom platform development, and technical consulting",
  education:
    "B.Sc. Computer Engineering — Software (In Progress), Islamic Azad University of Karaj",
  resumeSummary:
    "Software Engineer specializing in production-grade backend architectures, full-stack web platforms, and AI-powered systems. Experienced across Python (Django, DRF, FastAPI) and TypeScript (NestJS, Next.js 16, Payload CMS), with deep hands-on work in PostgreSQL (pgvector), Redis, Celery/RabbitMQ/BullMQ, Telegram Mini-Apps & bots, native Android (Kotlin/Compose), technical SEO, and automated CI/CD testing (Pytest, Vitest, Playwright). Focused on shipping fast, reliable, end-to-end software that solves real business problems.",
  summary: [
    "I'm a software engineer in Tehran building production backends, full-stack web platforms, Telegram Mini-Apps, and AI-powered products. My core stack spans Python (Django, DRF, FastAPI) and TypeScript (NestJS, Next.js 16, Payload CMS), backed by PostgreSQL (including pgvector), Redis, Celery, RabbitMQ, BullMQ, and Dockerized CI/CD pipelines.",
    "Currently, I engineer multi-tenant AI agent infrastructure at NimyChat and deliver end-to-end commercial platforms — including Demetra (a multilingual B2B & export platform with 93+ Lighthouse performance), Titan (an omnichannel gaming store, esports hub & Telegram Mini-App), Visika, Arama, and core backend services at Kelaasor.",
  ],
};

// Persian overrides, merged over `profile` when the site is in Persian.
export const profileFa = {
  name: "طاها نصرالهی",
  firstName: "طاها",
  role: "مهندس نرم‌افزار",
  resumeRole: "مهندس نرم‌افزار · بک‌اند، فول‌استک و سیستم‌های هوش مصنوعی",
  headline:
    "مهندس نرم‌افزار؛ طراحی و توسعه بک‌اندهای مقیاس‌پذیر، پلتفرم‌های وب فول‌استک، مینی‌اپ‌های تلگرام و سیستم‌های هوش مصنوعی با Python، Django، FastAPI، NestJS و Next.js",
  location: "تهران، ایران",
  availability:
    "آماده همکاری در پروژه‌های مهندسی نرم‌افزار، طراحی پلتفرم‌های اختصاصی و موقعیت‌های فنی",
  education: "دانشجوی کارشناسی مهندسی کامپیوتر — نرم‌افزار، دانشگاه آزاد اسلامی کرج",
  summary: [
    "مهندس نرم‌افزار ساکن تهران هستم با تمرکز بر طراحی بک‌اندهای سطح پروداکشن، پلتفرم‌های وب فول‌استک، ربات و مینی‌اپ‌های تلگرام و سیستم‌های مبتنی بر هوش مصنوعی. پشته اصلی من شامل Python (Django، DRF، FastAPI) و TypeScript (NestJS، Next.js 16، Payload CMS) در کنار PostgreSQL (و pgvector)، Redis، Celery، RabbitMQ، BullMQ و پایپ‌لاین‌های تست و استقرار خودکار است.",
    "هم‌اکنون در توسعه پلتفرم چندمستاجره ایجنت‌های هوش مصنوعی NimyChat مشارکت دارم و سیستم‌های تجاری و محصولی کاملی از جمله دمترا (پلتفرم سه‌زبانه B2B و صادراتی با امتیاز سرعت ۹۳+ گوگل)، تایتان (فروشگاه، پلتفرم تورنمنت و مینی‌اپ تلگرام همگام)، ویزیکا، آراما و سرویس‌های بک‌اند کلاسور را پیاده‌سازی کرده‌ام.",
  ],
};

export const socials = [
  {
    id: "github",
    label: "GitHub",
    handle: "@TahaNasrollahii",
    href: "https://github.com/TahaNasrollahii",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "tahanasrollahi",
    href: "https://www.linkedin.com/in/tahanasrollahi/",
  },
  {
    id: "telegram",
    label: "Telegram",
    handle: "@TahaNasrollahi",
    href: "https://t.me/TahaNasrollahi",
  },
  {
    id: "email",
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
  },
];

export const skillCategoriesFa = {
  "Backend & APIs": "بک‌اند و API",
  "Frontend & Mobile": "فرانت‌اند و موبایل",
  "Databases & Caching": "پایگاه‌داده و کشینگ",
  "Async, DevOps & Quality": "صف، دوآپس و کیفیت",
  "AI & Integrations": "هوش مصنوعی و یکپارچه‌سازی",
};

export const skills = [
  {
    category: "Backend & APIs",
    items: [
      "Python",
      "Django",
      "DRF",
      "FastAPI",
      "NestJS",
      "Payload CMS",
      "REST & WebSockets",
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "Telegram Mini-Apps",
      "Kotlin (Jetpack Compose)",
    ],
  },
  {
    category: "Databases & Caching",
    items: [
      "PostgreSQL",
      "pgvector",
      "Redis",
      "SQLAlchemy",
      "Drizzle ORM",
      "Alembic",
      "SQLCipher",
    ],
  },
  {
    category: "Async, DevOps & Quality",
    items: [
      "Celery",
      "RabbitMQ",
      "BullMQ",
      "Docker",
      "GitHub Actions CI/CD",
      "Pytest",
      "Playwright E2E",
      "Technical SEO",
    ],
  },
  {
    category: "AI & Integrations",
    items: [
      "AI Agents & RAG",
      "OpenRouter & Groq LLMs",
      "Whisper STT & TTS",
      "aiogram 3",
      "OTP & Payment Gateways",
      "WooCommerce Bridge",
    ],
  },
];

export const experience = [
  {
    id: "nimychat-role",
    role: "Software Engineer",
    roleFa: "مهندس نرم‌افزار",
    company: "NimyChat (AI Agent SaaS)",
    companyFa: "نیمی‌چت (پلتفرم SaaS هوش مصنوعی)",
    period: "2026 – Present",
    periodFa: "۱۴۰۵ – اکنون",
    location: "Remote",
    locationFa: "دورکاری",
    bullets: [
      "Engineering a multi-tenant AI agent SaaS monorepo with NestJS, Next.js 16, Drizzle ORM, PostgreSQL 17 + pgvector, Redis, and BullMQ.",
      "Built precision micro-USD credit accounting with message-floor settlement, live browser voice (STT/TTS), human operator handoff, and a native WordPress/WooCommerce store plugin.",
    ],
    bulletsFa: [
      "توسعه پلتفرم SaaS چندمستاجره ساخت ایجنت‌های هوش مصنوعی با معماری Monorepo (NestJS، Next.js 16، Drizzle، PostgreSQL 17 + pgvector، Redis و BullMQ).",
      "پیاده‌سازی سیستم حسابداری دقیق میکرو-دلار، گفتگوی صوتی زنده مرورگر (STT/TTS)، تحویل مکالمه به اپراتور انسانی و افزونه اختصاصی وردپرس/ووکامرس.",
    ],
  },
  {
    id: "demetra-contract",
    role: "Full-Stack Software Engineer (Client Project)",
    roleFa: "مهندس نرم‌افزار فول‌استک (پروژه کارفرمایی)",
    company: "Demetra · Pishgaman Zist Control Rayo",
    companyFa: "دمترا · پیشگامان زیست کنترل رایو",
    period: "2026",
    periodFa: "۱۴۰۵",
    location: "Alborz, Iran",
    locationFa: "البرز، ایران",
    bullets: [
      "Architected and delivered a multilingual (FA/EN/ES) B2B sales platform, interactive agronomic dosage calculator, export inquiry funnel, and TOTP-hardened Payload CMS 3 admin.",
      "Achieved 93+ mobile Lighthouse scores, zero High/Critical OWASP ZAP findings, 229 Vitest unit/integration tests, and 88 Playwright + axe E2E checks.",
    ],
    bulletsFa: [
      "طراحی و پیاده‌سازی پلتفرم فروش B2B و ویترین صادراتی سه‌زبانه (فارسی/انگلیسی/اسپانیایی)، ماشین‌حساب تخصصی دوز مصرف و پنل مدیریت Payload CMS مجهز به TOTP 2FA.",
      "کسب امتیاز بالای ۹۳ در Lighthouse موبایل، ۲۲۹ تست واحد و یکپارچه Vitest و ۸۸ تست سرتاسری Playwright به همراه سئوی تکنیکال کامل.",
    ],
  },
  {
    id: "kelaasor-role",
    role: "Django Back-End Developer",
    roleFa: "توسعه‌دهنده بک‌اند جنگو",
    company: "Kelaasor",
    companyFa: "کلاسور",
    period: "2026",
    periodFa: "۱۴۰۵",
    location: "Tehran, Iran",
    locationFa: "تهران، ایران",
    bullets: [
      "Developed core Django REST Framework services for the Kelaasor bootcamp platform — covering course catalogs, OTP authentication, Buy Now Pay Later (BNPL) multi-installment enrollments, and SMS support ticketing.",
    ],
    bulletsFa: [
      "توسعه سرویس‌های اصلی بک‌اند پلتفرم بوت‌کمپ کلاسور با Django و DRF شامل کاتالوگ دوره‌ها، احراز هویت OTP، سیستم ثبت‌نام اقساطی (BNPL) و تیکتینگ پیامکی.",
    ],
  },
  {
    id: "avid-trainee",
    role: ".NET Developer Trainee",
    roleFa: "توسعه‌دهنده آزمایشی دات‌نت",
    company: "Avid Samaneh Raymon",
    companyFa: "آوید سامانه رایمون",
    period: "10/2020 – 12/2020",
    periodFa: "مهر ۱۳۹۹ – آذر ۱۳۹۹",
    location: "Alborz Province, Iran",
    locationFa: "استان البرز، ایران",
    bullets: [
      "Early short-term training role covering .NET ERP fundamentals and collaborative software engineering workflows.",
    ],
    bulletsFa: [
      "دوره کوتاه‌مدت آغازین شامل مبانی توسعه نرم‌افزارهای سازمانی .NET و آشنایی با گردش‌کار تیمی مهندسی نرم‌افزار.",
    ],
  },
];

export const educationList = [
  {
    id: "bsc",
    degree: "B.Sc. Computer Engineering — Software (In Progress)",
    degreeFa: "کارشناسی مهندسی کامپیوتر — نرم‌افزار (در حال تحصیل)",
    school: "Islamic Azad University of Karaj",
    schoolFa: "دانشگاه آزاد اسلامی واحد کرج",
    period: "2026 – Present",
    periodFa: "۱۴۰۵ – اکنون",
    location: "Karaj, Alborz, Iran",
    locationFa: "کرج، البرز، ایران",
  },
  {
    id: "asc",
    degree: "A.Sc. Computer Engineering — Software (Completed)",
    degreeFa: "کاردانی مهندسی کامپیوتر — نرم‌افزار (فارغ‌التحصیل)",
    school: "Islamic Azad University of Karaj",
    schoolFa: "دانشگاه آزاد اسلامی واحد کرج",
    period: "2024 – 2026",
    periodFa: "۱۴۰۳ – ۱۴۰۵",
    location: "Karaj, Alborz, Iran",
    locationFa: "کرج، البرز، ایران",
  },
];

export const courses = [
  {
    id: "kelaasor-bootcamp",
    title: "Back-End Python-Django Bootcamp",
    titleFa: "بوت‌کمپ بک‌اند پایتون-جنگو",
    institute: "Kelaasor",
    instituteFa: "کلاسور",
    period: "05/2025 – 08/2025",
    periodFa: "اردیبهشت ۱۴۰۴ – مرداد ۱۴۰۴",
    location: "Tehran, Iran",
    locationFa: "تهران، ایران",
    href: "https://kelaasor.com/bootcamp/Python-django",
  },
];

export const spokenLanguages = [
  { language: "English", languageFa: "انگلیسی", level: "Proficient", levelFa: "مسلط" },
  { language: "Persian", languageFa: "فارسی", level: "Native", levelFa: "زبان مادری" },
];

export const funFacts = [
  "If an API endpoint takes more than 100ms because of a blocking call, I'm already moving it into a dedicated Celery or BullMQ queue.",
  "I don't trust a feature until it runs cleanly in CI and passes automated unit, integration, and Playwright E2E checks.",
  "Whether it's micro-dollar LLM ledger math in Postgres or Persian ZWNJ-safe text sanitization, edge cases get tested against a real database — never mocked away.",
  "I use `select_for_update()`, idempotent webhooks, and atomic transactions like a seatbelt — concurrency bugs don't get a second chance.",
];

export const funFactsFa = [
  "اگر یک اندپوینت API به‌خاطر عملیات سنگین بیش از ۱۰۰ میلی‌ثانیه طول بکشد، همان لحظه به فکر انتقالش به صف اختصاصی Celery یا BullMQ هستم.",
  "به هیچ فیچری اعتماد نمی‌کنم مگر اینکه در پایپ‌لاین CI بالا بیاید و تست‌های خودکار واحد، یکپارچه و Playwright E2E را پاس کند.",
  "چه حسابداری میکرو-دلار مصرف LLM در Postgres باشد و چه حفظ نیم‌فاصله استاندارد فارسی در ورودی‌ها، موارد مرزی را همیشه روی دیتابیس واقعی تست می‌کنم نه با Mock.",
  "از `select_for_update()`، وب‌هوک‌های Idempotent و تراکنش‌های اتمیک مثل کمربند ایمنی استفاده می‌کنم؛ باگ‌های هم‌زمانی فرصت دوباره پیدا نمی‌کنند.",
];
