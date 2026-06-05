import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { clearUserSession, getUserSession, UserSession } from './lib/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<UserSession | null>(null);

  useEffect(() => {
    const user = getUserSession();
    if (!user) {
      navigate('/login');
      return;
    }
    setSession(user);
  }, [navigate]);

  const handleLogout = () => {
    clearUserSession();
    navigate('/login');
  };

  if (!session) {
    return null;
  }

  return (
    <PageShell
      title="Learner Dashboard"
      description="Your training schedule, live sessions, and quick navigation across the learning portal."
    >
      <SEO
        title="Learner Dashboard - SARMAK Learning Portal"
        description="Access your training schedule, materials, program progress, tools, and repository links after login."
        keywords="SARMAK learner dashboard, training schedule, learning resources"
      />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="text-gold text-sm uppercase tracking-widest">Training Dashboard</span>
            <h2 className="mt-4 text-4xl font-black">Welcome back, {session.name}</h2>
            <p className="mt-4 text-white/70 max-w-3xl">
              You are enrolled in the {session.enrolledProgram}. Below are your ongoing and upcoming sessions.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button onClick={handleLogout} className="btn-outline w-full sm:w-auto">
              Logout
            </button>
            <Link to="/" className="btn-primary w-full sm:w-auto inline-flex items-center gap-2">
              Back to Registration
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-white/6 bg-white/3 p-6">
            <h3 className="text-2xl font-semibold">Ongoing Sessions</h3>
            <p className="mt-2 text-white/70">Sessions happening now or in-progress.</p>
            <div className="mt-4 space-y-3">
              {session.liveSessions.filter((s) => /ongoing|in progress|live/i.test(s.status)).length === 0 && (
                <div className="text-white/60">No ongoing sessions at the moment.</div>
              )}
              {session.liveSessions.filter((s) => /ongoing|in progress|live/i.test(s.status)).map((s, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                  <div>
                    <div className="font-medium">{s.title}</div>
                    <div className="text-sm text-white/70">{s.host} — {s.time}</div>
                  </div>
                  <a href={s.link} target="_blank" rel="noreferrer" className="text-gold">Join</a>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/6 bg-white/3 p-6">
            <h3 className="text-2xl font-semibold">Upcoming Sessions</h3>
            <p className="mt-2 text-white/70">Next few scheduled sessions from your course.</p>
            <div className="mt-4 space-y-3">
              {(() => {
                const upcomingFromSchedule = session.schedule.filter((s) => /upcoming|scheduled/i.test(s.status));
                const upcomingFromLive = session.liveSessions.filter((s) => /upcoming|scheduled/i.test(s.status));
                const allUpcoming = [...upcomingFromLive, ...upcomingFromSchedule].slice(0, 5);
                if (allUpcoming.length === 0) {
                  return <div className="text-white/60">No upcoming sessions scheduled.</div>;
                }
                return allUpcoming.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-white/70">{item.date} • {item.time}</div>
                    </div>
                    <Link to="/schedule" className="text-gold">View</Link>
                  </div>
                ));
              })()}
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
};

export default Dashboard;
