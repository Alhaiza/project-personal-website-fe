import type { UserProfile } from '../types/profile'

/**
 * Data profil utama dan riwayat rekayasa perangkat lunak Syarif Muhammad Alhaiza.
 * Berisi portfolio sistem enterprise berskala besar (agustus 2025 - november 2026),
 * mencakup sistem perbankan komersial, administrasi dana pensiun korporasi,
 * ekosistem rekrutmen global, analitik pasar modal, dan arsitektur CMS multi-tenant tetap NDA-Safe.
 */
export const profileData: UserProfile = {
  name: 'Syarif Muhammad Alhaiza',
  role: 'Fullstack & Backend Software Engineer',
  bio: 'Fullstack Software Engineer with mission-critical production experience architecting enterprise banking, corporate pension, and multi-tenant SaaS platforms. Demonstrated track record resolving high-traffic database bottlenecks, hardening event-driven Apache Kafka messaging pipelines, and engineering secure BaaS/RLS document workflows with zero data discrepancies.',
  avatar: 'img/avatar.jpg',
  skills: [
    // Backend & Infrastructure
    { name: 'PHP', icon: 'php', color: '#777BB4', category: 'backend' },
    { name: 'Laravel', icon: 'laravel', color: '#FF2D20', category: 'backend' },
    { name: 'Node.js', icon: 'nodedotjs', color: '#5FA04E', category: 'backend' },
    { name: 'Express JS', icon: 'express', color: '#000000', category: 'backend' },
    { name: 'Python', icon: 'python', color: '#3776AB', category: 'backend' },
    { name: 'Apache Kafka', icon: 'apachekafka', color: '#231F20', category: 'backend' },
    { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1', category: 'backend' },
    { name: 'MySQL', icon: 'mysql', color: '#4479A1', category: 'backend' },
    { name: 'Redis', icon: 'redis', color: '#FF4438', category: 'backend' },
    { name: 'Docker', icon: 'docker', color: '#2496ED', category: 'backend' },
    { name: 'Git', icon: 'git', color: '#F05032', category: 'backend' },

    // Frontend & Web UI
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6', category: 'frontend' },
    { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', category: 'frontend' },
    { name: 'Vue JS', icon: 'vuedotjs', color: '#4FC08D', category: 'frontend' },
    { name: 'Nuxt JS', icon: 'nuxt', color: '#00DC82', category: 'frontend' },
    { name: 'Angular', icon: 'angular', color: '#DD0031', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4', category: 'frontend' },
    { name: 'Bootstrap', icon: 'bootstrap', color: '#7952B3', category: 'frontend' },
    { name: 'Firebase', icon: 'firebase', color: '#FFCA28', category: 'frontend' },
    { name: 'Supabase', icon: 'supabase', color: '#3ECF8E', category: 'frontend' },
  ],
  projects: [
    {
      id: 1,
      title: 'Corporate Pension Fund Administration & Automation Platform',
      category: 'Enterprise Financial Platform',
      description:
        'Large-scale enterprise pension administration system managing thousands of active and retiring corporate participants. Automates bulk withdrawal claims, principal vs. investment return breakdowns, national tax compliance (PPh 21 progressive/final), digital advis/receipt issuing, and tamper-proof participant change-tracking audit trails.',
      highlights: [
        'Batch Withdrawal Breakdown: Engineered automated multi-tier bulk pension settlement without calculation mismatch.',
        'Tax Compliance Engine: Integrated automated tax calculation with ID TKU withholding tax compliance reporting.',
        'Audit Trail Engine: Developed strict change-tracking audit trails on sensitive participant records and bank accounts.',
        'High-Traffic Query Optimization: Eliminated N+1 query overheads in user permission resolvers, ensuring sub-second API latency.',
      ],
      tags: ['PHP 8', 'Laravel', 'Angular', 'TypeScript', 'PostgreSQL', 'MySQL', 'Audit Trail', 'REST API'],
      link: '#',
    },
    {
      id: 2,
      title: 'Tier-1 Commercial Bank Trustee & Custodial Management Platform',
      category: 'Corporate Banking & Custody System',
      description:
        'Mission-critical tier-1 banking platform governing corporate custody, bond issuance, fund administration, and investment instructions. Engineered high-throughput real-time cashflow settlement notifications, multi-account fund transfer balance integrity validation, file attachment sanitization, and institutional multi-tiered role governance.',
      highlights: [
        'Event-Driven Real-Time Cashflow: Integrated Apache Kafka consumers for instantaneous cash mutation dispatches to institutional clients.',
        'Zero-Loss Balance Validation: Enforced strict 100% allocation balance verification on complex fund transfer instructions.',
        'Security Attachment Sanitization: Built strict MIME-type validation and filename sanitization to safeguard corporate banking infrastructure.',
        'Institutional Role Governance: Hardened multi-tiered RBAC and corporate sysadmin authorization flows.',
      ],
      tags: ['Laravel', 'Apache Kafka', 'Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Redis', 'MySQL'],
      link: '#',
    },
    {
      id: 3,
      title: 'Global Talent & International Recruitment Ecosystem',
      category: 'Multinational SaaS Platform',
      description:
        'End-to-end recruitment ecosystem comprising Applicant Portal, Corporate Employer Portal, Admin Control Panel, and Centralized Backend. Facilitates overseas talent placement, legal visa document vaults with encrypted private access, manual financial invoice verification, and AI-powered multilingual job posting translations.',
      highlights: [
        'Secure BaaS Document Pipeline: Implemented encrypted legal applicant document storage utilizing Supabase RLS and timed signed URLs.',
        'Financial Invoice & Payment Verification: Developed manual candidate payment verification, official bank account ledger, and automated invoice recording.',
        'AI Multilingual Translation: Integrated automated multi-language translation services for simultaneous multinational job publications.',
        'Automated CV Builder: Streamlined candidate profile workflows and dynamic CV generation without rendering bottlenecks.',
      ],
      tags: ['Node.js', 'Express', 'Nuxt 3', 'Vue 3', 'PostgreSQL', 'Supabase RLS', 'Tailwind CSS', 'PrimeVue'],
      link: '#',
    },
    {
      id: 4,
      title: 'Capital Market Analytics & Mutual Fund Portfolio Rebalancing Platform',
      category: 'Financial Investment Intelligence',
      description:
        'Financial investment intelligence platform delivering investment manager performance evaluations, bond daily prices, Net Asset Value (NAV/AUM) trends, and portfolio rebalancing recommendation algorithms for retail and institutional investors.',
      highlights: [
        'National Market Data Feeder: Engineered ingestion pipelines to extract bond and fund data with robust null-safety and historical backfilling.',
        'Precision AUM Presentation: Standardized unit formatting and full-length numerical precision for Assets Under Management analysis.',
        'Rebalancing Algorithm Optimization: Hardened quantitative indicators and golden crossover conditions for investment strategies.',
        'Query Performance Tuning: Replaced heavy in-memory filtering with optimized database queries and pagination.',
      ],
      tags: ['PHP 8', 'Laravel', 'Python', 'Node.js', 'MySQL', 'Highcharts', 'REST API'],
      link: '#',
    },
    {
      id: 5,
      title: 'Dynamic Multi-Tenant CMS & Modern Web Portals Platform',
      category: 'Multi-Tenant Architecture & Modular UI Slicing',
      description:
        'Integrated multi-tenant content management platform enabling rapid deployment of corporate subsidiary portals (professional certification, HRIS service, and business networking) under a single shared codebase with isolated database tenants.',
      highlights: [
        'Optimistic Mutation Rollback: Built frontend resilience mechanisms restoring UI form states upon network or persistence failures.',
        'Strict Tenant Scoping: Isolated Firestore queries based on incoming domain hostname to guarantee zero data leakage between tenants.',
        'Modern Tailwind v4 Slicing: Engineered high-performance, responsive UI components using Atomic Design principles.',
        'Stateful Rich-Text Sync: Resolved bidirectional two-way binding synchronization in WYSIWYG editors and image upload previews.',
      ],
      tags: ['Vue 3', 'Nuxt 3', 'Tailwind CSS v4', 'Firebase Firestore', 'Firebase Auth', 'Atomic Design'],
      link: '#',
    },
    {
      id: 6,
      title: 'Informatics UNTAN Internship Management App',
      category: 'Institutional Academic Platform',
      description:
        'Web-based platform designed to streamline internship workflows for students, faculty, and company supervisors. Features online document submission and approvals, milestone tracking, and centralized communication containerized with Docker.',
      highlights: [
        'Modular Approval Workflows: Developed modular backend architecture with automated document approvals and audit tracking.',
        'Containerized Deployment: Containerized application stack using Docker and Docker Compose for deployment consistency.',
      ],
      tags: ['Laravel', 'PHP', 'JavaScript', 'Bootstrap CSS', 'Docker', 'Git'],
      link: '#',
    },
    {
      id: 7,
      title: 'Informatics UNTAN Laboratory Inventory App with QR Code',
      category: 'Asset Management System',
      description:
        'Web-based inventory tracking application featuring automated QR code tagging for lab assets, Role-Based Access Control (Admin & Superadmin), and enhanced data transparency.',
      highlights: [
        'QR Code Tagging Workflows: Automated physical lab asset identification and tracking workflows via scanning.',
        'Multi-Tier Access Governance: Implemented fine-grained roles separating Admin and Superadmin permissions.',
      ],
      tags: ['PHP', 'Laravel', 'MySQL', 'QR Code', 'JavaScript'],
      link: '#',
    },
  ],
  experiences: [
    {
      id: 1,
      company: 'PT Dynamic Talenta Navigator',
      positions: [
        {
          id: 101,
          role: 'Fullstack Software Engineer',
          employmentType: 'Contract',
          period: 'Aug 2026 - Nov 2026',
          description:
            'Architected dynamic multi-tenant recruitment and enterprise CMS portals using Nuxt 3, Tailwind v4, and Laravel. Built automated multilingual CV generation and encrypted document storage with Supabase RLS and signed URLs. Implemented financial verification modules, manual bank reconciliation, and optimistic UI mutations with automated persistence rollback.',
          technologies: [
            'Vue 3',
            'Nuxt 3',
            'TypeScript',
            'Tailwind CSS v4',
            'Node.js',
            'Supabase RLS',
            'Firebase',
            'Docker',
          ],
        },
        {
          id: 102,
          role: 'Backend Software Engineer',
          employmentType: 'Contract',
          period: 'Aug 2025 - Aug 2026',
          description:
            'Engineered high-throughput financial and pension platforms across mission-critical production releases. Eliminated persistent database N+1 bottlenecks, hardened Apache Kafka event-driven consumers with payload buffer pruning, developed bulk pension withdrawal engines with national tax compliance (PPh 21 progressive/final), and engineered quantitative mutual fund rebalancing algorithms.',
          technologies: [
            'Laravel',
            'PHP 8',
            'Apache Kafka',
            'PostgreSQL',
            'MySQL',
            'Redis',
            'Python',
            'REST API',
            'Docker',
            'Git',
          ],
        },
      ],
    },
    {
      id: 2,
      company: 'Jurusan Informatika Universitas Tanjungpura',
      role: 'Lead Software Developer (Capstone Project)',
      period: 'Nov 2024 - Jul 2025',
      description:
        'Architected and deployed an institutional internship management platform adopted for official departmental operations. Built automated document approval workflows, digital audit trails, and containerized deployment via Docker.',
      technologies: ['Laravel', 'PHP', 'Blade', 'Bootstrap', 'Docker', 'Git'],
    },
    {
      id: 3,
      company: 'PT. Inovasi Hijau Sangkabira',
      role: 'Full-Stack Web Developer Intern',
      period: 'Mar 2024 - May 2024',
      description:
        'Developed administrative dashboard CRUD modules and user personalization for Carbon Addons Academy using Laravel and PostgreSQL, maintaining clean code standards through Git version control.',
      technologies: ['Laravel', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'Git'],
    },
    {
      id: 4,
      company: 'Jurusan Informatika Universitas Tanjungpura',
      role: 'Web Developer Intern',
      period: 'Sep 2023 - Nov 2023',
      description:
        'Built an inventory tracking web application using PHP and MySQL with barcode scanning workflows and relational database schema design.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Git'],
    },
  ],
}
