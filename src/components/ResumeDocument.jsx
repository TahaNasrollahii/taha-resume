import {
  courses,
  educationList,
  experience,
  profile,
  projects,
  skills,
  socials,
  spokenLanguages,
} from "#constants";

// The resume, as a document. Rendered in the Resume window and as the
// print/PDF version. Mirrors TahaNasrollahi.pdf faithfully.
const RESUME_PROJECTS = ["eventra", "kelaasor", "briefly", "studymate"];

const ResumeDocument = () => {
  const items = RESUME_PROJECTS.map((id) => projects.find((p) => p.id === id)).filter(Boolean);
  const github = socials.find((s) => s.id === "github");
  const linkedin = socials.find((s) => s.id === "linkedin");

  return (
    <div className="resume-doc">
      <div className="resume-head">
        <div>
          <h1>{profile.name}</h1>
          <p className="resume-role">{profile.resumeRole ?? profile.role}</p>
        </div>
        <ul className="resume-contact">
          <li>{profile.location}</li>
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <a href={profile.phoneHref}>{profile.phone}</a>
          </li>
          <li>
            <a href={linkedin.href} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/{linkedin.handle}
            </a>
          </li>
          <li>
            <a href={github.href} target="_blank" rel="noopener noreferrer">
              github.com/TahaNasrollahii
            </a>
          </li>
        </ul>
      </div>

      <section>
        <h2>Profile Summary</h2>
        <p>{profile.resumeSummary}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <dl className="resume-skills">
          {skills.map((group) => (
            <div key={group.category}>
              <dt>{group.category}</dt>
              <dd>{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>Projects</h2>
        {items.map((p) => (
          <div key={p.id} className="resume-item">
            <div className="resume-item-head">
              <h3>
                {p.links?.[0] ? (
                  <a href={p.links[0].href} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}{" "}
                <span>— {p.tagline}</span>
              </h3>
              <span className="resume-year">{p.period ?? p.year}</span>
            </div>
            <p className="resume-stack">{p.stack.join(" · ")}</p>
            <ul>
              {p.highlights.map((h) => (
                <li key={h.slice(0, 28)}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Work Experience</h2>
        {experience.map((job) => (
          <div key={job.id} className="resume-item">
            <div className="resume-item-head">
              <h3>
                {job.role} <span>· {job.company}</span>
              </h3>
              <span className="resume-year">
                {job.period} · {job.location}
              </span>
            </div>
            <ul>
              {job.bullets.map((b) => (
                <li key={b.slice(0, 24)}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {educationList.map((ed) => (
          <div key={ed.id} className="resume-item">
            <div className="resume-item-head">
              <h3>
                {ed.degree} <span>· {ed.school}</span>
              </h3>
              <span className="resume-year">
                {ed.period} · {ed.location}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2>Courses</h2>
        {courses.map((c) => (
          <div key={c.id} className="resume-item">
            <div className="resume-item-head">
              <h3>
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.title}
                </a>{" "}
                <span>· {c.institute}</span>
              </h3>
              <span className="resume-year">
                {c.period} · {c.location}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2>Languages</h2>
        <dl className="resume-skills">
          {spokenLanguages.map((l) => (
            <div key={l.language}>
              <dt>{l.language}</dt>
              <dd>{l.level}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
};

export default ResumeDocument;
