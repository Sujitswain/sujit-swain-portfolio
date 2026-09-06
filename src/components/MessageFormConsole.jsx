import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'

export default function MessageFormConsole() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [activeField, setActiveField] = useState(null)
  const [submitState, setSubmitState] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitState('sending')

    try {
      const response = await fetch(event.currentTarget.action, {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Message could not be sent')

      setContactForm({ name: '', email: '', message: '' })
      setActiveField(null)
      setSubmitState('sent')
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <div className="bg-[#0E1524]/40 border border-[#1A2333] rounded-lg p-6 relative group overflow-hidden w-full">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="flex justify-between items-center mb-6 pb-3 border-b border-[#1A2333]/60 font-mono text-[10px] text-slate-500 tracking-wider select-none uppercase">
        <span>Send a message</span>
        <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
      </div>
      
      <form className="space-y-4" action="https://formsubmit.co/sujitswain2023@gmail.com" method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="_subject" value="New portfolio contact message" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        
        <div className="relative">
          <label htmlFor="contact-name" className={`absolute left-4 top-3 font-mono text-[10px] tracking-wide uppercase transition-all pointer-events-none duration-200 ${activeField === 'name' || contactForm.name ? 'text-cyan-400 -translate-y-2 text-[9px]' : 'text-slate-500'}`}>
            Name
          </label>
          <input 
            id="contact-name" 
            name="name"
            type="text" 
            placeholder={activeField === 'name' ? 'Your name' : ''} 
            className="w-full bg-[#0A0E17]/60 border border-[#1A2333] rounded px-4 pt-5 pb-2 font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
            value={contactForm.name} 
            onFocus={() => setActiveField('name')}
            onBlur={() => setActiveField(null)}
            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} 
            required 
          />
        </div>
        
        <div className="relative">
          <label htmlFor="contact-email" className={`absolute left-4 top-3 font-mono text-[10px] tracking-wide uppercase transition-all pointer-events-none duration-200 ${activeField === 'email' || contactForm.email ? 'text-cyan-400 -translate-y-2 text-[9px]' : 'text-slate-500'}`}>
            Email
          </label>
          <input 
            id="contact-email" 
            name="email"
            type="email" 
            placeholder={activeField === 'email' ? 'you@example.com' : ''} 
            className="w-full bg-[#0A0E17]/60 border border-[#1A2333] rounded px-4 pt-5 pb-2 font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
            value={contactForm.email} 
            onFocus={() => setActiveField('email')}
            onBlur={() => setActiveField(null)}
            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} 
            required 
          />
        </div>
        
        <div className="relative">
          <label htmlFor="contact-message" className={`absolute left-4 top-3 font-mono text-[10px] tracking-wide uppercase transition-all pointer-events-none duration-200 ${activeField === 'message' || contactForm.message ? 'text-cyan-400 -translate-y-2 text-[9px]' : 'text-slate-500'}`}>
            Message
          </label>
          <textarea 
            id="contact-message" 
            name="message"
            rows="3" 
            placeholder={activeField === 'message' ? 'Tell me about your project...' : ''} 
            className="w-full bg-[#0A0E17]/60 border border-[#1A2333] rounded px-4 pt-6 pb-2 font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
            value={contactForm.message} 
            onFocus={() => setActiveField('message')}
            onBlur={() => setActiveField(null)}
            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
            required 
          />
        </div>
        
        <button 
          className="w-full font-mono text-xs uppercase tracking-wider px-5 py-3.5 font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded shadow-md hover:shadow-cyan-500/10 active:bg-cyan-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer" 
          type="submit"
          disabled={submitState === 'sending'}
        >
          {submitState === 'sending' ? 'Sending...' : 'Send message'} <FiCheckCircle size={13} className="mt-0.5" />
        </button>
        {submitState === 'sent' && <p className="mt-3 text-center font-sans text-xs text-emerald-300" role="status">Thanks for reaching out. Your message is on its way.</p>}
        {submitState === 'error' && <p className="mt-3 text-center font-sans text-xs text-rose-300" role="alert">Something went wrong. Please email me directly instead.</p>}
      </form>
    </div>
  )
}
