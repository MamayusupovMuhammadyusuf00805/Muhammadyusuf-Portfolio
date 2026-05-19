import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const skillCategories = [
  {
    key: 'frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Three.js', level: 80 },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'REST API', level: 90 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    key: 'tools',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 80 },
      { name: 'Webpack', level: 85 },
      { name: 'Vite', level: 88 },
      { name: 'Jest', level: 82 },
      { name: 'Figma', level: 90 },
    ],
  },
]

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-dark-100 font-medium">{skill.name}</span>
        <span className="text-primary-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full relative"
        >
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { language } = useLanguage()
  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="skills" ref={ref} className="relative section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-primary-400 text-sm font-medium mb-4">
              {t.skills.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.skills.title}{' '}
              <span className="text-gradient">{t.skills.titleHighlight}</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-3xl mx-auto leading-relaxed">
              {t.skills.description}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-8 text-gradient">
                  {t.skills.categories[category.key]}
                </h3>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center glass-effect rounded-2xl p-8"
          >
            <p className="text-dark-300 text-lg leading-relaxed">
              {t.skills.additional}{' '}
              <span className="text-primary-400 font-semibold">
                {t.skills.additionalTools}
              </span>{' '}
              {t.skills.additionalText}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
