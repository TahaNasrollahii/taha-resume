// Notes app content. Inspired by alanagoyal.com: the "about" lives in Notes.
// Inline syntax: [label](https://…) opens a link, [label](app:safari/eventra)
// opens a window (app:<window>/<optional data id>).

import {
  profile,
  profileFa,
  skills,
  skillCategoriesFa,
  funFacts,
  funFactsFa,
} from "./profile";

export const notes = [
  {
    id: "about",
    title: "about me",
    emoji: "👋",
    pinned: true,
    date: "Nov 2026",
    blocks: [
      { type: "h1", text: `hey, I'm ${profile.firstName}` },
      {
        type: "p",
        text: "I'm a software engineer in Tehran building production backends, full-stack web platforms, Telegram Mini-Apps, and AI-powered systems across Python (Django, DRF, FastAPI) and TypeScript (NestJS, Next.js 16, Payload CMS).",
      },
      {
        type: "p",
        text: "I care deeply about reliable relational data models, distributed task queues (Celery, RabbitMQ, BullMQ), vector search with PostgreSQL + pgvector, technical SEO, and shipping well-tested systems that solve real commercial problems.",
      },
      { type: "h2", text: "right now" },
      {
        type: "ul",
        items: [
          "Engineering [NimyChat](app:safari/nimychat), a multi-tenant AI Agent SaaS platform with NestJS, Next.js 16, pgvector RAG, live voice, micro-USD billing, and a native WooCommerce plugin.",
          "Delivered [Demetra](app:safari/demetra), a trilingual (FA/EN/ES) B2B agro-biotech platform, agronomic dosage calculator, and TOTP-hardened Payload CMS 3 store scoring 93+ on Lighthouse.",
          "Built [Titan](app:safari/titan), an omnichannel gaming store, esports tournament hub, and synchronized Telegram Mini-App backed by Django 5.2 and 385+ Pytest checks.",
          "Shipped [Arama](app:safari/arama) (12-module encrypted Kotlin/Compose Android app + serverless API), [Visika](app:safari/visika) (B2B food marketplace), and core DRF services at [Kelaasor](app:safari/kelaasor).",
        ],
      },
      { type: "h2", text: "elsewhere" },
      {
        type: "ul",
        items: [
          "[GitHub (@TahaNasrollahii)](https://github.com/TahaNasrollahii)",
          "[LinkedIn (tahanasrollahi)](https://www.linkedin.com/in/tahanasrollahi/)",
          "[Telegram (@TahaNasrollahi)](https://t.me/TahaNasrollahi)",
          `[${profile.email}](mailto:${profile.email})`,
        ],
      },
      {
        type: "p",
        text: `${profile.availability}. [Send me a message](app:mail) or [read my resume](app:resume).`,
      },
    ],
  },
  {
    id: "building",
    title: "what I'm building",
    emoji: "⚙️",
    pinned: true,
    date: "Nov 2026",
    blocks: [
      { type: "h1", text: "what I'm building" },
      {
        type: "p",
        text: "My work spans multi-tenant AI SaaS platforms, high-converting B2B & e-commerce storefronts, Telegram Mini-Apps, and event-driven Python/TypeScript backends.",
      },
      { type: "h2", text: "NimyChat — AI Agent SaaS" },
      {
        type: "p",
        text: "Multi-tenant platform for deploying tool-using AI agents across web widgets, OpenAI-compatible APIs, live browser voice, and WordPress/WooCommerce stores — powered by NestJS, Next.js 16, PostgreSQL 17 + pgvector, BullMQ, and a precision micro-USD ledger. [Case study](app:safari/nimychat)",
      },
      { type: "h2", text: "Demetra & Titan — Commerce Systems" },
      {
        type: "p",
        text: "Production commercial platforms: [Demetra](app:safari/demetra) (multilingual FA/EN/ES B2B store, dosage calculator & export RFQ hub on Next.js 16 + Payload CMS 3) and [Titan](app:safari/titan) (Next.js 16 storefront + Telegram Mini-App + Django 5.2 API with automated SEO & 385+ tests).",
      },
      { type: "h2", text: "Arama, Eventra & Briefly" },
      {
        type: "p",
        text: "Local-first encrypted Android engineering ([Arama](app:safari/arama)) alongside async FastAPI + RabbitMQ + Celery AI pipelines for web monitoring ([Eventra](app:safari/eventra)) and meeting audio intelligence ([Briefly](app:safari/briefly)). [See all projects](app:safari).",
      },
    ],
  },
  {
    id: "experience",
    title: "experience & education",
    emoji: "🎓",
    pinned: true,
    date: "Nov 2026",
    blocks: [
      { type: "h1", text: "experience & education" },
      { type: "h2", text: "work experience" },
      {
        type: "ul",
        items: [
          "Software Engineer · [NimyChat](app:safari/nimychat) (2026 – Present, Remote) — Engineering multi-tenant AI agent infrastructure, pgvector RAG, micro-USD billing, live voice, and WooCommerce store integration.",
          "Full-Stack Software Engineer (Client Project) · [Demetra](app:safari/demetra) (2026, Alborz) — Built a trilingual B2B agro-biotech platform, dosage calculator, and TOTP-hardened Payload CMS 3 dashboard.",
          "Django Back-End Developer · [Kelaasor](https://kelaasor.com/) (2026, Tehran) — Built core DRF backend modules, OTP auth, BNPL installment flows, and SMS ticketing as part of the engineering team.",
          ".NET Developer Trainee · Avid Samaneh Raymon (10/2020 – 12/2020, Alborz) — Early training role covering .NET ERP fundamentals and team workflows.",
        ],
      },
      { type: "h2", text: "education" },
      {
        type: "ul",
        items: [
          "B.Sc. Computer Engineering — Software (In Progress) · Islamic Azad University of Karaj (2026 – Present)",
          "A.Sc. Computer Engineering — Software (Completed) · Islamic Azad University of Karaj (2024 – 2026)",
        ],
      },
      { type: "h2", text: "courses & languages" },
      {
        type: "ul",
        items: [
          "[Back-End Python-Django Bootcamp](https://kelaasor.com/bootcamp/Python-django) · Kelaasor (05/2025 – 08/2025, Tehran)",
          "Languages: English (Proficient) · Persian (Native)",
        ],
      },
    ],
  },
  {
    id: "stack",
    title: "stack & tools",
    emoji: "🧰",
    date: "Nov 2026",
    blocks: [
      { type: "h1", text: "stack & tools" },
      ...skills.map((group) => ({
        type: "row",
        label: group.category,
        text: group.items.join(", "),
      })),
      {
        type: "p",
        text: "Want the interactive version? Open the [Terminal](app:terminal) and type help.",
      },
    ],
  },
  {
    id: "facts",
    title: "engineering notes",
    emoji: "⌨️",
    date: "Nov 2026",
    blocks: [
      { type: "h1", text: "engineering notes" },
      { type: "ul", items: funFacts },
    ],
  },
  {
    id: "roadmap",
    title: "focus & roadmap",
    emoji: "🗺️",
    date: "Nov 2026",
    blocks: [
      { type: "h1", text: "focus & roadmap" },
      {
        type: "todo",
        items: [
          { text: "Complete A.Sc. in Computer Engineering (Software)", done: true },
          { text: "Ship Kelaasor core DRF backend & BNPL enrollment engine", done: true },
          { text: "Build Eventra & Briefly async AI pipelines with RabbitMQ & Celery", done: true },
          { text: "Synchronize Titan Next.js 16 storefront, Telegram Mini-App & SEO engine", done: true },
          { text: "Deliver Demetra trilingual B2B & export platform (93+ Lighthouse)", done: true },
          { text: "Ship Arama 12-module encrypted Kotlin/Compose Android app", done: true },
          { text: "Scale NimyChat multi-tenant AI Agent SaaS & WooCommerce bridge", done: true },
          { text: "Complete B.Sc. in Computer Engineering (Software)", done: false },
          { text: "Partner with E-Commerce & B2B brands on high-speed custom platforms", done: false },
        ],
      },
    ],
  },
];

// ── Persian ────────────────────────────────────────────────────────────────

export const notesFa = [
  {
    id: "about",
    title: "درباره من",
    emoji: "👋",
    pinned: true,
    date: "آبان ۱۴۰۵",
    blocks: [
      { type: "h1", text: `سلام، من ${profileFa.firstName} هستم` },
      {
        type: "p",
        text: "مهندس نرم‌افزار ساکن تهران هستم؛ بک‌اندهای مقیاس‌پذیر، پلتفرم‌های وب فول‌استک، مینی‌اپ‌های تلگرام و سیستم‌های مبتنی بر هوش مصنوعی را با Python (Django، DRF، FastAPI) و TypeScript (NestJS، Next.js 16، Payload CMS) طراحی و پیاده‌سازی می‌کنم.",
      },
      {
        type: "p",
        text: "تمرکز اصلی من روی مدل‌سازی دقیق پایگاه‌داده، صف‌های پردازش ناهم‌زمان (Celery، RabbitMQ، BullMQ)، جستجوی برداری با PostgreSQL + pgvector، سئوی تکنیکال و تحویل سیستم‌های تست‌شده‌ای است که مسائل واقعی کسب‌وکار را حل می‌کنند.",
      },
      { type: "h2", text: "این روزها" },
      {
        type: "ul",
        items: [
          "توسعه پلتفرم [نیمی‌چت (NimyChat)](app:safari/nimychat)؛ سامانه SaaS چندمستاجره ایجنت هوش مصنوعی با NestJS، Next.js 16، پایگاه دانش pgvector، صدای زنده و افزونه ووکامرس.",
          "پیاده‌سازی پلتفرم سه‌زبانه [دمترا (Demetra)](app:safari/demetra)؛ فروشگاه B2B، ویترین صادراتی، ماشین‌حساب مهندسی دوز مصرف و پنل امن Payload CMS 3 با امتیاز سرعت ۹۳+ گوگل.",
          "ساخت اکوسیستم سهسطحی [تایتان (Titan)](app:safari/titan) شامل فروشگاه Next.js 16، مینی‌اپ تلگرام React 19 و بک‌اند Django 5.2 با بیش از ۳۸۵ تست خودکار.",
          "توسعه اپ اندروید رمزنگاری‌شده [آراما (Arama)](app:safari/arama)، مارکت‌پلیس B2B [ویزیکا](app:safari/visika) و سرویس‌های بک‌اند [کلاسور](app:safari/kelaasor).",
        ],
      },
      { type: "h2", text: "راه‌های ارتباطی" },
      {
        type: "ul",
        items: [
          "[گیت‌هاب (@TahaNasrollahii)](https://github.com/TahaNasrollahii)",
          "[لینکدین (tahanasrollahi)](https://www.linkedin.com/in/tahanasrollahi/)",
          "[تلگرام (@TahaNasrollahi)](https://t.me/TahaNasrollahi)",
          `[${profile.email}](mailto:${profile.email})`,
        ],
      },
      {
        type: "p",
        text: `${profileFa.availability}. [برایم پیام بفرستید](app:mail) یا [رزومه‌ام را ببینید](app:resume).`,
      },
    ],
  },
  {
    id: "building",
    title: "چه می‌سازم",
    emoji: "⚙️",
    pinned: true,
    date: "آبان ۱۴۰۵",
    blocks: [
      { type: "h1", text: "چه می‌سازم" },
      {
        type: "p",
        text: "کارهای من طیف کاملی از پلتفرم‌های SaaS هوش مصنوعی، سیستم‌های فروشگاهی و صادراتی B2B، مینی‌اپ‌های تلگرام و بک‌اندهای رویدادمحور را پوشش می‌دهد.",
      },
      { type: "h2", text: "نیمی‌چت (NimyChat) — پلتفرم ایجنت هوش مصنوعی" },
      {
        type: "p",
        text: "سامانه چندمستاجره ساخت و استقرار دستیارهای هوشمند فروش و پشتیبانی روی ویجت سایت، API سازگار با OpenAI، گفتگوی صوتی زنده و فروشگاه‌های ووکامرس با NestJS، Next.js 16، pgvector و دفتر کل میکرو-دلار. [مطالعه موردی](app:safari/nimychat)",
      },
      { type: "h2", text: "دمترا و تایتان — سیستم‌های فروش و تجارت آنلاین" },
      {
        type: "p",
        text: "پلتفرم‌های تجاری پروداکشن: [دمترا](app:safari/demetra) (پلتفرم سه‌زبانه B2B، ماشین‌حساب خرید و قیف صادراتی روی Next.js 16 + Payload CMS 3) و [تایتان](app:safari/titan) (فروشگاه Next.js 16 همگام با مینی‌اپ تلگرام و بک‌اند Django 5.2 با سئوی خودکار و ۳۸۵+ تست).",
      },
      { type: "h2", text: "آراما، Eventra و Briefly" },
      {
        type: "p",
        text: "مهندسی اندروید بومی حریم‌خصوصی‌محور با Kotlin/Compose در [آراما](app:safari/arama) در کنار پایپ‌لاین‌های ناهم‌زمان FastAPI و RabbitMQ برای پایش هوشمند وب ([Eventra](app:safari/eventra)) و تحلیل صوت جلسات ([Briefly](app:safari/briefly)). [همه پروژه‌ها را ببینید](app:safari).",
      },
    ],
  },
  {
    id: "experience",
    title: "سوابق و تحصیلات",
    emoji: "🎓",
    pinned: true,
    date: "آبان ۱۴۰۵",
    blocks: [
      { type: "h1", text: "سوابق و تحصیلات" },
      { type: "h2", text: "سوابق کاری" },
      {
        type: "ul",
        items: [
          "مهندس نرم‌افزار · [نیمی‌چت (NimyChat)](app:safari/nimychat) (۱۴۰۵ – اکنون، دورکاری) — توسعه زیرساخت چندمستاجره ایجنت‌های هوش مصنوعی، پایگاه دانش pgvector، حسابداری میکرو-دلار، صدای زنده و افزونه ووکامرس.",
          "مهندس نرم‌افزار فول‌استک (پروژه کارفرمایی) · [دمترا](app:safari/demetra) (۱۴۰۵، البرز) — طراحی و پیاده‌سازی پلتفرم سه‌زبانه B2B، ماشین‌حساب دوز مصرف و پنل امن Payload CMS 3.",
          "توسعه‌دهنده بک‌اند جنگو · [کلاسور](https://kelaasor.com/) (۱۴۰۵، تهران) — توسعه سرویس‌های اصلی DRF، احراز هویت OTP، ثبت‌نام اقساطی (BNPL) و تیکتینگ پیامکی در تیم مهندسی.",
          "توسعه‌دهنده آزمایشی دات‌نت · آوید سامانه رایمون (مهر ۱۳۹۹ – آذر ۱۳۹۹، البرز) — دوره کوتاه‌مدت آغازین شامل مبانی نرم‌افزارهای سازمانی .NET و گردش‌کار تیمی.",
        ],
      },
      { type: "h2", text: "تحصیلات" },
      {
        type: "ul",
        items: [
          "کارشناسی مهندسی کامپیوتر — نرم‌افزار (در حال تحصیل) · دانشگاه آزاد اسلامی واحد کرج (۱۴۰۵ – اکنون)",
          "کاردانی مهندسی کامپیوتر — نرم‌افزار (فارغ‌التحصیل) · دانشگاه آزاد اسلامی واحد کرج (۱۴۰۳ – ۱۴۰۵)",
        ],
      },
      { type: "h2", text: "دوره‌ها و زبان‌ها" },
      {
        type: "ul",
        items: [
          "[بوت‌کمپ بک‌اند پایتون-جنگو](https://kelaasor.com/bootcamp/Python-django) · کلاسور (اردیبهشت ۱۴۰۴ – مرداد ۱۴۰۴، تهران)",
          "زبان‌ها: انگلیسی (مسلط) · فارسی (زبان مادری)",
        ],
      },
    ],
  },
  {
    id: "stack",
    title: "ابزارها و تکنولوژی‌ها",
    emoji: "🧰",
    date: "آبان ۱۴۰۵",
    blocks: [
      { type: "h1", text: "ابزارها و تکنولوژی‌ها" },
      ...skills.map((group) => ({
        type: "row",
        label: skillCategoriesFa[group.category] ?? group.category,
        text: group.items.join("، "),
      })),
      {
        type: "p",
        text: "نسخه تعاملی‌اش را می‌خواهید؟ [ترمینال](app:terminal) را باز کنید و help را بزنید.",
      },
    ],
  },
  {
    id: "facts",
    title: "نکات مهندسی من",
    emoji: "⌨️",
    date: "آبان ۱۴۰۵",
    blocks: [
      { type: "h1", text: "نکات مهندسی من" },
      { type: "ul", items: funFactsFa },
    ],
  },
  {
    id: "roadmap",
    title: "مسیر و نقشه راه",
    emoji: "🗺️",
    date: "آبان ۱۴۰۵",
    blocks: [
      { type: "h1", text: "مسیر و نقشه راه" },
      {
        type: "todo",
        items: [
          { text: "اتمام کاردانی مهندسی کامپیوتر — نرم‌افزار", done: true },
          { text: "توسعه بک‌اند DRF و سیستم ثبت‌نام قسطی کلاسور", done: true },
          { text: "ساخت پایپ‌لاین‌های هوش مصنوعی ناهم‌زمان Eventra و Briefly", done: true },
          { text: "همگام‌سازی فروشگاه Next.js 16، مینی‌اپ تلگرام و سئوی Titan", done: true },
          { text: "پیاده‌سازی پلتفرم سه‌زبانه B2B و صادراتی دمترا (امتیاز ۹۳+ گوگل)", done: true },
          { text: "توسعه اپ اندروید ۱۲ ماژوله و رمزنگاری‌شده آراما با Kotlin/Compose", done: true },
          { text: "توسعه پلتفرم SaaS ایجنت هوش مصنوعی NimyChat و افزونه ووکامرس", done: true },
          { text: "اتمام کارشناسی مهندسی کامپیوتر — نرم‌افزار", done: false },
          { text: "همکاری با برندهای فروشگاهی و شرکت‌های B2B در ساخت پلتفرم‌های اختصاصی", done: false },
        ],
      },
    ],
  },
];
