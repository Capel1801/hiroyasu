import { siteConfig } from '../config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <span className="footer-copy">
        &copy; {year} {siteConfig.name}
      </span>
      <span className="footer-built">
        Built with Vite + React
      </span>
    </footer>
  )
}
