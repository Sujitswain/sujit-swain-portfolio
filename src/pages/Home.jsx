import { useEffect, useState } from 'react'
import Icon from '../components/Icon'
import SectionLabel from '../components/SectionLabel'
import ContactSection from '../components/ContactSection'
import CertificationSection from '../components/CertificationSection'
import TechStackSection from '../components/TechStackSection'
import ProjectsAndLedger from '../components/ProjectsAndLedger'
import { profileData, stacks } from '../data/portfolio'

const EXPERIENCE_START_DATE = new Date(2024, 0, 1)

function getExperienceYears() {
  const today = new Date()
  const elapsedMonths = (today.getFullYear() - EXPERIENCE_START_DATE.getFullYear()) * 12
    + today.getMonth() - EXPERIENCE_START_DATE.getMonth() + 1
  const roundedYears = Math.ceil((elapsedMonths / 12) * 10) / 10
  return roundedYears.toFixed(1)
}

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [experienceYears, setExperienceYears] = useState(getExperienceYears)
  const resumeUrl = `${import.meta.env.BASE_URL}Sujit_Swain_Java_Backend_3YOE.pdf`

  useEffect(() => {
    let timeoutId

    const refreshExperience = () => {
      setExperienceYears(getExperienceYears())
      const now = new Date()
      const nextDay = new Date(now)
      nextDay.setHours(24, 0, 0, 0)
      timeoutId = window.setTimeout(refreshExperience, nextDay.getTime() - now.getTime())
    }

    const now = new Date()
    const nextDay = new Date(now)
    nextDay.setHours(24, 0, 0, 0)
    timeoutId = window.setTimeout(refreshExperience, nextDay.getTime() - now.getTime())

    return () => window.clearTimeout(timeoutId)
  }, [])

  const copyProfile = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(profileData, null, 2))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Sujit Swain Home Workspace">
          <span className="wordmark-mark">SS</span> sujit.swain<span className="wordmark-dot">_</span>
        </a>
        <nav className="nav-links" aria-label="Internal system map routing hooks">
          <a href="#stack">stack</a>
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#certifications">certification</a>
          <a href="#contact">contact</a>
        </nav>
        <a className="status-chip" href="mailto:sujitswain2023@gmail.com">
          <span className="status-dot" /> availability: active
        </a>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> backend engineer</p>
            <h1>Building reliable<br /><em>systems that scale.</em></h1>
            <p className="hero-lede">I build secure APIs and reliable backend services that make complex business workflows faster and easier to maintain.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <Icon name="arrow" /></a>
              <a className="button button-quiet" href={resumeUrl} download="Sujit_Swain_Java_Backend_3YOE.pdf">Download resume <Icon name="download" /></a>
            </div>
            <div className="hero-meta">
              <span>Based in India</span>
              <span className="meta-rule" />
              <span>Java · Spring Boot · AWS</span>
            </div>
          </div>
          
          <div className="terminal-window" aria-label="Engineer profile">
            <div className="terminal-top">
              <div className="terminal-lights"><span /><span /><span /></div>
              <span className="terminal-file text-xs select-none">profile_manifest.json</span>
              <button className="copy-button" type="button" onClick={copyProfile} title="Copy profile">
                {copied ? <Icon name="check" className="text-emerald-400" /> : <Icon name="copy" size={14} />}
              </button>
            </div>
            <div className="terminal-body">
              <div className="line-numbers text-xs">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08</div>
              <pre className="text-xs md:text-sm font-mono tracking-tight">
                <span className="syntax-muted">{"{"}</span>{"\n"}
                {"  "}<span className="syntax-key">"engineer"</span>: <span className="syntax-string">"Sujit Swain"</span>,{"\n"}
                {"  "}<span className="syntax-key">"role"</span>: <span className="syntax-string">"Backend Engineer"</span>,{"\n"}
                {"  "}<span className="syntax-key">"specialties"</span>: <span className="syntax-array">[</span>{"\n"}
                {"    "}<span className="syntax-string">"distributed systems"</span>,{"\n"}
                {"    "}<span className="syntax-string">"API performance"</span>,{"\n"}
                {"    "}<span className="syntax-string">"cloud architecture"</span>{"\n"}
                {"  "}<span className="syntax-array">]</span>,{"\n"}
                {"  "}<span className="syntax-key">"status"</span>: <span className="syntax-value">true</span>{"\n"}
                <span className="syntax-muted">{"}"}</span>
              </pre>
            </div>
            <div className="terminal-footer">
              <span><span className="h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block mr-1.5 animate-pulse" /> profile online</span>
              <span>JSON profile</span>
            </div>
          </div>
        </section>

        <section className="metrics section-wrap" aria-label="System optimization metrics">
          <SectionLabel number="01">measurable results</SectionLabel>
          <div className="metrics-grid">
            <article className="metric">
              <p>throughput / CSV execution pipeline</p>
              <strong>88<span>%</span></strong>
              <div className="metric-detail">
                <span>Latency tuning: 10m <b>-&gt;</b> 1.2m</span>
                <span className="metric-bar"><i style={{ width: '88%' }} /></span>
              </div>
            </article>
            <article className="metric">
              <p>vulnerability / SonarQube audit matrix</p>
              <strong>50<span>%</span></strong>
              <div className="metric-detail">
                <span>Codebase defect mitigation</span>
                <span className="metric-bar"><i style={{ width: '50%' }} /></span>
              </div>
            </article>
            <article className="metric">
              <p>lifecycle / enterprise environments</p>
              <strong>{experienceYears}<span> yrs</span></strong>
              <div className="metric-detail">
                <span>Production system management</span>
                <span className="metric-bar"><i style={{ width: '75%' }} /></span>
              </div>
            </article>
          </div>
        </section>

        <TechStackSection stacks={stacks} />

        <ProjectsAndLedger />

        <CertificationSection />

        <ContactSection />
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-slate-600 gap-4 select-none">
        <span>© {new Date().getFullYear()} Sujit Swain</span>
        <span>Designed for frameworks where performance matters <span className="text-cyan-500 font-bold font-sans">+</span></span>
        <a href="#top" className="hover:text-white transition-colors">Back to top ↑</a>
      </footer>
    </div>
  )
}

