import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession, ScheduleItem } from './lib/auth';

const Schedule = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setSchedule(session.schedule);
    }
  }, []);

  return (
    <PageShell
      title="Your Training Schedule"
      description="See your upcoming classroom sessions, labs, and review meetings in one place."
    >
      <SEO
        title="Training Schedule - SARMAK Learning Portal"
        description="View the scheduled training sessions and workshop dates for your SARMAK learning program."
        keywords="training schedule, SARMAK schedule, learning sessions"
      />

      <div className="grid gap-8 xl:grid-cols-[1.5fr_0.85fr]">
        <div className="space-y-8">
          {schedule.length > 0 ? (
            schedule.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="rounded-3xl bg-gold/10 p-3 text-gold">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                      <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-3 text-white/70">{item.date} · {item.time}</p>
                    <p className="mt-4 text-white/60">
                      Join the session on time to complete your milestones and stay aligned with your mentor.
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/70">No schedule available yet. Please log in and complete your profile to unlock the full timeline.</p>
              <Link to="/login" className="mt-6 inline-flex items-center gap-2 btn-outline">
                Login to view schedule
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">Schedule Insight</span>
            <h3 className="mt-3 text-2xl font-semibold">Stay ahead of every session</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Each training event is designed to build a specific skill, from onboarding fundamentals to hands-on AI labs and project review sessions.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Pro Tip</p>
            <p className="mt-4 leading-relaxed">
              Add the session dates to your calendar and keep your workspace ready with the required tools before each workshop begins.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default Schedule;
