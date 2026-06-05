import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Laptop2, ArrowRight } from 'lucide-react';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession, ToolLink } from './lib/auth';

const Tools = () => {
  const [tools, setTools] = useState<ToolLink[]>([]);

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setTools(session.tools);
    }
  }, []);

  return (
    <PageShell
      title="Toolbox & Resources"
      description="Launch the training portals, repository, and reference tools you need to complete the accelerator program."
    >
      <SEO
        title="Training Tools - SARMAK Learning Portal"
        description="Access the toolbox and learning resources available for the SARMAK training program."
        keywords="training tools, learning toolbox, SARMAK resources"
      />

      <div className="grid gap-8 xl:grid-cols-[1.5fr_0.8fr]">
        <div className="space-y-8">
          {tools.length > 0 ? (
            tools.map((tool) => (
              <div key={tool.href} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="rounded-3xl bg-gold/10 p-3 text-gold">
                    <Laptop2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="text-xl font-semibold text-white">{tool.label}</h2>
                      <a
                        href={tool.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/70 hover:bg-gold/10"
                      >
                        Open
                      </a>
                    </div>
                    <p className="mt-3 text-white/70">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/70">The toolbox is empty until you login and join the SARMAK training program.</p>
              <Link to="/login" className="mt-6 inline-flex items-center gap-2 btn-outline">
                Login to access tools
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">Toolbox</span>
            <h3 className="mt-3 text-2xl font-semibold">Your accelerator workspace</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Use these portals for course content, project repositories, documentation, and session recordings.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Best practice</p>
            <p className="mt-4 leading-relaxed">
              Bookmark the repository and documentation links to quickly return to materials during workshops and assignments.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default Tools;
