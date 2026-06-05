import { FormEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageShell from './components/PageShell';

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Aspiring IT Professional');
  const [experience, setExperience] = useState('0-1 years');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('Your profile details have been saved for the training team.');
  };

  return (
    <PageShell
      title="Create Your Profile"
      description="Complete your learner profile to personalize the training journey, session recommendations, and mentor support."
    >
      <SEO
        title="Learner Profile - SARMAK Learning Portal"
        description="Create and update your learner profile for AI Career Accelerator training programs."
        keywords="SARMAK learner profile, training profile, career accelerator"
      />
      <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
          <div className="mb-8">
            <span className="text-gold text-sm uppercase tracking-widest">Profile Setup</span>
            <h2 className="mt-4 text-3xl font-black">Tell us about yourself</h2>
            <p className="mt-4 text-white/70 max-w-2xl">
              This information helps us match training modules, industry tools, and support resources to your experience and career goals.
            </p>
          </div>

          {message && (
            <div className="mb-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-emerald-100">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-white/70">Full Name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-[#101214] px-4 py-3 text-white outline-none transition focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-[#101214] px-4 py-3 text-white outline-none transition focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70">Your Career Goal</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-white/10 bg-[#101214] px-4 py-3 text-white outline-none transition focus:border-gold"
              >
                <option>Aspiring IT Professional</option>
                <option>AI & Cloud Enthusiast</option>
                <option>Data Science Beginner</option>
                <option>IT Operations Specialist</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-white/70">Experience Level</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-white/10 bg-[#101214] px-4 py-3 text-white outline-none transition focus:border-gold"
              >
                <option>0-1 years</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>
            </div>
            <button className="btn-primary inline-flex items-center gap-2" type="submit">
              Save Profile
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <div className="space-y-6">
            <div>
              <span className="text-gold text-sm uppercase tracking-widest">Why this matters</span>
              <h3 className="mt-3 text-2xl font-semibold">Personalized learning pathways</h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                Accurate profile details help us present the right training schedule, project examples, and mentor guidance on your dashboard.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101214] p-6">
              <p className="text-sm uppercase tracking-widest text-white/50">Need help with onboarding?</p>
              <p className="mt-4 text-white/70 leading-relaxed">
                Message our support team any time for login assistance, training timelines, or mentor pairing.
              </p>
              <Link to="/dashboard" className="mt-6 inline-flex items-center gap-2 text-gold hover:text-white transition-colors">
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
};

export default Profile;
