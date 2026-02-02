import { motion } from 'framer-motion'
import { FaChartBar, FaCode, FaBrain, FaDatabase, FaBriefcase, FaUsers, FaCalendarAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import projects from '../data/projects'

const About = () => {
  const { t } = useTranslation()
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('about.subtitle')}</span>
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 mt-2">
            {t('about.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Photo Area avec badge et icônes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Profile Image avec badge */}
            <div className="relative">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 dark:border-gray-600 shadow-2xl">
                <img 
                  src="/assets/profile-pic.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{t('about.badge1')}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{t('about.badge2')}</p>
              </motion.div>
            </div>

            {/* Icônes des compétences */}
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-2xl border border-yellow-500/30"
              >
                <FaChartBar className="text-2xl text-yellow-500" />
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl border border-blue-500/30"
              >
                <FaCode className="text-2xl text-blue-500" />
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl border border-purple-500/30"
              >
                <FaBrain className="text-2xl text-purple-500" />
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-red-500/10 dark:bg-red-500/20 rounded-2xl border border-red-500/30"
              >
                <FaDatabase className="text-2xl text-red-500" />
              </motion.div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 text-center"
              >
                <FaCalendarAlt className="text-3xl text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                <p className="text-3xl font-bold text-yellow-500">3+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('about.stat1')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 text-center"
              >
                <FaBriefcase className="text-3xl text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-500">{projects.length}+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('about.stat2')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 text-center"
              >
                <FaUsers className="text-3xl text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                <p className="text-3xl font-bold text-gray-500">4+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('about.stat3')}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Nom et titre */}
            <div className="mb-6">
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight">
                {t('about.name')}
              </h3>
              <p className="text-base font-medium text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                {t('about.role')}
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-white leading-relaxed font-normal">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-gray-700 dark:text-white leading-relaxed font-normal">
              {t('about.paragraph2')}
            </p>
            <p className="text-lg text-gray-700 dark:text-white leading-relaxed font-normal">
              {t('about.paragraph3')}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg"
              >
                {t('about.tag1')}
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg"
              >
                {t('about.tag2')}
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
              >
                {t('about.tag3')}
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
