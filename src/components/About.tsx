import { motion } from 'framer-motion'
import { siteConfig } from '../config/site'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function About() {
  const hasLinks = Object.values(siteConfig.links).some(v => v !== '')
  const hasEmail = siteConfig.email !== ''

  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-label">About</span>
      </div>

      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {/* Bio */}
        <motion.div variants={itemVariants}>
          <p className="about-bio">{siteConfig.bio}</p>
          {siteConfig.availableForWork && (
            <p className="about-availability">
              <span className="about-availability-dot" />
              {siteConfig.availableMessage}
            </p>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.div className="about-sidebar" variants={itemVariants}>
          {/* Tools */}
          <div>
            <p className="about-tools-title">Tools</p>
            <ul className="about-tools-list">
              {siteConfig.tools.map(tool => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          {(hasEmail || hasLinks) && (
            <div>
              <p className="about-tools-title">Contact</p>
              <div className="about-contact">
                {hasEmail && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="about-contact-link"
                  >
                    {siteConfig.email}
                  </a>
                )}
                {siteConfig.links.github && (
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-link"
                  >
                    GitHub
                  </a>
                )}
                {siteConfig.links.instagram && (
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-link"
                  >
                    Instagram
                  </a>
                )}
                {siteConfig.links.twitter && (
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-link"
                  >
                    Twitter / X
                  </a>
                )}
                {siteConfig.links.youtube && (
                  <a
                    href={siteConfig.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-link"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
