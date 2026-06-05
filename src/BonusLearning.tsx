import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession, BonusResource } from './lib/auth';

const BonusLearning = () => {
  const [bonusItems, setBonusItems] = useState<BonusResource[]>([]);

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setBonusItems(session.bonusLearning);
    }
  }, []);

  return (
    <PageShell
      title="Bonus Learning"
      description="Explore extra learning modules, templates, and resources that go beyond the core training curriculum."
    >
      <SEO
        title="Bonus Learning - SARMAK Learning Portal"
        description="Access bonus guides, templates, and extra training resources curated to accelerate your skill growth."
        keywords="bonus learning, extra resources, training templates"
      />

      <div className="grid gap-8 xl:grid-cols-[1.45fr_0.95fr]">
        <div className="space-y-6">
          {bonusItems.length > 0 ? (
            bonusItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl transition hover:border-gold/30"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-3xl bg-gold/10 p-3 text-gold">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
                        {item.type.toUpperCase()}
                      </span>
                    </div>
                    <p className="mt-3 text-white/70">{item.description}</p>
                    <p className="mt-5 text-gold inline-flex items-center gap-2">
                      Open bonus resource
                      <ArrowRight className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/70">No bonus learning items are available yet. Check back after your next live session for new resources.</p>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">Extra growth</span>
            <h3 className="mt-3 text-2xl font-semibold">Expand your skills</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Bonus learning resources are designed to give you an edge and help you build stronger project outcomes faster.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Best use</p>
            <p className="mt-4 leading-relaxed">
              Use these materials for deeper practice, interview prep, and optimized workflows that support the main curriculum.
            </p>
            <Link to="/materials" className="mt-6 inline-flex items-center gap-2 text-gold hover:text-white transition-colors">
              Back to materials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default BonusLearning;
