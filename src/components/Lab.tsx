import { motion } from 'framer-motion'
import { labItems } from '../data/lab'

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Lab() {
  return (
    <section id="lab" className="section">
      <div className="section-header">
        <span className="section-label">Lab / Archive</span>
      </div>

      <motion.div
        className="lab-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {labItems.map(item => (
          <motion.div key={item.id} className="lab-item" variants={itemVariants}>
            <div className="lab-thumbnail">
              {item.thumbnailUrl ? (
                <img src={item.thumbnailUrl} alt={item.title} loading="lazy" />
              ) : (
                <div className="lab-thumbnail-placeholder">
                  {item.date}
                </div>
              )}
            </div>
            <div className="lab-meta">
              <span className="lab-title">{item.title}</span>
              {item.description && (
                <span className="lab-desc">{item.description}</span>
              )}
              <span className="lab-date">{item.date}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
