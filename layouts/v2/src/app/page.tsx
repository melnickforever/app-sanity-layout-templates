import Link from "next/link";

const stats = [
	{ value: "8+", label: "Years Experience" },
	{ value: "50+", label: "Projects Delivered" },
	{ value: "20+", label: "Team Members Led" },
	{ value: "99%", label: "Client Satisfaction" },
];

const services = [
	{
		icon: (
			<svg
				className="h-8 w-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>
			</svg>
		),
		title: "Full-Stack Development",
		description:
			"Building robust web applications with modern frameworks like React, Next.js, Node.js, and cloud-native architectures.",
	},
	{
		icon: (
			<svg
				className="h-8 w-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
		),
		title: "Technical Leadership",
		description:
			"Leading cross-functional engineering teams, setting technical direction, and mentoring developers to reach their full potential.",
	},
	{
		icon: (
			<svg
				className="h-8 w-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
				/>
			</svg>
		),
		title: "Architecture & DevOps",
		description:
			"Designing scalable system architectures, CI/CD pipelines, and cloud infrastructure on AWS, GCP, and Azure.",
	},
];

const featuredProjects = [
	{
		title: "E-Commerce Platform",
		description:
			"A high-performance, microservices-based e-commerce platform serving 100K+ daily users.",
		tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
	},
	{
		title: "Real-Time Analytics Dashboard",
		description:
			"Live data visualization dashboard for monitoring key business metrics with sub-second updates.",
		tags: ["React", "D3.js", "WebSocket", "Redis"],
	},
	{
		title: "Team Collaboration Tool",
		description:
			"Internal productivity suite used by 500+ engineers across multiple offices worldwide.",
		tags: ["TypeScript", "GraphQL", "Docker", "K8s"],
	},
];

export default function HomePage() {
	return (
		<>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-secondary via-slate-800 to-secondary">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary blur-3xl" />
					<div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent blur-3xl" />
				</div>
				<div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
					<div className="max-w-2xl">
						<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-light">
							Software Engineer &amp; Team Lead
						</p>
						<h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
							Building products that{" "}
							<span className="text-accent">scale</span> and teams that{" "}
							<span className="text-accent">thrive</span>.
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
							I&apos;m Dmytro Melnyk — a passionate software engineer with 8+
							years of experience crafting elegant, performant applications and
							leading engineering teams to deliver exceptional results.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<Link
								href="/portfolio"
								className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark"
							>
								View My Work
								<svg
									className="ml-2 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</Link>
							<Link
								href="/contact"
								className="inline-flex items-center rounded-lg border border-gray-500 px-6 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent"
							>
								Contact Me
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="border-b border-card-border bg-white">
				<div className="mx-auto max-w-6xl px-6 py-12">
					<div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
						{stats.map((stat) => (
							<div key={stat.label}>
								<p className="text-3xl font-bold text-primary md:text-4xl">
									{stat.value}
								</p>
								<p className="mt-1 text-sm text-muted">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services */}
			<section className="bg-section-alt">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="mb-12 text-center">
						<p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
							What I Do
						</p>
						<h2 className="text-3xl font-bold text-secondary md:text-4xl">
							Expertise &amp; Services
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{services.map((service) => (
							<div
								key={service.title}
								className="group rounded-xl border border-card-border bg-card-bg p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
							>
								<div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
									{service.icon}
								</div>
								<h3 className="mb-2 text-lg font-semibold text-secondary">
									{service.title}
								</h3>
								<p className="leading-relaxed text-sm text-muted">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="bg-white">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="mb-12 text-center">
						<p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
							Featured Work
						</p>
						<h2 className="text-3xl font-bold text-secondary md:text-4xl">
							Recent Projects
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{featuredProjects.map((project) => (
							<div
								key={project.title}
								className="group overflow-hidden rounded-xl border border-card-border transition-all hover:-translate-y-1 hover:shadow-lg"
							>
								<div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
									<svg
										className="h-16 w-16 text-primary/40"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1}
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
									</svg>
								</div>
								<div className="p-6">
									<h3 className="group-hover:text-primary mb-2 text-lg font-semibold text-secondary transition-colors">
										{project.title}
									</h3>
									<p className="mt-2 leading-relaxed text-sm text-muted">
										{project.description}
									</p>
									<div className="mt-4 flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="mt-10 text-center">
						<Link
							href="/portfolio"
							className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
						>
							View All Projects
							<svg
								className="ml-1 h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-gradient-to-r from-primary to-primary-dark">
				<div className="mx-auto max-w-4xl px-6 py-16 text-center">
					<h2 className="text-3xl font-bold text-white md:text-4xl">
						Let&apos;s Build Something Great Together
					</h2>
					<p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
						Whether you need a technical co-founder, a team lead, or a senior
						engineer — I&apos;d love to hear about your project.
					</p>
					<Link
						href="/contact"
						className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-gray-100"
					>
						Start a Conversation
					</Link>
				</div>
			</section>
		</>
	);
}
