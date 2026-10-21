// VS Code window content. Files are plain strings; the editor highlights them.

import { profile, skills, socials, experience, educationList } from "./profile";
import { projects } from "./projects";

export const FILE_TREE = [
  {
    name: "taha-portfolio",
    type: "folder",
    open: true,
    children: [
      {
        name: "src",
        type: "folder",
        open: true,
        children: [
          { name: "about.ts", type: "file", lang: "ts" },
          { name: "skills.ts", type: "file", lang: "ts" },
          { name: "projects.ts", type: "file", lang: "ts" },
          { name: "experience.ts", type: "file", lang: "ts" },
          { name: "contact.ts", type: "file", lang: "ts" },
        ],
      },
      { name: "README.md", type: "file", lang: "md" },
      { name: "package.json", type: "file", lang: "json" },
    ],
  },
];

const q = (s) => JSON.stringify(s);

export const FILE_CONTENTS = {
  "about.ts": {
    lang: "ts",
    code: `const BackendDeveloper = () => ({
  name: ${q(profile.name)},
  role: ${q(profile.role)},
  location: ${q(profile.location)},
  education: ${q(profile.education)},
  coreStack: ["Python", "Django", "DRF", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker"],
  available: true,
  architecture: "clean, event-driven & async",
});

// Building scalable APIs, distributed task queues,
// and real-time AI-powered backend systems.

export default BackendDeveloper;`,
  },
  "skills.ts": {
    lang: "ts",
    code: `type Category = ${skills.map((s) => q(s.category)).join(" | ")};

export const skills: Record<Category, string[]> = {
${skills.map((s) => `  ${q(s.category)}: [${s.items.map(q).join(", ")}],`).join("\n")}
};`,
  },
  "projects.ts": {
    lang: "ts",
    code: `interface Project {
  name: string;
  period: string;
  stack: string[];
  status: "Live" | "Open source";
}

export const projects: Project[] = [
${projects
  .map(
    (p) => `  {
    name: ${q(p.title)},
    period: ${q(p.period ?? p.year)},
    stack: [${p.stack.slice(0, 5).map(q).join(", ")}],
    status: ${q(p.status)},
  },`,
  )
  .join("\n")}
];`,
  },
  "experience.ts": {
    lang: "ts",
    code: `export const experience = [
${experience
  .map(
    (e) => `  {
    role: ${q(e.role)},
    company: ${q(e.company)},
    period: ${q(e.period)},
    location: ${q(e.location)},
  },`,
  )
  .join("\n")}
];

export const education = [
${educationList
  .map(
    (ed) => `  {
    degree: ${q(ed.degree)},
    school: ${q(ed.school)},
    period: ${q(ed.period)},
  },`,
  )
  .join("\n")}
];`,
  },
  "contact.ts": {
    lang: "ts",
    code: `export const contact = {
${socials.map((s) => `  ${s.id}: ${q(s.href.replace("mailto:", ""))},`).join("\n")}
  phone: ${q(profile.phoneFormatted)},
  openTo: "backend internships & junior roles",
};

// Fastest reply: email or LinkedIn.`,
  },
  "README.md": {
    lang: "md",
    code: `# Hey, I'm ${profile.name}

${profile.headline}.

## Featured Projects
- Eventra: AI-powered RSS & webpage monitoring (FastAPI, Celery, RabbitMQ, Redis, Groq LLaMA 3.3)
- Kelaasor: Bootcamp management platform (Django, DRF, PostgreSQL, Celery, BNPL state machine)
- Briefly: Async meeting transcription & summarization (FastAPI, RabbitMQ, Celery, Whisper & LLaMA 3.3)
- StudyMate: AI study assistant API (FastAPI, SQLAlchemy, Redis, OAuth2/JWT, GitHub Actions CI/CD)

## Stack
- Python / Django / DRF / FastAPI / SQLAlchemy
- PostgreSQL / Redis / RabbitMQ / Celery / Alembic
- Docker / GitHub Actions CI/CD / Pytest

## Get in touch
[Email](mailto:${profile.email})`,
  },
  "package.json": {
    lang: "json",
    code: `{
  "name": "taha-nasrollahi-portfolio",
  "author": ${q(profile.name)},
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "gsap": "^3.14.2",
    "react": "^19.2.0",
    "tailwindcss": "^4.1.18",
    "zustand": "^5.0.10"
  }
}`,
  },
};

export const TERMINAL_LINES = [
  { type: "dir", text: "Eventra on  main" },
  { type: "cmd", text: "pytest -v && docker compose up -d" },
  { type: "info", text: "" },
  { type: "success", text: "  ✓ 24 passed in 1.42s (async SQLAlchemy + Redis + RabbitMQ)" },
  { type: "info", text: "" },
  { type: "success", text: "  ➜  FastAPI:   http://localhost:8000/docs" },
  { type: "info", text: "  ➜  Workers:   celery@eventra ready (queues: poll, alert, digest)" },
  { type: "info", text: "" },
  { type: "dir", text: "taha-portfolio on  main" },
  { type: "cmd", text: "git log --oneline -5" },
  { type: "info", text: "8f4a2d1 feat(eventra): add RabbitMQ DLQ & Prometheus metrics" },
  { type: "info", text: "5c91e0b feat(kelaasor): BNPL multi-installment state machine" },
  { type: "info", text: "3a70d44 feat(briefly): split audio & AI inference Celery queues" },
  { type: "info", text: "1e82b90 feat(studymate): Redis LLM cache & JWT token rotation" },
  { type: "info", text: "09d4c12 feat(portfolio): macOS desktop resume for Taha Nasrollahi" },
];
