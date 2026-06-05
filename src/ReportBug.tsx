import { useEffect, useState } from 'react';
import { ArrowRight, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession } from './lib/auth';

const ReportBug = () => {
  const [supportLink, setSupportLink] = useState('');

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setSupportLink(session.bugReportLink);
    }
  }, []);

  return (
    <PageShell
      title="Report a Bug"
      description="Report technical issues, content problems, or training portal bugs directly to the SARMAK support team."
    >
      <SEO
        title="Report a Bug - SARMAK Learning Portal"
        description="Submit bug reports, platform issues, and live session problems to SARMAK training support."
        keywords="report bug, SARMAK support, training portal issue"
      />

      <div className="grid gap-8 xl:grid-cols-[1.45fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="rounded-3xl bg-gold/10 p-3 text-gold">
              <Bug className="h-6 w-6" />
            </div>
            <div>
              <span className="text-gold text-sm uppercase tracking-widest">Bug reporting</span>
              <h2 className="mt-3 text-3xl font-black">Need support with the platform?</h2>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-white">How to report</h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                Describe the issue clearly and include the page name, browser, and what you were trying to do. Our support team reviews bug reports immediately.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: 'Live sessions', detail: 'Issues joining or streaming a live workshop.' },
                { title: 'Materials', detail: 'Broken links, missing downloads, or file access issues.' },
                { title: 'Dashboard', detail: 'Navigation, tab, or summary data problems.' },
                { title: 'Account', detail: 'Login, profile, or session access issues.' },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.detail}</p>
                </div>
              ))}
            </div>
            <a
              href={supportLink}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-[#111315] transition hover:bg-amber-300"
            >
              Report a Bug Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">Support note</span>
            <h3 className="mt-3 text-2xl font-semibold">Get help fast</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Bug reports are prioritized to maintain the quality of your training experience. If the issue is urgent, mention it in your message.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Need another action?</p>
            <p className="mt-4 leading-relaxed">
              Return to the dashboard or live sessions to continue your training while support resolves the issue.
            </p>
            <Link to="/dashboard" className="mt-6 inline-flex items-center gap-2 text-gold hover:text-white transition-colors">
              Back to dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default ReportBug;
