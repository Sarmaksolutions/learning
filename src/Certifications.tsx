import { useEffect, useState } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession, CertificationItem } from './lib/auth';

const Certifications = () => {
  const [certifications, setCertifications] = useState<CertificationItem[]>([]);

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setCertifications(session.certifications);
    }
  }, []);

  return (
    <PageShell
      title="Certifications"
      description="Track earned badges, ongoing certificates, and milestone credentials for your training program."
    >
      <SEO
        title="Certifications - SARMAK Learning Portal"
        description="See the certification milestones and credential status for your SARMAK training journey."
        keywords="certifications, badges, training credentials"
      />

      <div className="grid gap-8 xl:grid-cols-[1.45fr_0.95fr]">
        <div className="space-y-6">
          {certifications.length > 0 ? (
            certifications.map((cert) => (
              <div key={cert.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-3xl bg-gold/10 p-3 text-gold">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-white">{cert.title}</h2>
                        <p className="mt-2 text-white/70">{cert.status}</p>
                      </div>
                    </div>
                    {cert.issuedDate ? <p className="mt-4 text-white/70">Issued on {cert.issuedDate}</p> : null}
                  </div>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gold transition hover:bg-gold/10"
                    >
                      View Certificate
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/70">No certificate link yet</span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/70">You have not earned any certificates yet. Continue your training to unlock badges and credentials.</p>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">Certified growth</span>
            <h3 className="mt-3 text-2xl font-semibold">Proof of achievement</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Certificates show your progress and help demonstrate skills to recruiters and mentors.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Next step</p>
            <p className="mt-4 leading-relaxed">
              Complete the next assessment or project milestone to move a certification from pending to completed.
            </p>
            <Link to="/progress" className="mt-6 inline-flex items-center gap-2 text-gold hover:text-white transition-colors">
              Check progress tracker
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default Certifications;
