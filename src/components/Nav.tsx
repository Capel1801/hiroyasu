import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../config/site'

const navLinks = [
  { label: 'Works', href: '#works' },
  { label: 'Lab', href: '#lab' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ctaHref = siteConfig.email
    ? `mailto:${siteConfig.email}`
    : siteConfig.links.instagram || siteConfig.links.twitter || siteConfig.links.github || '#about'
  const ctaIsExternal = ctaHref.startsWith('http') || ctaHref.startsWith('mailto')

  return (
    <motion.nav
      className="nav"
      data-scrolled={scrolled}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="nav-logo">{siteConfig.name}</a>

      {/* Desktop: centered liquid-glass pill */}
      <div className="nav-pill liquid-glass">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop: CTA button */}
      <a
        href={ctaHref}
        className="nav-cta"
        target={ctaIsExternal ? '_blank' : undefined}
        rel={ctaIsExternal ? 'noopener noreferrer' : undefined}
      >
        Contact ↗
      </a>

      {/* Mobile: inline links */}
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} className="nav-link">{link.label}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
