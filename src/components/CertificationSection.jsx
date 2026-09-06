import { FaAws } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import SectionLabel from './SectionLabel'
import { certifications } from '../data/portfolio'

export default function CertificationSection() {
  return (
    <section className="certifications section-wrap" id="certifications">
      <div className="section-heading">
        <div>
          <SectionLabel number="05">certification</SectionLabel>
          <h2>Always learning,<br /><em>always improving.</em></h2>
        </div>
        <p>Professional learning that supports cloud development and dependable backend work.</p>
      </div>
      <div className="certification-list">
        {certifications.map((certification) => (
          <article className="certification-card" key={certification.code}>
            <FaAws className="certification-icon" size={28} aria-hidden="true" />
            <div>
              <h3>{certification.name}</h3>
              <p>{certification.code}</p>
            </div>
            <time dateTime={certification.year}>{certification.year}</time>
            <a className="certification-link" href="https://www.credly.com/badges/978235e4-c1ca-4f96-822d-0a887ea8803d/public_url" target="_blank" rel="noreferrer" aria-label="Verify AWS certification on Credly">
              Verify <FiExternalLink size={14} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
