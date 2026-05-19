import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Rocket, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      icon: Code2,
      title: t.about.features.code.title,
      description: t.about.features.code.description,
    },
    {
      icon: Palette,
      title: t.about.features.design.title,
      description: t.about.features.design.description,
    },
    {
      icon: Rocket,
      title: t.about.features.performance.title,
      description: t.about.features.performance.description,
    },
    {
      icon: Users,
      title: t.about.features.teamwork.title,
      description: t.about.features.teamwork.description,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" ref={ref} className="relative section-padding bg-dark-900/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-primary-400 text-sm font-medium mb-4">
              {t.about.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.about.title}{' '}
              <span className="text-gradient">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-3xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 p-3 bg-primary-500/10 rounded-xl w-fit group-hover:bg-primary-500/20 transition-colors">
                  <feature.icon className="text-primary-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark-50">
                  {feature.title}
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '5+', label: t.about.stats.experience },
              { value: '50+', label: t.about.stats.projects },
              { value: '30+', label: t.about.stats.clients },
              { value: '100%', label: t.about.stats.satisfaction },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 glass-effect rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
