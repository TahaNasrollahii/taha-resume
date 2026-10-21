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
    date: "Oct 2026",
    blocks: [
      { type: "h1", text: `hey, I'm ${profile.firstName}` },
      {
        type: "p",
        text: "I'm a backend developer in Tehran specializing in Python, Django, Django REST Framework, and FastAPI. I design relational databases, build asynchronous task pipelines with Celery & RabbitMQ, cache hot paths with Redis, and ship containerized systems with Docker and GitHub Actions CI/CD.",
      },
      {
        type: "p",
        text: "My path started with a Computer Engineering degree at Islamic Azad University of Karaj and the Back-End Python-Django Bootcamp at Kelaasor, after which I joined the Kelaasor engineering team to help build the platform itself.",
      },
      { type: "h2", text: "right now" },
      {
        type: "ul",
        items: [
          "Contributing to [Kelaasor](app:safari/kelaasor), a bootcamp management platform with DRF, OTP auth, and Buy Now Pay Later enrollment flows.",
          "Built [Eventra](app:safari/eventra), an AI-powered RSS & webpage monitoring system using FastAPI, Celery, RabbitMQ, Redis, and Groq LLaMA 3.3 70B.",
          "Shipped [Briefly](app:safari/briefly), an async audio intelligence platform with dedicated RabbitMQ/Celery queues and WebSocket progress streaming.",
          "Created [StudyMate](app:safari/studymate), an AI study assistant API with JWT rotation, Redis LLM caching, and automated VPS CI/CD.",
        ],
      },
      { type: "h2", text: "elsewhere" },
      {
        type: "ul",
        items: [
          "[GitHub (@TahaNasrollahii)](https://github.com/TahaNasrollahii)",
          "[LinkedIn (tahanasrollahi)](https://www.linkedin.com/in/tahanasrollahi/)",
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
    date: "Oct 2026",
    blocks: [
      { type: "h1", text: "what I'm building" },
      {
        type: "p",
        text: "Most of my work focuses on event-driven backends, distributed task queues, and integrating LLM APIs into reliable production pipelines.",
      },
      { type: "h2", text: "Eventra" },
      {
        type: "p",
        text: "An asynchronous personal monitoring assistant for RSS feeds and webpages. Uses SHA-256 content change detection, RabbitMQ + Celery with dead-letter queues, Groq LLaMA 3.3 70B filtering, real-time WebSocket alerts, and Prometheus metrics. [Case study](app:safari/eventra) · [Source](https://github.com/TahaNasrollahii/Eventra)",
      },
      { type: "h2", text: "Kelaasor" },
      {
        type: "p",
        text: "Bootcamp management platform built with Django & DRF. Features custom phone/OTP auth via SimpleJWT, Redis rate limiting, a Buy Now Pay Later multi-installment enrollment state machine, and Kavenegar SMS tasks. [Case study](app:safari/kelaasor) · [kelaasor.com](https://kelaasor.com/)",
      },
      { type: "h2", text: "Briefly & StudyMate" },
      {
        type: "p",
        text: "Async FastAPI services for meeting audio intelligence ([Briefly](app:safari/briefly)) and AI study plans/quizzes ([StudyMate](app:safari/studymate)). [See all projects](app:safari).",
      },
    ],
  },
  {
    id: "experience",
    title: "experience & education",
    emoji: "🎓",
    pinned: true,
    date: "Oct 2026",
    blocks: [
      { type: "h1", text: "experience & education" },
      { type: "h2", text: "work experience" },
      {
        type: "ul",
        items: [
          "Django Developer · [Kelaasor](https://kelaasor.com/) (2026, Tehran) — Contributed to backend development of the Kelaasor bootcamp platform as part of the engineering team.",
          "Dotnet Developer Intern · Avid Samaneh Raymon (10/2020 – 12/2020, Alborz) — Short-term internship covering .NET development fundamentals and team-based software workflows.",
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
    date: "Oct 2026",
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
    date: "Sep 2026",
    blocks: [
      { type: "h1", text: "engineering notes" },
      { type: "ul", items: funFacts },
    ],
  },
  {
    id: "roadmap",
    title: "focus & roadmap",
    emoji: "🗺️",
    date: "Oct 2026",
    blocks: [
      { type: "h1", text: "focus & roadmap" },
      {
        type: "todo",
        items: [
          { text: "Complete A.Sc. in Computer Engineering (Software)", done: true },
          { text: "Complete Kelaasor Back-End Python-Django Bootcamp", done: true },
          { text: "Ship Kelaasor core DRF backend & BNPL enrollment engine", done: true },
          { text: "Build Eventra async AI monitoring with RabbitMQ & Celery", done: true },
          { text: "Build Briefly audio intelligence pipeline with Groq Whisper", done: true },
          { text: "Ship StudyMate API with JWT rotation & VPS CI/CD", done: true },
          { text: "Launch macOS interactive desktop portfolio", done: true },
          { text: "Complete B.Sc. in Computer Engineering (Software)", done: false },
          { text: "Deep dive into Kubernetes & distributed tracing (OpenTelemetry)", done: false },
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
    date: "مهر ۱۴۰۵",
    blocks: [
      { type: "h1", text: `سلام، من ${profileFa.firstName} هستم` },
      {
        type: "p",
        text: "توسعه‌دهنده بک‌اند ساکن تهران هستم، متخصص در Python، Django، DRF و FastAPI. پایگاه‌داده‌های رابطه‌ای طراحی می‌کنم، پایپ‌لاین‌های پردازش ناهم‌زمان با Celery و RabbitMQ می‌سازم، مسیرهای پرترافیک را با Redis کش می‌کنم و سرویس‌ها را با Docker و CI/CD (GitHub Actions) مستقر می‌کنم.",
      },
      {
        type: "p",
        text: "مسیرم با تحصیل در رشته مهندسی کامپیوتر در دانشگاه آزاد کرج و گذراندن بوت‌کمپ بک‌اند پایتون-جنگو در کلاسور شکل گرفت و پس از آن به تیم فنی کلاسور پیوستم تا در توسعه خود پلتفرم مشارکت کنم.",
      },
      { type: "h2", text: "این روزها" },
      {
        type: "ul",
        items: [
          "مشارکت در توسعه بک‌اند [کلاسور](app:safari/kelaasor) با DRF، احراز هویت OTP و ماشین‌حالت ثبت‌نام قسطی (BNPL).",
          "ساخت [Eventra](app:safari/eventra)؛ سیستم مانیتورینگ هوشمند فیدهای RSS و صفحات وب با FastAPI، Celery، RabbitMQ و مدل Groq LLaMA 3.3 70B.",
          "توسعه [Briefly](app:safari/briefly)؛ پلتفرم هوش مصنوعی رونویسی و خلاصه‌سازی جلسات با صف‌های اختصاصی RabbitMQ و WebSocket.",
          "پیاده‌سازی [StudyMate](app:safari/studymate)؛ دستیار مطالعه هوشمند با چرخش توکن JWT، کشینگ Redis و استقرار خودکار CI/CD.",
        ],
      },
      { type: "h2", text: "جاهای دیگر" },
      {
        type: "ul",
        items: [
          "[گیت‌هاب (@TahaNasrollahii)](https://github.com/TahaNasrollahii)",
          "[لینکدین (tahanasrollahi)](https://www.linkedin.com/in/tahanasrollahi/)",
          `[${profile.email}](mailto:${profile.email})`,
        ],
      },
      {
        type: "p",
        text: `${profileFa.availability}. [برایم پیام بفرستید](app:mail) یا [رزومه‌ام را بخوانید](app:resume).`,
      },
    ],
  },
  {
    id: "building",
    title: "چه می‌سازم",
    emoji: "⚙️",
    pinned: true,
    date: "مهر ۱۴۰۵",
    blocks: [
      { type: "h1", text: "چه می‌سازم" },
      {
        type: "p",
        text: "تمرکز اصلی من روی بک‌اندهای رویدادمحور، صف‌های توزیع‌شده وظایف و یکپارچه‌سازی مدل‌های هوش مصنوعی در سرویس‌های پایدار پروداکشن است.",
      },
      { type: "h2", text: "Eventra" },
      {
        type: "p",
        text: "دستیار شخصی مانیتورینگ ناهم‌زمان برای فیدهای RSS و صفحات وب. مجهز به تشخیص تغییر محتوا با SHA-256، صف‌های RabbitMQ و Celery همراه با Dead-Letter Queue، فیلترینگ هوشمند با LLaMA 3.3 70B، هشدار آنی WebSocket و متریک‌های Prometheus. [مطالعه موردی](app:safari/eventra) · [سورس کد](https://github.com/TahaNasrollahii/Eventra)",
      },
      { type: "h2", text: "کلاسور" },
      {
        type: "p",
        text: "پلتفرم مدیریت بوت‌کمپ ساخته‌شده با Django و DRF. دارای احراز هویت سفارشی موبایل/OTP با SimpleJWT، محدودیت نرخ درخواست با Redis، ماشین‌حالت ثبت‌نام قسطی (BNPL) و ارسال پیامک با کاوه‌نگار. [مطالعه موردی](app:safari/kelaasor) · [kelaasor.com](https://kelaasor.com/)",
      },
      { type: "h2", text: "Briefly و StudyMate" },
      {
        type: "p",
        text: "سرویس‌های ناهم‌زمان FastAPI برای تحلیل صوت جلسات ([Briefly](app:safari/briefly)) و تولید برنامه مطالعاتی و کوئیز هوشمند ([StudyMate](app:safari/studymate)). [همه پروژه‌ها را ببینید](app:safari).",
      },
    ],
  },
  {
    id: "experience",
    title: "سوابق و تحصیلات",
    emoji: "🎓",
    pinned: true,
    date: "مهر ۱۴۰۵",
    blocks: [
      { type: "h1", text: "سوابق و تحصیلات" },
      { type: "h2", text: "سوابق کاری" },
      {
        type: "ul",
        items: [
          "توسعه‌دهنده جنگو · [کلاسور](https://kelaasor.com/) (۱۴۰۵، تهران) — مشارکت در توسعه بک‌اند پلتفرم بوت‌کمپ کلاسور به‌عنوان عضو تیم مهندسی.",
          "کارآموز توسعه‌دهنده دات‌نت · آوید سامانه رایمون (مهر ۱۳۹۹ – آذر ۱۳۹۹، البرز) — کارآموزی کوتاه‌مدت شامل مبانی توسعه .NET و گردش‌کار تیمی نرم‌افزار.",
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
    date: "مهر ۱۴۰۵",
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
    date: "شهریور ۱۴۰۵",
    blocks: [
      { type: "h1", text: "نکات مهندسی من" },
      { type: "ul", items: funFactsFa },
    ],
  },
  {
    id: "roadmap",
    title: "مسیر و نقشه راه",
    emoji: "🗺️",
    date: "مهر ۱۴۰۵",
    blocks: [
      { type: "h1", text: "مسیر و نقشه راه" },
      {
        type: "todo",
        items: [
          { text: "اتمام کاردانی مهندسی کامپیوتر — نرم‌افزار", done: true },
          { text: "گذراندن بوت‌کمپ بک‌اند پایتون-جنگو کلاسور", done: true },
          { text: "توسعه بک‌اند DRF و سیستم ثبت‌نام قسطی کلاسور", done: true },
          { text: "ساخت سیستم مانیتورینگ هوشمند Eventra با RabbitMQ و Celery", done: true },
          { text: "ساخت پایپ‌لاین تحلیل صوت Briefly با Groq Whisper", done: true },
          { text: "توسعه StudyMate API با چرخش JWT و استقرار خودکار CI/CD", done: true },
          { text: "راه‌اندازی پورتفولیوی دسکتاپ macOS", done: true },
          { text: "اتمام کارشناسی مهندسی کامپیوتر — نرم‌افزار", done: false },
          { text: "تعمق در Kubernetes و ردیابی توزیع‌شده (OpenTelemetry)", done: false },
        ],
      },
    ],
  },
];
