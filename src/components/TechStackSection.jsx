import { 
  SiSpringboot, 
  SiSpringsecurity, 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiDocker, 
  SiJenkins, 
  SiGithubactions, 
  SiMysql, 
  SiRedis, 
  SiApachekafka 
} from 'react-icons/si'
import { FaAws, FaJava, FaServer } from 'react-icons/fa'
import SectionLabel from './SectionLabel'

const STACK_ICONS = {
  "java (17+)": <FaJava className="w-4 h-4" />,
  "spring boot": <SiSpringboot className="w-4 h-4" />,
  "spring security": <SiSpringsecurity className="w-4 h-4" />,
  "spring batch": <FaServer className="w-4 h-4" />,
  "python": <SiPython className="w-4 h-4" />,
  "javascript": <SiJavascript className="w-4 h-4" />,
  "react": <SiReact className="w-4 h-4 animate-[spin_8s_linear_infinite]" />,
  "aws (ec2, s3, lambda)": <FaAws className="w-4 h-4" />,
  "docker": <SiDocker className="w-4 h-4" />,
  "jenkins": <SiJenkins className="w-4 h-4" />,
  "github actions": <SiGithubactions className="w-4 h-4" />,
  "mysql": <SiMysql className="w-4 h-4" />,
  "redis cache clusters": <SiRedis className="w-4 h-4" />,
  "jpa / hibernate mapping": <FaServer className="w-4 h-4" />,
  "apache kafka": <SiApachekafka className="w-4 h-4" />,
  "azure service bus pipeline": <FaServer className="w-4 h-4" />
}

export default function TechStackSection({ stacks }) {
  return (
    <section className="stack section-wrap" id="stack">
      <div className="section-heading">
        <div>
          <SectionLabel number="02">technical skills</SectionLabel>
          <h2>The tools I<br /><em>work with.</em></h2>
        </div>
        <p>A practical toolkit for building secure APIs, processing data, and delivering reliable backend services.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A2333]/40 border border-[#1A2333] rounded overflow-hidden">
        {Object.entries(stacks).map(([category, skills]) => (
          <article 
            className="bg-[#0A0E17] p-8 hover:bg-[#0E1524]/40 transition-all duration-300 relative group overflow-hidden" 
            key={category}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out" />
            
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-[#1A2333]/60 pb-4 mb-6 relative z-10">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold group-hover:text-white transition-colors duration-300">
                {category}
              </h3>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-cyan-400 group-hover:border-cyan-300 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300" />
            </div>

            <div className="flex flex-wrap gap-2.5 relative z-10">
              {skills.map((skill) => {
                const normalizedSkill = skill.toLowerCase().trim()
                const targetIcon = STACK_ICONS[normalizedSkill] || null

                return (
                  <span 
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-[#111A2E]/30 text-slate-400 border border-[#1A2333]/80 rounded hover:border-cyan-400/50 hover:text-cyan-200 hover:bg-[#111A2E]/80 hover:-translate-y-0.5 shadow-sm active:translate-y-0 transition-all duration-150 cursor-default group/pill select-none" 
                    key={skill}
                  >
                    {targetIcon && (
                      <span className="text-slate-500 group-hover/pill:text-cyan-400 group-hover/pill:scale-110 transition-all duration-200">
                        {targetIcon}
                      </span>
                    )}
                    {skill}
                  </span>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
