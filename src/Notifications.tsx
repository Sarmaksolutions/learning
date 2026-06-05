import { useEffect, useState } from 'react';
import { ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession, NotificationItem } from './lib/auth';

const Notifications = () => {
  const [messages, setMessages] = useState<NotificationItem[]>([]);

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setMessages(session.notifications);
    }
  }, []);

  return (
    <PageShell
      title="Notifications"
      description="View the latest learner alerts, updates, and action items from the SARMAK training program."
    >
      <SEO
        title="Notifications - SARMAK Learning Portal"
        description="See new session updates, mentor messages, and certification alerts for your learning path."
        keywords="learner notifications, training alerts, SARMAK updates"
      />

      <div className="grid gap-8 xl:grid-cols-[1.45fr_0.95fr]">
        <div className="space-y-6">
          {messages.length > 0 ? (
            messages.map((note) => (
              <div key={note.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="rounded-3xl bg-gold/10 p-3 text-gold">
                    <Bell className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h2 className="text-xl font-semibold text-white">{note.title}</h2>
                        <p className="mt-3 text-white/70">{note.description}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${note.unread ? 'bg-gold/10 text-gold' : 'bg-white/5 text-white/60'}`}>
                        {note.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/70">You have no new notifications yet. Check back after your next live session or course update.</p>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">Stay informed</span>
            <h3 className="mt-3 text-2xl font-semibold">Never miss an update</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Important announcements about sessions, certificates, and mentor feedback appear here first. Refresh this page after each login.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Quick action</p>
            <p className="mt-4 leading-relaxed">
              Mark messages as read after reviewing them, and follow the prompts to keep your training on track.
            </p>
            <Link to="/dashboard" className="mt-6 inline-flex items-center gap-2 text-gold hover:text-white transition-colors">
              Back to Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default Notifications;
