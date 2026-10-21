// Projects curated from Taha Nasrollahi's resume and GitHub (@TahaNasrollahii).
// Featured = primary backend & AI systems. Archive = additional microservices & bots.
// Early practice repos live in the Trash.

const GH = "https://github.com/TahaNasrollahii";

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & Async" },
  { id: "backend", label: "Platforms & APIs" },
  { id: "open-source", label: "Open source" },
];

export const projects = [
  {
    id: "eventra",
    slug: "eventra",
    title: "Eventra",
    tagline: "AI-Powered Personal Monitoring Assistant",
    kind: "AI Monitoring Platform",
    category: "ai",
    year: "2026",
    period: "01/2026 – 02/2026",
    status: "Open source",
    accent: "#6366f1",
    thumbnail: "/images/projects/Eventra/01-hero.webp",
    summary:
      "A full-stack asynchronous monitoring system for RSS feeds and webpages, powered by Groq LLaMA 3.3 70B, with SHA-256 content change detection, real-time WebSocket alerts, and daily AI digest emails.",
    description: [
      "Eventra watches RSS/Atom feeds and webpages against plain-English (or multi-language) monitoring rules. Whenever content changes (verified via SHA-256 hashing), an event is published to a RabbitMQ fanout exchange and evaluated by Groq's LLaMA 3.3 70B model to filter out noise and write human-readable alert summaries.",
      "Built on an event-driven architecture with FastAPI, async SQLAlchemy, Celery Beat/Workers, RabbitMQ (with dead-letter queues), Redis pub/sub for instant WebSocket delivery, MinIO (S3) presigned uploads, and Prometheus observability.",
    ],
    highlights: [
      "Built a full-stack asynchronous monitoring system for RSS feeds and webpages, powered by Groq LLaMA 3.3 70B, with SHA-256 content change detection.",
      "Designed an event-driven architecture using Celery + RabbitMQ + Redis, including scheduled polling, dead-letter handling, real-time WebSocket alerts, and daily AI digest emails.",
      "Implemented production-grade observability with structured logging, Prometheus metrics, health checks, and Redis-based rate limiting.",
      "Added JWT authentication, user-scoped presigned S3/MinIO uploads, Alembic migrations, and comprehensive async testing.",
      "Containerized the entire stack with Docker Compose and built a GitHub Actions CI/CD pipeline for automated testing and deployment.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Celery",
      "RabbitMQ",
      "Redis",
      "Groq LLM",
      "MinIO (S3)",
      "Docker",
      "React",
    ],
    links: [{ label: "Source", href: `${GH}/Eventra`, kind: "source" }],
    screenshots: [
      "/images/projects/Eventra/01-hero.webp",
      "/images/projects/Eventra/02-architecture.webp",
      "/images/projects/Eventra/03-dashboard.webp",
    ],
  },
  {
    id: "kelaasor",
    slug: "kelaasor",
    title: "Kelaasor",
    tagline: "Bootcamp Management Platform",
    kind: "Production Platform",
    category: "backend",
    year: "2026",
    period: "04/2026 – 08/2026",
    status: "Live",
    accent: "#0d9488",
    rtl: true,
    thumbnail: "/images/projects/Kelaasor/01-hero.webp",
    summary:
      "Core Django REST Framework backend for a bootcamp management platform featuring course listings, OTP authentication, a Buy Now Pay Later enrollment state machine, and Celery-powered notifications.",
    description: [
      "Kelaasor is an online learning and bootcamp platform in Iran. As part of the backend engineering team, I built the core Django REST Framework services powering bootcamp listings, chapters, media attachments, support ticketing, and role-based admin panels.",
      "The platform handles high-concurrency checkout flows with atomic transactions (`select_for_update`), a custom phone/OTP authentication pipeline backed by Redis and SimpleJWT, and an automated multi-installment Buy Now Pay Later enrollment state machine.",
    ],
    highlights: [
      "Built the core Django REST Framework backend for a bootcamp platform (listings, chapters, media), with custom phone/OTP authentication via SimpleJWT and Redis-backed rate limiting.",
      "Engineered an enrollment state machine with Buy Now Pay Later support, automating multi-installment payment schedules; integrated Celery/Redis for async tasks like SMS notifications via Kavenegar.",
      "Developed a blog module with Markdown support and comments; containerized with Docker and covered with a Pytest test suite.",
    ],
    stack: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Pytest",
    ],
    links: [
      { label: "kelaasor.com", href: "https://kelaasor.com/", kind: "live" },
      { label: "Source", href: `${GH}/kelaasor_advance`, kind: "source" },
    ],
    screenshots: [
      "/images/projects/Kelaasor/01-hero.webp",
      "/images/projects/Kelaasor/02-architecture.webp",
      "/images/projects/Kelaasor/03-api.webp",
    ],
  },
  {
    id: "briefly",
    slug: "briefly",
    title: "Briefly",
    tagline: "AI-Powered Audio Intelligence Platform",
    kind: "AI Microservice",
    category: "ai",
    year: "2026",
    period: "07/2026 – 07/2026",
    status: "Open source",
    accent: "#a855f7",
    thumbnail: "/images/projects/Briefly/01-hero.webp",
    summary:
      "Asynchronous FastAPI service for meeting transcription, summarization, and action-item extraction using Groq Whisper & LLaMA 3.3 across dedicated RabbitMQ + Celery worker queues.",
    description: [
      "Briefly turns long meeting recordings, lectures, and voice notes into structured transcripts, executive summaries, key decisions, and action items. It pairs an async FastAPI backend with Groq's Whisper and LLaMA 3.3 70B models.",
      "To keep the pipeline responsive under concurrent uploads, background work is split across dedicated Celery queues over RabbitMQ — isolating heavy audio chunking (`pydub`), speech-to-text transcription, and LLM inference so slow AI calls never block lighter jobs.",
    ],
    highlights: [
      "Built an async FastAPI service for meeting transcription, summarization, and action-item extraction, using LLaMA 3.3 through the Groq API for inference.",
      "Split background work into dedicated Celery queues over RabbitMQ — separating audio chunking, transcription, and AI inference — so slow AI calls don't block lighter jobs.",
      "Modeled job state, file metadata, and structured AI responses with async SQLAlchemy and Alembic migrations.",
      "Added a WebSocket layer to push job-status updates to clients as background tasks progress, avoiding client-side polling.",
      "Used Redis for caching and as the Celery result backend to keep the pipeline responsive under concurrent audio jobs.",
      "Defined the full service — API, Celery workers, Redis, RabbitMQ, PostgreSQL — in Docker Compose for a reproducible development environment.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "RabbitMQ",
      "Celery",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Redis",
      "Groq LLM",
      "Docker",
    ],
    links: [{ label: "Source", href: `${GH}/briefly`, kind: "source" }],
    screenshots: [
      "/images/projects/Briefly/01-hero.webp",
      "/images/projects/Briefly/02-pipeline.webp",
      "/images/projects/Briefly/03-transcript.webp",
    ],
  },
  {
    id: "studymate",
    slug: "studymate",
    title: "StudyMate",
    tagline: "AI Study Assistant",
    kind: "AI Backend Service",
    category: "ai",
    year: "2026",
    period: "06/2026 – 06/2026",
    status: "Open source",
    accent: "#10b981",
    thumbnail: "/images/projects/StudyMate/01-hero.webp",
    summary:
      "Async FastAPI service generating AI summaries, quizzes, and 7-day study plans via OpenRouter LLM API, featuring JWT refresh-token rotation, Redis response caching, and VPS CI/CD deployment.",
    description: [
      "StudyMate is an AI-powered learning assistant backend that generates structured topic summaries, interactive 5-question multiple-choice quizzes, and 7-day study plans by integrating OpenRouter's LLM API asynchronously via `httpx`.",
      "It implements hardened authentication (JWT with bcrypt hashing, email verification, password reset, refresh-token rotation, and global session revocation on password change) alongside Redis LLM caching with fail-fast startup checks.",
    ],
    highlights: [
      "Built an async FastAPI service offering AI-generated summaries, quizzes, and study plans, integrating OpenRouter's LLM API via httpx.",
      "Implemented JWT-based authentication with bcrypt password hashing, email verification, password reset, and refresh-token rotation.",
      "Added Redis-backed rate limiting and brute-force protection, plus global session revocation on password change.",
      "Modeled the data layer with async SQLAlchemy and Alembic, including pagination and per-user data isolation.",
      "Cached LLM responses in Redis to cut down on redundant API calls, with a fail-fast startup check when the cache dependency is unavailable.",
      "Tested the service with an async Pytest suite using mocked external API calls; deployed via a GitHub Actions pipeline with Ruff linting and SSH-based VPS deployment.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Redis",
      "Docker",
      "OAuth2",
      "Pytest",
    ],
    links: [
      { label: "Source (Learnova)", href: `${GH}/Learnova`, kind: "source" },
      { label: "StudyMate API", href: `${GH}/StudyMate`, kind: "source" },
    ],
    screenshots: [
      "/images/projects/StudyMate/01-hero.webp",
      "/images/projects/StudyMate/02-endpoints.webp",
      "/images/projects/StudyMate/03-architecture.webp",
    ],
  },
  {
    id: "titan",
    slug: "titan",
    title: "Titan",
    tagline: "Digital Gaming Store & Esports Platform",
    kind: "Full-stack Platform",
    category: "backend",
    year: "2026",
    period: "2026",
    status: "Live",
    accent: "#f59e0b",
    rtl: true,
    thumbnail: "/images/projects/Titan/01-hero.webp",
    summary:
      "Persian gaming platform with a digital-goods store, esports tournaments, team management, and player dashboard powered by Django 5.2, DRF, PostgreSQL, and Next.js 16.",
    description: [
      "Titan is a Persian gaming and esports platform combining a digital-goods marketplace, tournament brackets, team rosters, and a real-time player dashboard.",
      "The backend is built with Python 3.13, Django 5.2, and Django REST Framework with SimpleJWT mobile OTP authentication, encrypted credential fields (`cryptography.fernet`), and OpenAPI schema generation (`drf-spectacular`), serving a Next.js 16 + React 19 RTL frontend.",
    ],
    highlights: [
      "Engineered a RESTful API in Django 5.2 & DRF for digital goods, esports tournaments, team rosters, and wallet transactions.",
      "Implemented mobile OTP authentication with SimpleJWT, automatic token refresh, and Fernet field-level encryption for sensitive game account credentials.",
      "Built a Persian RTL storefront and player dashboard with Next.js 16, Jalali date formatting, and interactive OpenAPI/Swagger documentation.",
      "Containerized PostgreSQL and API services with Docker Compose and automated database seeding for reproducible environments.",
    ],
    stack: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "SimpleJWT",
      "Next.js",
      "TypeScript",
      "Docker",
    ],
    links: [
      { label: "Live Storefront", href: "https://titan-front.vercel.app", kind: "live" },
      { label: "Backend Repo", href: `${GH}/titan-backend`, kind: "source" },
    ],
    screenshots: [
      "/images/projects/Titan/01-hero.webp",
      "/images/projects/Titan/02-api.webp",
    ],
  },
  {
    id: "visika",
    slug: "visika",
    title: "Visika",
    tagline: "B2B Food Marketplace Infrastructure",
    kind: "Marketplace API",
    category: "backend",
    year: "2026",
    period: "2026",
    status: "Live",
    accent: "#ec4899",
    thumbnail: "/images/projects/Visika/01-hero.webp",
    summary:
      "Production-ready B2B food marketplace backend built with Django, DRF, PostgreSQL, Redis, and Celery, paired with a modern Next.js + TypeScript client portal.",
    description: [
      "Visika provides the backend infrastructure and client portal for a B2B food wholesale marketplace, enabling business buyers and suppliers to manage catalogs, bulk orders, and fulfillment workflows.",
      "Built on Django REST Framework, PostgreSQL, Redis caching, and Celery background workers, with a responsive Next.js App Router frontend.",
    ],
    highlights: [
      "Designed scalable B2B catalog, bulk ordering, and supplier fulfillment APIs using Django REST Framework and PostgreSQL.",
      "Integrated Redis caching and Celery task queues for asynchronous order processing and notification workflows.",
      "Paired with a typed Next.js + Tailwind CSS v4 client application deployed on Vercel.",
    ],
    stack: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Next.js",
      "TypeScript",
    ],
    links: [
      { label: "Visit Client", href: "https://visika-frontend.vercel.app", kind: "live" },
      { label: "Backend Source", href: `${GH}/visika_back`, kind: "source" },
    ],
    screenshots: [
      "/images/projects/Visika/01-hero.webp",
      "/images/projects/Visika/02-architecture.webp",
    ],
  },
  {
    id: "portfolio",
    slug: "macos-portfolio",
    title: "macOS Portfolio",
    tagline: "This site: an interactive desktop resume",
    kind: "Personal site",
    category: "open-source",
    year: "2026",
    period: "2026",
    status: "Live",
    accent: "#0a84ff",
    thumbnail: "/images/projects/Portfolio/desktop.webp",
    summary:
      "The site you're exploring right now. A macOS desktop on large screens and an iOS home screen on phones, with a zsh terminal, Spotlight search, Finder, and printable resume.",
    description: [
      "Instead of a static scrolling page, this portfolio is an interactive operating system. On desktop you get a menu bar, dock, and draggable windows; on a phone the same apps open from an iOS-style home screen.",
      "Every app — Projects, Notes, Terminal, Finder, VS Code, Contacts, and Resume — reads from a single source of truth so my resume data, projects, and virtual filesystem never drift apart.",
    ],
    highlights: [
      "Window manager with drag, resize, edge tiling, Mission Control, minimize, zoom, and keyboard shortcuts.",
      "Spotlight search (⌘K) across apps, backend projects, notes, and quick actions.",
      "Interactive zsh-like terminal over a virtual filesystem (`ls`, `cd eventra`, `cat README.md`, `grep`, `neofetch`, `hire`).",
      "Bilingual English and Persian (RTL, Jalali calendar) with live Tehran weather and GitHub activity widgets.",
    ],
    stack: ["React 19", "Vite", "Tailwind CSS 4", "GSAP", "Zustand"],
    links: [
      { label: "Live site", href: "https://taha-nasrollahi.vercel.app", kind: "live" },
      { label: "Source", href: `${GH}/resume`, kind: "source" },
    ],
    screenshots: [
      "/images/projects/Portfolio/desktop.webp",
      "/images/projects/Portfolio/projects.webp",
      "/images/projects/Portfolio/notes.webp",
      "/images/projects/Portfolio/mobile.webp",
    ],
  },
];

// Additional backend microservices & tools on GitHub.
export const archive = [
  {
    id: "kelaasor-streaming",
    title: "Kelaasor Video Streaming",
    year: "2026",
    description:
      "Independent FastAPI & Celery microservice for heavy FFmpeg/FFprobe video transcoding and serving HLS (.m3u8 / .ts) video streams with webhook callbacks.",
    stack: ["Python", "FastAPI", "Celery", "FFmpeg", "Redis", "HLS"],
    live: `${GH}/kelaasor_video_streaming`,
    source: `${GH}/kelaasor_video_streaming`,
  },
  {
    id: "the-corridor",
    title: "The Corridor Bot",
    year: "2026",
    description:
      "Serverless webhook-based anonymous Telegram bot built with aiogram and Upstash Redis for persistent multi-step FSM state on Vercel.",
    stack: ["Python", "aiogram", "Redis", "Webhooks", "Vercel"],
    live: "https://vercel-inc-bot.vercel.app",
    source: `${GH}/TheCorridor`,
  },
  {
    id: "kelaasor-bootcamp-projects",
    title: "Django REST Bootcamp Suite",
    year: "2025",
    description:
      "Collection of backend services built during the Kelaasor Python-Django Bootcamp, including task management, stock exchange, and digital library APIs.",
    stack: ["Python", "Django", "DRF", "PostgreSQL", "Docker"],
    live: `${GH}?tab=repositories`,
    source: `${GH}/kelaasor_task_manager`,
  },
];

// Early practice repositories kept in the Trash.
export const trashedProjects = [
  { name: "JokeMoke", year: "2025", href: `${GH}/JokeMoke` },
  { name: "BlazorFullStackCrud", year: "2025", href: `${GH}/BlazorFullStackCrud` },
  { name: "SocialApi", year: "2025", href: `${GH}/SocialApi` },
  { name: "LaravelNotes", year: "2025", href: `${GH}/LaravelNotes` },
];

export const getProject = (id) => projects.find((p) => p.id === id);
