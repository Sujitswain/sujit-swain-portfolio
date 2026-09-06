import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiPhone, FiDownload, FiArrowUpRight } from 'react-icons/fi'
import SectionLabel from './SectionLabel'
import MessageFormConsole from './MessageFormConsole'

export default function ContactSection() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        
        <div className="lg:col-span-4 space-y-6 lg:pr-4">
          <SectionLabel number="06">contact</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
            Let's build something<br />
              <em className="not-italic text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-sky-400 font-mono">
              dependable._
            </em>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
            Have a backend project that needs better performance, clearer structure, or stronger reliability? Let&apos;s connect.
          </p>
          
          <div className="pt-4">
            <a 
              className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider px-5 py-3.5 font-bold rounded text-slate-300 bg-[#111A2E]/50 border border-[#1A2333] hover:bg-[#162235] hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto" 
              href="/Sujit_Swain_Java_Backend_2YOE.pdf" 
              download="Sujit-Swain-Resume.pdf"
            >
              <FiDownload size={15} className="text-cyan-400" /> 
              Download resume <span className="text-[10px] bg-[#233550] px-1 py-0.5 rounded text-cyan-300 font-extrabold">PDF</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-3">
            <a href="mailto:sujitswain2023@gmail.com" className="group flex items-center justify-between p-4 rounded bg-[#0E1524]/40 border border-[#1A2333]/80 hover:border-cyan-500/20 transition-all duration-300">
              <span className="font-mono text-xs text-slate-400 flex items-center gap-2">
                <FiMail size={14} className="text-cyan-500" /> email
              </span>
              <strong className="font-mono text-xs text-white group-hover:text-cyan-400 transition-colors truncate max-w-45 sm:max-w-none">
                sujitswain2023@gmail.com
              </strong>
            </a>

            <a href="tel:+918925114798" className="group flex items-center justify-between p-4 rounded bg-[#0E1524]/40 border border-[#1A2333]/80 hover:border-cyan-500/20 transition-all duration-300">
              <span className="font-mono text-xs text-slate-400 flex items-center gap-2">
                <FiPhone size={14} className="text-cyan-500" /> phone
              </span>
              <strong className="font-mono text-xs text-white group-hover:text-cyan-400 transition-colors">
                +91 89251 14798
              </strong>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a 
              href="https://github.com/Sujitswain" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col gap-4 p-4 rounded bg-[#0E1524]/40 border border-[#1A2333]/80 hover:border-[#233550] group transition-all duration-300"
            >
              <div className="flex justify-between items-center text-slate-400 group-hover:text-white transition-colors">
                <FaGithub size={20} />
                <FiArrowUpRight size={14} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="font-mono text-xs">
                <span className="block text-white font-bold">GitHub</span>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/sujit-swain-tech/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col gap-4 p-4 rounded bg-[#0E1524]/40 border border-[#1A2333]/80 hover:border-cyan-500/20 group transition-all duration-300"
            >
              <div className="flex justify-between items-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                <FaLinkedinIn size={20} />
                <FiArrowUpRight size={14} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="font-mono text-xs">
                <span className="block text-white font-bold">LinkedIn</span>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-4">
          <MessageFormConsole />
        </div>

      </div>
    </section>
  )
}
