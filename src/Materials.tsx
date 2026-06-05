import { useEffect, useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageShell from './components/PageShell';
import { getUserSession, TrainingResource } from './lib/auth';

const Materials = () => {
  const [materials, setMaterials] = useState<TrainingResource[]>([]);

  useEffect(() => {
    const session = getUserSession();
    if (session) {
      setMaterials(session.trainingMaterials);
    }
  }, []);

  return (
    <PageShell
      title="Training Materials"
      description="Access the full curriculum resources, guides, and recorded sessions for your accelerator program."
    >
      <SEO
        title="Training Materials - SARMAK Learning Portal"
        description="Browse training guides, PDFs, and recorded sessions included in your SARMAK learning program."
        keywords="training materials, learning resources, SARMAK guides"
      />

      <div className="grid gap-8 xl:grid-cols-[1.35fr_0.9fr]">
        <div className="space-y-8">
          {materials.length > 0 ? (
            materials.map((resource) => (
              <div key={resource.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="rounded-3xl bg-gold/10 p-3 text-gold">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="text-xl font-semibold text-white">{resource.title}</h2>
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
                        {resource.type.toUpperCase()}
                      </span>
                    </div>
                    <p className="mt-3 text-white/70">{resource.description}</p>
                    <a
                      href={resource.link}
                      className="mt-5 inline-flex items-center gap-2 text-gold hover:text-white"
                    >
                      Open resource
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-white/70">No training materials are available yet. Please login to continue.</p>
              <Link to="/login" className="mt-6 inline-flex items-center gap-2 btn-outline">
                Login to unlock resources
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <span className="text-gold text-sm uppercase tracking-widest">Curriculum Highlights</span>
            <h3 className="mt-3 text-2xl font-semibold">Study with confidence</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Each resource is chosen to support your project work, internship preparation, and real-world IT use cases.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101214] p-6 text-white/70">
            <p className="text-sm uppercase tracking-widest text-gold">Training note</p>
            <p className="mt-4 leading-relaxed">
              Save the important guides to your drive and review them before every practical workshop.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default Materials;
