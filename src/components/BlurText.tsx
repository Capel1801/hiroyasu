import { useEffect, useRef, useState, createElement } from 'react'
import { motion } from 'framer-motion'

type BlurTextProps = {
  text: string
  className?: string
  delay?: number      // ms between words
  as?: keyof React.JSX.IntrinsicElements
}

export default function BlurText({ text, className = '', delay = 90, as = 'div' }: BlurTextProps) {
  const words = text.split(' ')
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return createElement(
    as,
    { ref, className },
    words.map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
        animate={visible ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
        transition={{
          duration: 0.65,
          delay: i * (delay / 1000),
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ display: 'inline-block', marginRight: '0.28em' }}
      >
        {word}
      </motion.span>
    ))
  )
}
