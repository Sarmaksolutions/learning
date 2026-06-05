import { useEffect, useState } from 'react';
import { ArrowRight, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession, LiveSession } from './lib/auth';

const LiveSessions = () => {
  const [sessions, setSessions] = useState<LiveSession[]>([]);

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setSessions(session.liveSessions);
    }
  }, []);

  return (
    <PageShell
      title="Live Sessions"
      description="Join your upcoming live labs, office hours, and workshops right from the SARMAK portal."
    >
      <SEO
        title="Live Sessions - SARMAK Learning Portal"
        description="View upcoming live labs, mentor sessions, and training workshops for your learning program."
        keywords="live sessions, training workshops, SARMAK live labs"
      />

      <div className="grid gap-8 xl:grid-cols-[1.45fr_0.95fr]">
        <div className="space-y-6">
          {sessions.length > 0 ? (
            sessions.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="rounded-3xl bg-gold/10 p-3 text-gold">
                    <Video className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                        <p className="mt-3 text-white/70">Hosted by {item.host}</p>
                      </div>
                      <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">{item.status}</span>
                    </div>
                    <p className="mt-3 text-white/70">{item.date} · {item.time}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-gold hover:text-white"
                    >
                      Join session
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/70">No live sessions are scheduled yet. Check back later for new workshop invitations.</p>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">Live learning</span>
            <h3 className="mt-3 text-2xl font-semibold">Be in the room</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Live sessions are the fastest way to ask questions, clarify assignments, and receive mentor feedback in real time.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Need help?</p>
            <p className="mt-4 leading-relaxed">
              If you miss a session, visit the materials page for recordings and follow-up summaries.
            </p>
            <Link to="/materials" className="mt-6 inline-flex items-center gap-2 text-gold hover:text-white transition-colors">
              See recorded materials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default LiveSessions;
