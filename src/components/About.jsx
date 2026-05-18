import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Rocket, Users } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Чистый код',
    description: 'Пишу масштабируемый, поддерживаемый и оптимизированный код',
  },
  {
    icon: Palette,
    title: 'Современный дизайн',
    description: 'Создаю интуитивные интерфейсы с вниманием к деталям',
  },
  {
    icon: Rocket,
    title: 'Высокая производительность',
    description: 'Оптимизирую приложения для максимальной скорости',
  },
  {
    icon: Users,
    title: 'Командная работа',
    description: 'Эффективно работаю в команде и коммуницирую с клиентами',
  },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
              Обо мне
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Превращаю идеи в{' '}
              <span className="text-gradient">реальность</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Я Frontend-разработчик с более чем 5-летним опытом создания современных
              веб-приложений. Специализируюсь на React, TypeScript и современных
              фреймворках. Моя цель — создавать продукты, которые не только красиво
              выглядят, но и решают реальные проблемы пользователей.
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
              { value: '5+', label: 'Лет опыта' },
              { value: '50+', label: 'Проектов' },
              { value: '30+', label: 'Клиентов' },
              { value: '100%', label: 'Удовлетворённость' },
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
