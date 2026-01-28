
import React, { useState, useEffect } from 'react';
import { EXPERIENCES, ACHIEVEMENTS, SKILLS, LANGUAGES, PROJECTS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'education', 'skills', 'achievements'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const handleDownloadResume = () => {
    // In a real scenario, this would be a link to a PDF file.
    // For this demo, we'll trigger the print dialog which is a common way to 'save' a web resume.
    window.print();
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect bg-opacity-70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text tracking-tight cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>YT</div>
          <div className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors duration-200 hover:text-blue-400 ${
                  activeSection === link.id ? 'text-blue-400' : 'text-slate-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleDownloadResume}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all text-sm font-semibold"
            >
              <i className="fa-solid fa-download"></i>
              <span>Resume</span>
            </button>
            <a
              href="mailto:yatri.trivedi.3135@gmail.com"
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all text-white text-sm font-semibold shadow-lg shadow-blue-500/20"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium">
            Computer Engineering Student
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            Yatri <span className="gradient-text">Trivedi</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light mb-12 leading-relaxed">
            Crafting digital solutions through 
            <span className="text-white font-normal px-2">AI Innovation,</span> 
            <span className="text-white font-normal px-2">Web Architecture,</span> and 
            <span className="text-white font-normal px-2">Data Intelligence.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-slate-400 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <i className="fa-solid fa-envelope text-blue-400"></i>
              <span>yatri.trivedi.3135@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <i className="fa-solid fa-phone text-blue-400"></i>
              <span>+91 7016178356</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={handleDownloadResume}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all shadow-xl"
            >
              <i className="fa-solid fa-file-arrow-down text-blue-400 text-xl"></i>
              <span className="font-bold">Download Full Resume</span>
            </button>
            <a 
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25"
            >
              Explore Projects
            </a>
          </div>

          <div className="glass-effect p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4 text-left">Career Objective</h3>
            <p className="text-slate-300 leading-relaxed italic text-left">
              "To be part of a value-driven organization that provides growth and opportunities and continues learning environment to enhance my skills & knowledge to expedite my personal as well as organizational growth."
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 space-y-32 py-32">
        
        {/* Experience Section */}
        <section id="experience">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-4xl font-bold text-white">Experience</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="group glass-effect p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                    Internship
                  </span>
                  <span className="text-slate-500 text-sm font-mono">{exp.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {exp.company}
                </h3>
                <p className="text-slate-400 text-lg">{exp.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-4xl font-bold text-white">Projects</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group glass-effect p-8 rounded-2xl flex flex-col hover:border-blue-500/30 transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <i className="fa-solid fa-folder-open text-lg"></i>
                  </div>
                  <div className="flex space-x-3 text-slate-400">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 mb-2">{project.period}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono text-slate-400 px-2 py-1 bg-white/5 rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-4xl font-bold text-white">Education</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="glass-effect p-10 rounded-2xl border-l-4 border-l-blue-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <i className="fa-solid fa-graduation-cap text-9xl"></i>
            </div>
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h3 className="text-3xl font-bold text-white">Ahmedabad Institute of Technology</h3>
                <span className="px-3 py-1 bg-white/10 rounded-full text-slate-300 text-sm">4th Year Senior</span>
              </div>
              <p className="text-xl text-blue-400 font-medium mb-4">Bachelor of Engineering in Computer Engineering</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-slate-400">
                  <i className="fa-solid fa-chart-line text-blue-500"></i>
                  <span className="text-lg">CGPA: <span className="text-white font-bold">8.25</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-4xl font-bold text-white">Skill Matrix</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(['Programming', 'Web', 'AI/ML', 'Core'] as const).map((category) => (
              <div key={category} className="space-y-4">
                <h3 className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category === category).map((skill) => (
                    <span key={skill.name} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 text-sm cursor-default">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <h3 className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Languages</h3>
            <div className="flex flex-wrap gap-8">
              {LANGUAGES.map((lang) => (
                <div key={lang} className="flex items-center space-x-3 text-white">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  <span className="text-xl font-light">{lang}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-4xl font-bold text-white">Certifications & Recognition</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="space-y-4">
            {ACHIEVEMENTS.map((achievement, idx) => (
              <div 
                key={achievement.id} 
                className="glass-effect p-6 rounded-xl flex items-center gap-6 hover:bg-white/10 transition-colors border border-white/5 hover:border-blue-500/20 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-mono text-sm border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-slate-500">{achievement.provider}</p>
                </div>
                <div className="hidden md:block">
                  <i className="fa-solid fa-award text-blue-500/30 group-hover:text-blue-500/60 transition-colors text-xl"></i>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Yatri Trivedi</h3>
            <p className="text-slate-500">Building the future with Intelligence & Code.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:yatri.trivedi.3135@gmail.com" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </div>
          
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Yatri Trivedi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
