import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowRight, FiCheck, FiClipboard, FiDownload, FiExternalLink, FiMail, FiPhone } from 'react-icons/fi'

const icons = {
  arrow: FiArrowRight,
  check: FiCheck,
  copy: FiClipboard,
  download: FiDownload,
  external: FiExternalLink,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: FiMail,
  phone: FiPhone,
}

export default function Icon({ name, size = 16, className = '' }) {
  const IconComponent = icons[name]

  if (!IconComponent) return null

  return <IconComponent className={className} size={size} aria-hidden="true" />
}
