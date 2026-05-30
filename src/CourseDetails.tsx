import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1c1d1b]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SARMAK"
            className="h-12 w-auto transition-transform duration-300 hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="text-xl font-bold tracking-wider">SARMAK <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-500">Learning Portal</span></span>
            <span className="block text-xs text-gold font-mono tracking-widest">INNOVATE. TRANSFORM. EXCEL.</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-sm text-white/80 hover:text-gold transition-colors">
            Back to Home
          </Link>
          <a href="https://sarmak.in" className="text-sm text-white/80 hover:text-gold transition-colors">
            SARMAK Main Site →
          </a>
        </div>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-black/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="https://sarmak.in" className="flex items-center gap-3 mb-6 inline-flex">
              <img src="/logo.png" alt="SARMAK" className="h-14 w-auto" />
              <div>
                <span className="text-2xl font-bold text-white tracking-wider block">SARMAK</span>
                <span className="text-xs text-gold font-mono tracking-widest">INNOVATE. TRANSFORM. EXCEL.</span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              SARMAK is a group of technology enthusiasts driven by passion and commitment to revolutionize businesses through innovative IT solutions and AI-powered services.
            </p>
            <div className="space-y-3 text-sm text-white/60">
              <a href="mailto:info@sarmak.in" className="flex items-center gap-3 hover:text-gold transition-colors">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold">@</span>
                info@sarmak.in
              </a>
              <a href="tel:+919764000745" className="flex items-center gap-3 hover:text-gold transition-colors">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold">📞</span>
                +91 97640 00745
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold">📍</span>
                Joyville, Meridian-1302, Hinjewadi, Pune MH 411057, India
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://sarmak.in" className="text-white/60 hover:text-gold transition-colors">Home</a></li>
              <li><a href="https://sarmak.in/about" className="text-white/60 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="https://sarmak.in/services/learning-with-sarmak" className="text-white/60 hover:text-gold transition-colors">Learning with SARMAK</a></li>
              <li><a href="https://sarmak.in/contact" className="text-white/60 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://sarmak.in/services/ai" className="text-white/60 hover:text-gold transition-colors">AI Solutions</a></li>
              <li><a href="https://sarmak.in/services/cloud" className="text-white/60 hover:text-gold transition-colors">Cloud Services</a></li>
              <li><a href="https://sarmak.in/services/database" className="text-white/60 hover:text-gold transition-colors">Database Services</a></li>
              <li><a href="https://sarmak.in/services/devops" className="text-white/60 hover:text-gold transition-colors">DevOps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://sarmak.in/blog" className="text-white/60 hover:text-gold transition-colors">Blog</a></li>
              <li><a href="https://sarmak.in/resources" className="text-white/60 hover:text-gold transition-colors">Resources</a></li>
              <li><a href="https://sarmak.in/faq" className="text-white/60 hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="https://sarmak.in/service-plans" className="text-white/60 hover:text-gold transition-colors">Service Plans</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} SARMAK. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="https://sarmak.in/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="https://sarmak.in/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/sarmak-solutions" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300">in</a>
              <a href="https://x.com/SarmakSolutions" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300">x</a>
              <a href="https://www.instagram.com/sarmaksolutions/" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#1c1d1b] transition-all duration-300">ig</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CourseDetailsSection() {
  return (
    <section id="course-details" className="py-20 bg-[#0d0e10] border-t border-white/10 mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-medium uppercase tracking-widest mb-2 block">4-Week Technology Foundation Program</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">4-Week Technology Foundation Program for College Graduates</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            This program is designed for fresh graduates who want a practical introduction to modern software engineering, infrastructure, databases, DevOps, and AI technologies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {[
            { label: 'Duration', value: '4 Weeks' },
            { label: 'Mode', value: 'Instructor-led + Hands-on Labs' },
            { label: 'Daily Time', value: '4–6 hours' },
            { label: 'Outcome', value: 'Industry-ready foundations' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-2">{item.label}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Program Goals</h3>
          <ul className="grid gap-3 text-white/80">
            {[
              'Understand relational and NoSQL databases',
              'Work confidently in Linux environments',
              'Write and execute SQL queries',
              'Understand DevOps workflows and CI/CD basics',
              'Learn cloud-native concepts',
              'Understand AI fundamentals and AI agents',
              'Build mini projects using learned technologies',
            ].map((goal) => (
              <li key={goal} className="rounded-3xl bg-[#111214] p-4">{goal}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          {[
            {
              title: 'Week 1 — Databases & Database Technologies',
              objective: 'Build foundational understanding of data storage systems, relational databases, and modern NoSQL technologies.',
              days: [
                {
                  label: 'Day 1 — Introduction to Databases',
                  topics: [
                    'What is a database?',
                    'DBMS vs RDBMS',
                    'Structured vs unstructured data',
                    'ACID properties',
                    'Transactions and concurrency',
                  ],
                  handsOn: ['Install MySQL Workbench', 'Install PostgreSQL', 'Create first database and tables'],
                },
                {
                  label: 'Day 2 — Relational Databases',
                  topics: [
                    'Tables, rows, columns',
                    'Primary key & foreign key',
                    'Relationships: One-to-One, One-to-Many, Many-to-Many',
                    'Normalization basics',
                  ],
                  handsOn: ['Design a Student Management schema'],
                },
                {
                  label: 'Day 3 — SQL Fundamentals',
                  topics: [
                    'CRUD operations',
                    'SELECT queries',
                    'WHERE, ORDER BY, GROUP BY',
                    'Aggregations',
                    'JOINs',
                  ],
                  handsOn: ['Write 25+ SQL queries'],
                },
                {
                  label: 'Day 4 — Advanced SQL Concepts',
                  topics: [
                    'Subqueries',
                    'Views',
                    'Stored procedures',
                    'Indexing',
                    'Transactions',
                  ],
                  handsOn: ['Optimize slow queries'],
                },
                {
                  label: 'Day 5 — NoSQL Databases',
                  topics: [
                    'Why NoSQL?',
                    'Types of NoSQL: Document DB, Key-Value, Columnar, Graph DB',
                  ],
                  technologies: ['MongoDB', 'Redis', 'Cassandra'],
                  handsOn: ['Store JSON documents in MongoDB'],
                },
                {
                  label: 'Day 6 — Database Project',
                  topics: ['Library Management System OR Online Store Database'],
                  handsOn: ['ER diagram', 'SQL scripts', 'CRUD queries'],
                },
              ],
            },
            {
              title: 'Week 2 — Linux & SQL Basics',
              objective: 'Learn Linux operating system fundamentals and practical SQL usage.',
              days: [
                {
                  label: 'Day 1 — Linux Fundamentals',
                  topics: ['What is Linux?', 'Linux distributions', 'File system structure', 'Shell basics'],
                  handsOn: ['Install Ubuntu', 'Practice terminal commands'],
                },
                {
                  label: 'Day 2 — Linux Commands',
                  topics: ['File operations', 'Permissions', 'Users and groups', 'Pipes and redirection'],
                  handsOn: ['Create shell-based workflows'],
                },
                {
                  label: 'Day 3 — Shell Scripting Basics',
                  topics: ['Variables', 'Loops', 'Conditions', 'Functions'],
                  handsOn: ['Write automation scripts'],
                },
                {
                  label: 'Day 4 — SQL Practice & Integration',
                  topics: ['Connecting applications to DB', 'Import/export data', 'Backup and restore'],
                  handsOn: ['Execute real-world queries', 'Generate reports'],
                },
                {
                  label: 'Day 5 — Linux Administration Basics',
                  topics: ['Process management', 'Package installation', 'Networking basics', 'SSH', 'Cron jobs'],
                  handsOn: ['Setup Linux server environment'],
                },
                {
                  label: 'Day 6 — Linux + SQL Project',
                  topics: ['Automated backup system', 'SQL report generation script'],
                  handsOn: ['Create a real automation project'],
                },
              ],
            },
            {
              title: 'Week 3 — DevOps Basics',
              objective: 'Understand modern software delivery pipelines and infrastructure automation.',
              days: [
                {
                  label: 'Day 1 — Introduction to DevOps',
                  topics: ['SDLC overview', 'Agile basics', 'DevOps lifecycle', 'CI/CD concepts'],
                  handsOn: ['Tools overview: Git, GitHub, Jenkins'],
                },
                {
                  label: 'Day 2 — Version Control with Git',
                  topics: ['Repositories', 'Branching', 'Merging', 'Pull requests'],
                  handsOn: ['git init', 'git clone', 'git commit', 'git push'],
                },
                {
                  label: 'Day 3 — CI/CD Basics',
                  topics: ['Continuous Integration', 'Continuous Deployment', 'Build pipelines'],
                  handsOn: ['Create simple Jenkins pipeline'],
                },
                {
                  label: 'Day 4 — Containers & Docker',
                  topics: ['What is containerization?', 'Docker architecture', 'Docker images & containers'],
                  handsOn: ['Build Docker images', 'Run applications in containers'],
                },
                {
                  label: 'Day 5 — Cloud & Kubernetes Basics',
                  topics: ['Cloud computing fundamentals', 'Introduction to Kubernetes', 'Pods and deployments'],
                  handsOn: ['Deploy sample containerized app'],
                },
                {
                  label: 'Day 6 — DevOps Project',
                  topics: ['GitHub → Jenkins → Docker CI/CD workflow'],
                  handsOn: ['Build a full pipeline project'],
                },
              ],
            },
            {
              title: 'Week 4 — AI Basics & AI Agents',
              objective: 'Introduce Artificial Intelligence, Generative AI, LLMs, and AI Agents.',
              days: [
                {
                  label: 'Day 1 — AI & Machine Learning Fundamentals',
                  topics: ['What is AI?', 'ML vs DL vs Generative AI', 'Supervised vs unsupervised learning', 'Neural networks basics'],
                  handsOn: ['Python + Jupyter Notebook overview'],
                },
                {
                  label: 'Day 2 — Introduction to Generative AI',
                  topics: ['What are LLMs?', 'Tokens and embeddings', 'Prompt engineering', 'AI use cases'],
                  handsOn: ['Explore OpenAI, Anthropic, Google platforms'],
                },
                {
                  label: 'Day 3 — AI Development Basics',
                  topics: ['APIs', 'Using AI models', 'Chatbots', 'Text generation'],
                  handsOn: ['Build simple chatbot using Python'],
                },
                {
                  label: 'Day 4 — AI Agents',
                  topics: ['What are AI agents?', 'Agent workflows', 'Memory and tools', 'Autonomous systems'],
                  handsOn: ['Create simple task automation agent'],
                },
                {
                  label: 'Day 5 — Responsible AI & Industry Trends',
                  topics: ['AI ethics', 'Hallucinations', 'Security concerns', 'Future of AI jobs'],
                  handsOn: ['Discuss AI in software engineering and productivity'],
                },
                {
                  label: 'Day 6 — Final Capstone Project',
                  topics: ['AI-powered FAQ chatbot', 'Database query assistant', 'DevOps monitoring bot', 'Multi-agent workflow system'],
                  handsOn: ['Present architecture, demo, GitHub repo, learning outcomes'],
                },
              ],
            },
          ].map((week, idx) => (
            <div key={idx} className="rounded-3xl border border-white/10 bg-[#111214] p-8">
              <h3 className="text-2xl font-bold text-white mb-3">{week.title}</h3>
              <p className="text-white/70 mb-6">{week.objective}</p>
              {week.days.map((day) => (
                <div key={day.label} className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{day.label}</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-2">Topics</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        {day.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-2">Hands-on</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        {day.handsOn.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                        {day.technologies && day.technologies.length > 0 && (
                          <li>
                            <span className="font-semibold">Technologies:</span> {day.technologies.join(', ')}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CourseDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1d1b] to-[#0d0e10] text-white overflow-hidden">
      <SiteNav />
      <main className="pt-32">
        <section className="pt-10 pb-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-[#1c1d1b] font-bold uppercase tracking-[0.25em]">
              <Sparkles className="w-5 h-5" /> Course Details
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Full 4-Week Course Breakdown</h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Explore the complete weekly program, daily topics, and hands-on projects designed for college graduates ready to launch an IT career.
            </p>
          </div>
        </section>

        <CourseDetailsSection />

        <section className="py-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Link
              to="/"
              className="btn-outline inline-flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5" /> Back to Home
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
