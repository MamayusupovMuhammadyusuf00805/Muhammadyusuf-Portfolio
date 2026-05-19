import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const projectsData = [
  {
    key: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: 'https://exclusive-figma-sigma.vercel.app',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    key: 'aiChat',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop',
    tags: ['Next.js', 'OpenAI', 'Socket.io', 'Tailwind'],
    github: '#',
    demo: 'https://exclusive-figma-sigma.vercel.app',
    color: 'from-purple-500 to-pink-500',
  },
  {
    key: 'dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
    github: '#',
    demo: 'https://exclusive-figma-sigma.vercel.app',
    color: 'from-green-500 to-emerald-500',
  },
  {
    key: 'social',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React', 'GraphQL', 'PostgreSQL', 'AWS'],
    github: '#',
    demo: 'https://exclusive-figma-sigma.vercel.app',
    color: 'from-orange-500 to-red-500',
  },
  {
    key: 'fitness',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    github: '#',
    demo: 'https://exclusive-figma-sigma.vercel.app',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    key: 'weather',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Weather API', 'Mapbox', 'Tailwind'],
    github: '#',
    demo: 'https://exclusive-figma-sigma.vercel.app',
    color: 'from-cyan-500 to-blue-500',
  },
]

const ProjectCard = ({ project, index, t }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative glass-effect rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
        />
        
        {/* Overlay Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-4"
        >
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} className="text-white" />
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            aria-label="Demo"
          >
            <ExternalLink size={24} className="text-white" />
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-dark-50 group-hover:text-primary-400 transition-colors">
          {t.projects.items[project.key].title}
        </h3>
        <p className="text-dark-300 mb-4 leading-relaxed">
          {t.projects.items[project.key].description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="projects" ref={ref} className="relative section-padding bg-dark-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-primary-400 text-sm font-medium mb-4">
            {t.projects.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t.projects.title}{' '}
            <span className="text-gradient">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto leading-relaxed">
            {t.projects.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} t={t} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-dark-300 mb-6">
            {t.projects.seeMore}
          </p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 glass-effect rounded-full text-dark-100 font-semibold hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Github size={20} />
            {t.projects.visitGithub}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
