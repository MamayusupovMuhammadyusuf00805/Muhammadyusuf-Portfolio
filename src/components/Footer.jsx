import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#contact', label: 'Email' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="relative bg-dark-900/50 border-t border-white/5">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Portfolio</h3>
            <p className="text-dark-300 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-dark-100 mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {[
                { key: 'home', href: '#home' },
                { key: 'about', href: '#about' },
                { key: 'skills', href: '#skills' },
                { key: 'projects', href: '#projects' },
                { key: 'contact', href: '#contact' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-dark-100 mb-4">
              {t.footer.social}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-effect rounded-lg hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-sm text-center sm:text-left">
            © {currentYear} Portfolio. {t.footer.rights}
          </p>
          <p className="text-dark-400 text-sm flex items-center gap-1">
            {t.footer.madeWith} <Heart size={16} className="text-red-500" /> {t.footer.and}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
