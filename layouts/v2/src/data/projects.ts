export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  fullDescription: string;
  challenges: string[];
  results: string[];
  role: string;
  duration: string;
  teamSize: string;
}

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Full-Stack",
    description:
      "A high-performance, microservices-based e-commerce platform serving 100K+ daily active users with 99.9% uptime.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Redis"],
    year: "2025",
    fullDescription: `This enterprise-grade e-commerce platform was built to handle massive scale while maintaining optimal performance. The system serves over 100,000 daily active users with 99.9% uptime.

Key achievements include architecting a microservices infrastructure that reduced deployment times by 80% and improved overall system reliability. The platform processes thousands of transactions per hour with sub-second response times.

The tech stack leverages modern technologies including Next.js for the frontend, Node.js microservices for the backend, PostgreSQL for data persistence, Redis for caching, and AWS for cloud infrastructure.`,
    challenges: [
      "Migrating from monolithic architecture to microservices without downtime",
      "Implementing real-time inventory management across multiple warehouses",
      "Optimizing database queries to handle peak traffic loads",
      "Building a robust payment processing system with multiple provider integrations",
    ],
    results: [
      "Reduced page load times by 60% through optimization and caching strategies",
      "Achieved 99.9% uptime over 12 months of operation",
      "Processed over $10M in transactions in the first year",
      "Scaled to support 5x traffic growth without infrastructure changes",
    ],
    role: "Lead Engineer & Architect",
    duration: "12 months",
    teamSize: "8 engineers",
  },
  {
    slug: "real-time-analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    category: "Frontend",
    description:
      "Live data visualization dashboard for monitoring key business metrics with sub-second latency and customizable widgets.",
    tags: ["React", "D3.js", "WebSocket", "Redis", "Go"],
    year: "2024",
    fullDescription: `A sophisticated real-time analytics dashboard designed for business intelligence and operational monitoring. The system provides live data visualization with sub-second latency, enabling teams to make data-driven decisions in real-time.

Built with React and D3.js for rich, interactive visualizations, the dashboard connects to backend services via WebSockets to stream live data updates. Redis powers the pub/sub messaging layer, while Go microservices handle data processing and aggregation.

The platform features customizable widgets, drag-and-drop dashboard builders, and advanced filtering capabilities that allow users to drill down into their data.`,
    challenges: [
      "Maintaining smooth UI performance with thousands of data points updating per second",
      "Building a flexible widget system that supports various chart types and data sources",
      "Implementing real-time data synchronization across multiple connected clients",
      "Optimizing WebSocket connections for low-latency data streaming",
    ],
    results: [
      "Achieved sub-second data refresh rates for all dashboard widgets",
      "Reduced time-to-insight from hours to seconds for business analysts",
      "Supported 500+ concurrent users without performance degradation",
      "Increased user engagement by 200% compared to legacy reporting tools",
    ],
    role: "Senior Frontend Engineer",
    duration: "8 months",
    teamSize: "5 engineers",
  },
  {
    slug: "team-collaboration-suite",
    title: "Team Collaboration Suite",
    category: "Full-Stack",
    description:
      "Internal productivity tool used by 500+ engineers. Features real-time chat, task boards, and document collaboration.",
    tags: ["TypeScript", "GraphQL", "Docker", "Kubernetes"],
    year: "2024",
    fullDescription: `An enterprise collaboration platform designed to streamline communication and project management for distributed engineering teams. The suite combines real-time chat, Kanban-style task boards, and collaborative document editing in a unified interface.

Built entirely in TypeScript for type safety across frontend and backend, the system uses GraphQL for efficient data fetching and real-time subscriptions. The platform is containerized with Docker and orchestrated with Kubernetes for high availability and scalability.

The tool has become mission-critical for 500+ engineers across multiple offices worldwide, facilitating seamless collaboration and project tracking.`,
    challenges: [
      "Designing a unified API that efficiently serves multiple client types (web, desktop, mobile)",
      "Implementing operational transform algorithms for real-time document collaboration",
      "Building a notification system that scales across thousands of users",
      "Ensuring data consistency in a distributed, eventually-consistent architecture",
    ],
    results: [
      "Adopted by 500+ engineers within 6 months of launch",
      "Reduced average meeting time by 30% through better asynchronous communication",
      "Processed over 1 million messages and 50,000 tasks in the first year",
      "Achieved 99.95% uptime across global deployments",
    ],
    role: "Tech Lead",
    duration: "10 months",
    teamSize: "12 engineers",
  },
  {
    slug: "ci-cd-pipeline-framework",
    title: "CI/CD Pipeline Framework",
    category: "DevOps",
    description:
      "Custom build and deployment framework reducing release cycle from 2 weeks to 30 minutes across 12 microservices.",
    tags: ["GitHub Actions", "Terraform", "AWS", "Docker"],
    year: "2023",
    fullDescription: `A comprehensive CI/CD framework that revolutionized the deployment process for a microservices architecture. The system automates building, testing, and deploying 12+ microservices with minimal manual intervention.

Built on GitHub Actions for workflow orchestration, Terraform for infrastructure as code, and AWS for cloud resources, the framework provides a consistent deployment experience across all services. Docker containerization ensures environment parity from development through production.

The solution includes automated testing, security scanning, rollback capabilities, and deployment strategies like blue-green and canary deployments.`,
    challenges: [
      "Coordinating deployments across interdependent microservices",
      "Implementing zero-downtime deployments for critical services",
      "Building comprehensive test automation that catches issues before production",
      "Managing infrastructure state across multiple AWS accounts and regions",
    ],
    results: [
      "Reduced deployment time from 2 weeks to 30 minutes (96% improvement)",
      "Decreased production incidents by 70% through automated testing and validation",
      "Enabled 20+ deployments per day with full rollback capability",
      "Saved approximately 200 engineering hours per month",
    ],
    role: "DevOps Lead",
    duration: "6 months",
    teamSize: "3 engineers",
  },
  {
    slug: "payment-processing-gateway",
    title: "Payment Processing Gateway",
    category: "Backend",
    description:
      "PCI-DSS compliant payment gateway processing $2M+ in monthly transactions with multi-currency support.",
    tags: ["Node.js", "PostgreSQL", "Stripe", "AWS Lambda"],
    year: "2023",
    fullDescription: `A secure, PCI-DSS compliant payment processing gateway handling millions of dollars in transactions monthly. The system integrates with multiple payment providers including Stripe, PayPal, and regional payment methods.

Built on Node.js and AWS Lambda for serverless scalability, the gateway features automatic retry logic, webhook handling, fraud detection, and comprehensive audit logging. PostgreSQL ensures transactional consistency and maintains detailed payment records.

The platform supports multi-currency processing, automated currency conversion, and configurable payment workflows to accommodate different business models.`,
    challenges: [
      "Achieving PCI-DSS compliance while maintaining developer productivity",
      "Handling payment failures and network timeouts gracefully",
      "Implementing idempotency to prevent duplicate charges",
      "Building a reconciliation system to match payments across providers",
    ],
    results: [
      "Processed over $2M in monthly transactions with 99.99% success rate",
      "Achieved PCI-DSS Level 1 compliance certification",
      "Reduced payment processing fees by 15% through smart routing",
      "Detected and prevented $50K+ in fraudulent transactions in first 6 months",
    ],
    role: "Backend Engineer",
    duration: "9 months",
    teamSize: "4 engineers",
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "Mobile",
    description:
      "Cross-platform mobile banking application with biometric auth, real-time notifications, and budgeting tools.",
    tags: ["React Native", "TypeScript", "Firebase", "Plaid"],
    year: "2022",
    fullDescription: `A modern mobile banking application providing users with full control of their finances from their smartphones. The app features biometric authentication, real-time transaction notifications, budgeting tools, and instant money transfers.

Built with React Native for cross-platform compatibility, the app delivers native performance on both iOS and Android. Firebase handles authentication, push notifications, and real-time data sync, while Plaid integration enables seamless bank account connections.

The application prioritizes security and user experience, with features like Face ID/Touch ID, transaction categorization, spending insights, and goal tracking.`,
    challenges: [
      "Implementing bank-grade security in a mobile environment",
      "Ensuring consistent UX across iOS and Android platforms",
      "Optimizing battery usage for background transaction monitoring",
      "Handling offline scenarios gracefully with data synchronization",
    ],
    results: [
      "Achieved 4.8/5 star rating on both App Store and Google Play",
      "Acquired 50K+ active users within first year",
      "Reduced customer support inquiries by 40% through intuitive UX",
      "Passed security audits from three major financial institutions",
    ],
    role: "Mobile Engineer",
    duration: "14 months",
    teamSize: "6 engineers",
  },
];

