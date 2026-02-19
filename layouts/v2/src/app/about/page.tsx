import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Dmytro Melnyk",
  description:
    "Learn more about Dmytro Melnyk — Software Engineer & Team Lead with 8+ years of experience.",
};

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "D3.js", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "GraphQL", "REST"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "Leadership", items: ["Agile/Scrum", "Code Review", "Mentoring", "Architecture Design", "Hiring"] },
];

const experience = [
  {
    role: "Senior Software Engineer & Team Lead",
    company: "TechCorp International",
    period: "2022 — Present",
    description:
      "Leading a team of 12 engineers building a next-generation e-commerce platform. Architected the migration from a monolith to microservices, reducing deployment time by 80% and improving system reliability to 99.9% uptime.",
  },
  {
    role: "Software Engineer",
    company: "InnovateLab",
    period: "2019 — 2022",
    description:
      "Developed real-time data analytics and collaboration tools used by Fortune 500 clients. Championed adoption of TypeScript and GraphQL across the engineering org.",
  },
  {
    role: "Junior Software Engineer",
    company: "StartupHub",
    period: "2017 — 2019",
    description:
      "Built MVPs for early-stage startups. Delivered 10+ projects across web and mobile, learning to ship fast and iterate based on user feedback.",
  },
];

const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "National Technical University",
    period: "2015 — 2017",
  },
  {
    degree: "B.Sc. Software Engineering",
    institution: "National Technical University",
    period: "2011 — 2015",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-widest mb-2">
            About Me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Dmytro Melnyk
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Software Engineer &amp; Team Lead passionate about building
            impactful products and empowering engineering teams.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Avatar placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-primary/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-secondary">
                Hello! I&apos;m Dmytro.
              </h2>
              <p className="text-muted leading-relaxed">
                I&apos;m a software engineer and team lead with over 8 years of
                experience in the tech industry. I specialize in building
                high-performance web applications and leading distributed
                engineering teams.
              </p>
              <p className="text-muted leading-relaxed">
                Throughout my career, I&apos;ve worked on everything from
                early-stage startup MVPs to enterprise-scale platforms serving
                millions of users. I believe that great software is built by
                empowered teams with clear direction and strong engineering
                culture.
              </p>
              <p className="text-muted leading-relaxed">
                When I&apos;m not coding or mentoring, you&apos;ll find me
                exploring new technologies, contributing to open-source projects,
                or hiking in the mountains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-section-alt">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
              Technical Skills
            </p>
            <h2 className="text-3xl font-bold text-secondary">
              Tools &amp; Technologies
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-card-bg rounded-xl border border-card-border p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-section-alt text-secondary font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
              Career Path
            </p>
            <h2 className="text-3xl font-bold text-secondary">
              Work Experience
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((job, i) => (
              <div
                key={job.role}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-primary after:absolute after:left-[5px] after:top-5 after:w-0.5 after:bg-card-border"
                style={{
                  ...(i < experience.length - 1
                    ? { paddingBottom: "0" }
                    : {}),
                }}
              >
                <div
                  className={`${
                    i < experience.length - 1
                      ? "after:h-full"
                      : ""
                  }`}
                >
                  <span className="text-xs font-medium text-muted">
                    {job.period}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-secondary">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {job.company}
                  </p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-section-alt">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
              Education
            </p>
            <h2 className="text-3xl font-bold text-secondary">
              Academic Background
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-card-bg rounded-xl border border-card-border p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5l4 2.5 4-2.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted">{edu.institution}</p>
                  <p className="text-xs text-muted mt-1">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

