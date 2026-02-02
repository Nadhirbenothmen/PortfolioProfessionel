import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaBook } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import education from '../data/education'

const Education = () => {
  const { t } = useTranslation()
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('education.subtitle')}</span>
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 mt-2">
            {t('education.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            {t('education.description')}
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Degree Badge */}
              <div className="absolute -top-4 -left-4 z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <FaGraduationCap className="text-white text-2xl transform -rotate-12" />
                </div>
              </div>

              {/* Main Card */}
              <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary">
                {/* Header with Gradient */}
                <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-8 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                        {index === 0 ? t('education.engineerDegree') : t('education.bachelorDegree')}
                      </span>
                      <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                        {t(`education.degree${index + 1}`)}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
                        <FaUniversity className="text-primary text-lg" />
                      </div>
                      <span className="font-bold text-lg">{t(`education.institution${index + 1}`)}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 ml-11">
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-primary" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-primary" />
                        <span className="font-semibold">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 pt-6">
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>      
      </div>
    </section>
  )
}

export default Education
