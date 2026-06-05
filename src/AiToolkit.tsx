import { useEffect, useState } from 'react';
import { ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession, AiTool } from './lib/auth';

const AiToolkit = () => {
  const [tools, setTools] = useState<AiTool[]>([]);

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setTools(session.aiToolKit);
    }
  }, []);

  return (
    <PageShell
      title="AI Tool Kit"
      description="Discover the AI tools and model resources you can use to accelerate your training and practical projects."
    >
      <SEO
        title="AI Tool Kit - SARMAK Learning Portal"
        description="Access the collection of AI tools, prompt libraries, and model resources provided for your training program."
        keywords="AI toolkit, AI tools, SARMAK AI resources"
      />

      <div className="grid gap-8 xl:grid-cols-[1.45fr_0.95fr]">
        <div className="space-y-6">
          {tools.length > 0 ? (
            tools.map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl transition hover:border-gold/30"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-3xl bg-gold/10 p-3 text-gold">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="text-xl font-semibold text-white">{tool.title}</h2>
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/70">Tool</span>
                    </div>
                    <p className="mt-3 text-white/70">{tool.description}</p>
                    <p className="mt-5 inline-flex items-center gap-2 text-gold hover:text-white">
                      Open AI tool
                      <ArrowRight className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/70">No AI toolkit resources are available yet. Login to unlock tools for your project work.</p>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">AI resources</span>
            <h3 className="mt-3 text-2xl font-semibold">Built for your projects</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Use these AI tools to speed up code reviews, build automation, and manage prompt-driven workflows for your assignments.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Training tip</p>
            <p className="mt-4 leading-relaxed">
              Experiment with the prompt library and AI pair programming tools to make your project development faster and more reliable.
            </p>
            <Link to="/course-details" className="mt-6 inline-flex items-center gap-2 text-gold hover:text-white transition-colors">
              Review tool guidance
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default AiToolkit;
