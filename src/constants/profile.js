// Single source of truth for who I am and how to reach me.
// Everything else (Notes, Contact, Terminal, Resume, meta tags) reads from here.

export const profile = {
  name: "Taha Nasrollahi",
  firstName: "Taha",
  initials: "TN",
  role: "Back-End Developer",
  resumeRole: "Back-End Developer Intern",
  headline:
    "Back-End developer building RESTful & async APIs, event-driven pipelines, and AI-powered systems with Python, Django & FastAPI",
  location: "Malard, Tehran, Iran",
  timezone: "Asia/Tehran",
  email: "tahanasrollahii@gmail.com",
  phone: "09014829025",
  phoneFormatted: "+98 901 482 9025",
  phoneHref: "tel:+989014829025",
  website: "https://taha-nasrollahi.vercel.app",
  websiteHost: "taha-nasrollahi.vercel.app",
  resumeUrl: "/files/taha-nasrollahi-resume.pdf",
  availability: "Open to backend internships and junior backend developer roles",
  education:
    "B.Sc. Computer Engineering — Software (In Progress), Islamic Azad University of Karaj",
  resumeSummary:
    "Backend Developer Intern with hands-on experience building RESTful APIs using Django, DRF, and FastAPI. Skilled in relational database design, async task processing with Celery, Redis caching, and containerized deployments with Docker and CI/CD (GitHub Actions). Experienced in automated testing with pytest and integrating third-party/LLM-based APIs. Focused on clean architecture and maintainable, scalable backend systems.",
  summary: [
    "I'm a backend developer in Tehran with hands-on experience building RESTful and asynchronous APIs using Python, Django, Django REST Framework, and FastAPI. I focus on relational database modeling, distributed task processing with Celery and RabbitMQ, Redis caching, and containerized deployments with Docker and GitHub Actions CI/CD.",
    "After completing the Back-End Python-Django Bootcamp at Kelaasor, I joined the engineering team to help build the Kelaasor platform itself. Lately I've been shipping event-driven backends and AI-powered services — including Eventra, Briefly, and StudyMate — integrating Groq LLaMA 3.3, Whisper, and OpenRouter with real-time WebSocket layers and comprehensive pytest suites.",
  ],
};

// Persian overrides, merged over `profile` when the site is in Persian.
export const profileFa = {
  name: "طاها نصرالهی",
  firstName: "طاها",
  role: "توسعه‌دهنده بک‌اند",
  resumeRole: "کارآموز توسعه‌دهنده بک‌اند",
  headline:
    "توسعه‌دهنده بک‌اند؛ ساخت APIهای ناهم‌زمان، پایپ‌لاین‌های رویدادمحور و سیستم‌های هوشمند با Python، Django و FastAPI",
  location: "ملارد، تهران، ایران",
  availability: "آماده همکاری در موقعیت‌های کارآموزی و جونیور بک‌اند",
  education: "دانشجوی کارشناسی مهندسی کامپیوتر — نرم‌افزار، دانشگاه آزاد اسلامی کرج",
  summary: [
    "توسعه‌دهنده بک‌اند ساکن تهران هستم با تجربه عملی در ساخت APIهای RESTful و ناهم‌زمان با Python، Django، DRF و FastAPI. تمرکزم روی طراحی پایگاه‌داده رابطه‌ای، پردازش ناهم‌زمان وظایف با Celery و RabbitMQ، کشینگ با Redis و استقرار کانتینری با Docker و CI/CD (GitHub Actions) است.",
    "پس از گذراندن بوت‌کمپ بک‌اند پایتون و جنگو در کلاسور، به تیم فنی پیوستم تا در توسعه خود پلتفرم مشارکت کنم. این روزها سیستم‌های رویدادمحور و سرویس‌های مبتنی بر هوش مصنوعی مثل Eventra، Briefly و StudyMate را با یکپارچه‌سازی مدل‌های LLaMA 3.3، Whisper و OpenRouter، ارتباط بلادرنگ WebSocket و تست‌های خودکار pytest می‌سازم.",
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
    id: "email",
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
  },
];

export const skillCategoriesFa = {
  "Languages & Frameworks": "زبان‌ها و فریم‌ورک‌ها",
  Databases: "پایگاه‌داده",
  "DevOps & Testing": "دوآپس و تست",
  "Auth & API": "احراز هویت و API",
  AI: "هوش مصنوعی",
};

export const skills = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "Django", "DRF", "FastAPI", "SQLAlchemy"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Redis", "Alembic"],
  },
  {
    category: "DevOps & Testing",
    items: ["Docker", "Git", "CI/CD", "Celery", "RabbitMQ", "Pytest"],
  },
  {
    category: "Auth & API",
    items: ["JWT", "OTP Auth", "OAuth2", "Rate Limiting", "RESTful API Design", "WebSockets"],
  },
  {
    category: "AI",
    items: ["LLM API Integration", "Prompt Engineering", "Groq API", "OpenRouter"],
  },
];

export const experience = [
  {
    id: "kelaasor-role",
    role: "Django Developer",
    roleFa: "توسعه‌دهنده جنگو",
    company: "Kelaasor",
    companyFa: "کلاسور",
    period: "2026",
    periodFa: "۱۴۰۵",
    location: "Tehran, Iran",
    locationFa: "تهران، ایران",
    bullets: [
      "Contributed to backend development of the Kelaasor bootcamp platform as part of the engineering team.",
    ],
    bulletsFa: [
      "مشارکت در توسعه بک‌اند پلتفرم بوت‌کمپ کلاسور به‌عنوان عضو تیم مهندسی (لیستینگ دوره‌ها، منطق ثبت‌نام و ماژول بلاگ).",
    ],
  },
  {
    id: "avid-internship",
    role: "Dotnet Developer (Internship)",
    roleFa: "کارآموز توسعه‌دهنده دات‌نت",
    company: "Avid Samaneh Raymon",
    companyFa: "آوید سامانه رایمون",
    period: "10/2020 – 12/2020",
    periodFa: "مهر ۱۳۹۹ – آذر ۱۳۹۹",
    location: "Alborz Province, Iran",
    locationFa: "استان البرز، ایران",
    bullets: [
      "Short-term internship covering .NET development fundamentals and introductory team-based software workflows.",
    ],
    bulletsFa: [
      "کارآموزی کوتاه‌مدت شامل مبانی توسعه .NET و آشنایی با گردش‌کار تیمی مهندسی نرم‌افزار.",
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
  "If an API endpoint takes more than 100ms because of a blocking call, I'm already moving it into a dedicated Celery queue.",
  "I don't trust a feature until it runs cleanly inside Docker Compose and passes an async pytest suite in CI.",
  "My favorite architecture pattern is separating slow LLM/audio jobs from fast HTTP responses using RabbitMQ and Redis WebSockets.",
  "I use `select_for_update()` and atomic transactions like a seatbelt — concurrency bugs don't get a second chance.",
];

export const funFactsFa = [
  "اگر یک اندپوینت API به‌خاطر عملیات سنگین بیش از ۱۰۰ میلی‌ثانیه طول بکشد، همان لحظه به فکر انتقالش به صف اختصاصی Celery هستم.",
  "به هیچ فیچری اعتماد نمی‌کنم مگر اینکه داخل Docker Compose بالا بیاید و تست‌های ناهم‌زمان pytest را در CI پاس کند.",
  "معماری موردعلاقه‌ام جداسازی پردازش‌های سنگین هوش مصنوعی و صوت از پاسخ‌های سریع HTTP با کمک RabbitMQ و WebSocket است.",
  "از `select_for_update()` و تراکنش‌های اتمیک مثل کمربند ایمنی استفاده می‌کنم؛ باگ‌های هم‌زمانی فرصت دوباره پیدا نمی‌کنند.",
];
