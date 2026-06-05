import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession, ProgressStat } from './lib/auth';

const Progress = () => {
  const [completion, setCompletion] = useState<ProgressStat[]>([]);

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setCompletion(session.completion);
    }
  }, []);

  return (
    <PageShell
      title="Progress Tracker"
      description="Track your program completion, assessments, and skill growth across the accelerator curriculum."
    >
      <SEO
        title="Progress Tracker - SARMAK Learning Portal"
        description="Review your training progress, completed assessments, and advancement metrics in the SARMAK program."
        keywords="training progress, SARMAK learning progress, assessment tracker"
      />

      <div className="grid gap-8 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-8">
          {completion.length > 0 ? (
            completion.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{stat.label}</h2>
                    <p className="mt-3 text-white/70">{stat.description}</p>
                  </div>
                  <span className="rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">{stat.value}</span>
                </div>
                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gold" style={{ width: stat.value }} />
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/70">Complete the training profile and login to view your progress stats.</p>
              <Link to="/login" className="mt-6 inline-flex items-center gap-2 btn-outline">
                Login to unlock progress
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">Progress Insight</span>
            <h3 className="mt-3 text-2xl font-semibold">Every milestone counts</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Your accelerator progress shows readiness for interviews, real projects, and job placements while tracking your confidence across skills.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Focus area</p>
            <p className="mt-4 leading-relaxed">
              Keep pace with your program timeline and review materials before every assessment to improve your scores and project outcomes.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default Progress;
