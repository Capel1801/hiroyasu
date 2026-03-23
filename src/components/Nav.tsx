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

  return (
    <motion.nav
      className="nav"
      data-scrolled={scrolled}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="nav-logo">{siteConfig.name}</a>
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
