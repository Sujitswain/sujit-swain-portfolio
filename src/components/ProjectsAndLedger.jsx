import { SiGithub } from 'react-icons/si'
import { FiArrowUpRight, FiGitPullRequest, FiCpu, FiHardDrive, FiActivity } from 'react-icons/fi'
import SectionLabel from './SectionLabel'
import { projects } from '../data/portfolio'

export default function ProjectsAndLedger() {
  return (
    <>
      <section className="projects section-wrap" id="projects">
        <div className="section-heading project-heading">
          <div>
            <SectionLabel number="03">selected projects</SectionLabel>
            <h2>Work I am<br /><em>proud of.</em></h2>
          </div>
          <a className="text-link group font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 lg:pt-8" href="https://github.com/Sujitswain" target="_blank" rel="noreferrer">
            View GitHub <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article className="p-8 rounded-lg bg-[#0A0E17] border border-[#1A2333]/80 hover:bg-[#0E1524]/40 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden" key={project.number}>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] bg-[#111A2E] text-slate-400 border border-[#1A2333] px-2 py-0.5 rounded select-none tracking-wider">
                    PROJECT 0{project.number}
                  </span>
                  <a href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source`} className="p-2 bg-[#111A2E]/50 text-slate-400 border border-[#1A2333] rounded hover:border-cyan-400 hover:text-white hover:scale-105 transition-all">
                    <SiGithub className="w-4 h-4" />
                  </a>
                </div>
                
                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
                
                <ul className="space-y-2.5 mb-8 font-sans text-xs text-slate-300 border-l border-[#1A2333] pl-3.5">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-cyan-500 font-mono select-none font-bold">+</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1A2333]/40">
                {project.tags.map((tag) => (
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-[#111A2E]/40 text-slate-400 border border-[#1A2333]/80 rounded" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-wrap" id="experience">
        <div className="section-heading">
          <div>
            <SectionLabel number="04">experience</SectionLabel>
            <h2>Where I have<br /><em>worked.</em></h2>
          </div>
          <p>Hands-on experience building APIs, improving performance, and supporting dependable business applications.</p>
        </div>
        
                <div className="relative border-l border-[#1A2333] ml-3 md:ml-36 space-y-12 py-2">
          
          <article className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-1.25 top-2 h-2 w-2 rounded-full bg-emerald-500 border border-[#0A0E17] shadow-[0_0_8px_rgba(16,185,129,0.8)] group-hover:scale-125 transition-transform" />
            <div className="absolute -left-36 top-1.5 hidden md:block w-28 text-right font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold select-none">
              Jan 2024 - Present
            </div>
            
            <div className="p-6 md:p-8 rounded-lg bg-[#0E1524]/20 border border-[#1A2333] group-hover:border-cyan-500/20 group-hover:bg-[#0E1524]/40 transition-all duration-300 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#1A2333]/60 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FiCpu className="text-cyan-400 w-4 h-4" /> Software Engineer
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">Capgemini</p>
                </div>
              </div>
              
              <ul className="space-y-3 font-sans text-xs md:text-sm text-slate-400 pl-2">
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <FiGitPullRequest className="text-slate-600 mt-1 shrink-0" size={12} />
                  <span>Developed and maintained secure, high-performance RESTful APIs using Java 17 and Spring Boot for billing and data processing workflows.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <FiActivity className="text-slate-600 mt-1 shrink-0" size={12} />
                  <span>Engineered a multithreaded CSV parsing infrastructure, accelerating massive ingestion pipelines from 10 minutes to 1.2 minutes (an 88% processing performance improvement) for large datasets containing 10K-50K records.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <FiHardDrive className="text-slate-600 mt-1 shrink-0" size={12} />
                  <span>Improved request tracing across services using MDC and TaskDecorators, making issues easier to find and resolve.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <FiActivity className="text-slate-600 mt-1 shrink-0" size={12} />
                  <span>Developed Spring Batch jobs for processing failed records and generating CSV reports with scheduled daily execution blocks.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <FiHardDrive className="text-slate-600 mt-1 shrink-0" size={12} />
                  <span>Used AWS S3 and CloudWatch for file storage, monitoring, and faster troubleshooting.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <FiActivity className="text-slate-600 mt-1 shrink-0" size={12} />
                  <span>Hardened deep security policies and reduced architectural code defects by 50% using SonarQube quality gate rules.</span>
                </li>
              </ul>
            </div>
          </article>

          <article className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-1.25 top-2 h-2 w-2 rounded-full bg-[#1A2333] border border-[#0A0E17] group-hover:bg-indigo-400 group-hover:scale-125 transition-all" />
            <div className="absolute -left-36 top-1.5 hidden md:block w-28 text-right font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold select-none">
              Aug 2019 - May 2023
            </div>
            
            <div className="p-6 md:p-8 rounded-lg bg-[#0E1524]/10 border border-[#1A2333]/60 group-hover:border-indigo-500/20 group-hover:bg-[#0E1524]/20 transition-all duration-300 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#1A2333]/40 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-300 flex items-center gap-2">
                    <FiHardDrive className="text-indigo-400 w-4 h-4" /> Bachelor of Technology
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">Puducherry Technological University</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-slate-500">Evaluation Index:</span>
                <span className="font-bold text-emerald-400 font-mono bg-[#111A2E] px-2.5 py-0.5 rounded border border-[#1A2333] shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                  CGPA 9.33 / 10.0
                </span>
              </div>
            </div>
          </article>

        </div>

      </section>
    </>
  )
}
