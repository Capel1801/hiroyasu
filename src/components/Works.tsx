import { motion } from 'framer-motion'
import { works } from '../data/works'

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Works() {
  return (
    <section id="works" className="section">
      <div className="section-header">
        <span className="section-label">Selected Works</span>
      </div>

      <motion.div
        className="works-list"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {works.map(work => (
          <motion.article key={work.id} className="work-item" variants={itemVariants}>
            <span className="work-index">{work.index}</span>

            <div className="work-body">
              <h2 className="work-title">{work.title}</h2>
              {work.subtitle && (
                <p className="work-subtitle">{work.subtitle}</p>
              )}
              <p className="work-description">{work.description}</p>
              <div className="work-tags">
                {work.tags.map(tag => (
                  <span key={tag} className="work-tag">{tag}</span>
                ))}
              </div>
            </div>

            <span className="work-year">{work.year}</span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
