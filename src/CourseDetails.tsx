import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import PageShell from './components/PageShell';

function CourseDetailsSection() {
  return (
    <section id="course-details" className="py-20 bg-[#0d0e10] border-t border-white/10 mt-8">
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
    <PageShell
      title="Full Course Details"
      description="Explore the full 4-week training path, hands-on modules, and learning outcomes for the SARMAK program."
    >
      <section className="pt-10 pb-8">
        <div className="max-w-6xl mx-auto px-6 text-center xl:text-left">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-[#1c1d1b] font-bold uppercase tracking-[0.25em]">
            <Sparkles className="w-5 h-5" /> Course Details
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Full 4-Week Course Breakdown</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto xl:mx-0">
            Explore the complete weekly program, daily topics, and hands-on projects designed for college graduates ready to launch an IT career.
          </p>
        </div>
      </section>

      <CourseDetailsSection />

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6 text-center xl:text-left">
          <Link
            to="/dashboard"
            className="btn-outline inline-flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5" /> Go to Dashboard
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
