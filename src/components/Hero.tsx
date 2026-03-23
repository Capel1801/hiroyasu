import { motion } from 'framer-motion'
import { siteConfig } from '../config/site'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 },
  },
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Top-right meta */}
      <motion.div
        className="hero-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <span className="hero-meta-label">{siteConfig.location}</span>
        <motion.div className="hero-meta-dot" variants={dotVariants} initial="hidden" animate="visible" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          {siteConfig.name}
        </motion.h1>
        <motion.p className="hero-tagline" variants={itemVariants}>
          {siteConfig.tagline}
        </motion.p>
        <motion.div className="hero-scroll" variants={itemVariants}>
          <div className="hero-scroll-line" />
          <span className="hero-scroll-label">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
