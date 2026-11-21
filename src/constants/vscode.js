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
    code: `const SoftwareEngineer = () => ({
  name: ${q(profile.name)},
  role: ${q(profile.role)},
  location: ${q(profile.location)},
  education: ${q(profile.education)},
  coreStack: [
    "Python",
    "Django",
    "FastAPI",
    "TypeScript",
    "NestJS",
    "Next.js 16",
    "PostgreSQL + pgvector",
    "Redis",
    "Docker",
  ],
  available: true,
  architecture: "spec-driven, event-driven & end-to-end tested",
});

// Shipping scalable backends, high-speed web platforms,
// Telegram Mini-Apps, and multi-tenant AI agent systems.

export default SoftwareEngineer;`,
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
  openTo: "custom platforms, consulting & software engineering roles",
};

// Fastest reply: Telegram, LinkedIn, or email.`,
  },
  "README.md": {
    lang: "md",
    code: `# Hey, I'm ${profile.name}

${profile.headline}.

## Featured Systems
- NimyChat: Multi-tenant AI Agent SaaS & WooCommerce bridge (NestJS, Next.js 16, pgvector, BullMQ)
- Demetra: Multilingual FA/EN/ES B2B agro-biotech store & dosage calculator (Next.js 16, Payload CMS 3)
- Titan: Omnichannel gaming store, esports hub & Telegram Mini-App (Django 5.2, Next.js 16, 385+ tests)
- Arama: 12-module encrypted local-first Persian Android app & serverless API (Kotlin, Compose, SQLCipher)
- Kelaasor: Bootcamp management & BNPL installment platform (Django 6, DRF, Celery, Redis)
- Eventra & Briefly: Async AI monitoring & audio intelligence pipelines (FastAPI, RabbitMQ, Groq LLMs)

## Get in touch
[Email](mailto:${profile.email}) · [Telegram](https://t.me/TahaNasrollahi)`,
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
  { type: "dir", text: "nimychat on  main" },
  { type: "cmd", text: "pnpm check && pytest -q" },
  { type: "info", text: "" },
  { type: "success", text: "  ✓ DI check, Vitest, Playwright E2E & 385 Pytest checks green" },
  { type: "info", text: "" },
  { type: "success", text: "  ➜  API:       http://localhost:3000 (NestJS + pgvector)" },
  { type: "info", text: "  ➜  Web/Bot:   Next.js 16 + Telegram Mini-App ready" },
  { type: "info", text: "" },
  { type: "dir", text: "taha-portfolio on  vercel-deploy" },
  { type: "cmd", text: "git log --oneline -5" },
  { type: "info", text: "a41c9e2 feat(nimychat): live browser voice & micro-USD floor ledger" },
  { type: "info", text: "7d30b18 feat(demetra): FA/EN/ES dosage calculator & TOTP Payload admin" },
  { type: "info", text: "5c91e0b feat(titan): sync Next.js storefront, Telegram Mini-App & SEO" },
  { type: "info", text: "3a70d44 feat(arama): SQLCipher Keystore encryption & outbox sync" },
  { type: "info", text: "09d4c12 feat(portfolio): macOS & iOS interactive portfolio" },
];
