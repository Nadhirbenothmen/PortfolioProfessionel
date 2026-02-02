import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TbFlame } from "react-icons/tb"; // style proche du logo PyTorch
import { 
  FaPython, FaDatabase, FaDocker, FaGitAlt, 
  FaAws, FaChartBar, FaServer, FaCogs, 
  FaPaintBrush, FaFileCode, FaJava, FaCode, 
  FaMicrosoft, FaChartLine, FaTable, FaLeaf, FaAngular, FaReact, FaBrain, FaClock, FaLinux, FaGithub, FaTachometerAlt, FaFileAlt
} from 'react-icons/fa'
import { 
  SiTensorflow, SiMongodb, SiPostgresql, 
  SiExpress, SiDjango, SiJupyter, SiMysql,
  SiOracle, SiSpringboot, SiDotnet, SiTypescript, SiTailwindcss, SiScikitlearn, SiPytorch, SiPandas, SiNumpy, SiTalend, SiSap,
  SiSonarqube
} from 'react-icons/si'
import { DiJenkins } from 'react-icons/di';

const Skills = () => {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('bi')
  
  const skillCategories = [
    {
      key: 'bi',
      color: 'from-yellow-500 to-yellow-600',
      icon: '📊',
      skills: [
        { name: 'Power BI', icon: FaChartLine, level: 95, color: '#F2C811' },
        { name: 'Talend', icon: SiTalend, level: 90, color: '#16B4E5' },
        { name: 'ETL / ELT', icon: FaCogs, level: 95, color: '#9B59B6' },
        { name: 'Data Modeling', icon: FaDatabase, level: 95, color: '#E74C3C' },
        { name: 'Reporting', icon: FaFileAlt, level: 90, color: '#27AE60' },
        { name: 'KPI Dashboards', icon: FaTachometerAlt, level: 95, color: '#E91E63' },
        { name: 'SSIS/SSAS', icon: FaMicrosoft, level: 90, color: '#CC2927' },
        { name: 'SAP', icon: SiSap, level: 65, color: '#0FAAFF' },
      ]
    },
    {
      key: 'dataScience',
      color: 'from-pink-500 to-pink-600',
      icon: '📊',
      skills: [
        { name: 'Pandas', icon: SiPandas, level: 95, color: '#150458' },
        { name: 'NumPy', icon: SiNumpy, level: 90, color: '#4DABCF' },
        { name: 'Jupyter', icon: SiJupyter, level: 80, color: '#F37626' },
        { name: 'Matplotlib / Seaborn', icon: FaChartBar, level: 85, color: '#11557C' },
      ]
    },
    {
      key: 'ai',
      color: 'from-purple-500 to-purple-600',
      icon: '🤖',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 80, color: '#FF6F00' },
        { name: 'PyTorch', icon: SiPytorch, level: 80, color: '#EE4C2C' },
        { name: 'Scikit-learn', icon: SiScikitlearn, level: 80, color: '#F7931E' },
        { name: 'Machine Learning', icon: FaBrain, level: 85, color: '#FF6B9D' },
        { name: 'Predictive Modeling', icon: FaChartLine, level: 85, color: '#4ECDC4' },
        { name: 'Feature Engineering', icon: FaCogs, level: 85, color: '#95E1D3' },
        { name: 'Time Series Forecasting', icon: FaClock, level: 80, color: '#C7CEEA' },
      ]
    },
    {
      key: 'databases',
      color: 'from-orange-500 to-orange-600',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 90, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, level: 90, color: '#4479A1' },
        { name: 'SQL Server', icon: FaMicrosoft, level: 85, color: '#CC2927' },
        { name: 'MongoDB', icon: SiMongodb, level: 90, color: '#47A248' },
        { name: 'Oracle', icon: SiOracle, level: 80, color: '#F80000' },
      ]
    },
    {
      key: 'frontend',
      color: 'from-blue-500 to-blue-600',
      icon: '💻',
      skills: [
        { name: 'React', icon: FaReact, level: 70, color: '#61DAFB' },
        { name: 'Angular', icon: FaAngular, level: 85, color: '#DD0031' },
        { name: 'TypeScript', icon: SiTypescript, level: 70, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80, color: '#06B6D4' },

      ]
    },
    {
      key: 'backend',
      color: 'from-green-500 to-green-600',
      icon: '📋',
      skills: [
        { name: 'Spring Boot', icon: SiSpringboot, level: 85, color: '#6DB33F' },
        { name: 'Python', icon: FaPython, level: 90, color: '#3776AB' },
        {name : 'Java', icon: FaJava, level: 80, color: '#007396' },
        { name: '.Net Core', icon: SiDotnet, level: 80, color: '#512BD4' },
        { name: 'Express.js', icon: SiExpress, level: 60, color: '#ebee52ff' },
        
      ]
    },
    {
      key: 'devops',
      color: 'from-orange-500 to-orange-600',
      icon: '⚙️',
      skills: [
        { name: 'Docker', icon: FaDocker, level: 90, color: '#2496ED' },
        { name: 'Git / GitHub', icon: FaGithub, level: 95, color: '#F05032' },
        { name: 'Linux', icon: FaLinux, level: 85, color: '#FCC624' },
        { name: 'CI/CD', icon: FaCogs, level: 70, color: '#5B9BD5' },
        { name: 'Jenkins', icon: DiJenkins, level: 70, color: '#D24939' },
        { name: 'SonarQube', icon: SiSonarqube, level: 70, color: '#4E9BCD' },
      ]
    },
    /* {
      title: 'Mobile Development',
      color: 'from-indigo-500 to-indigo-600',
      icon: '📱',
      skills: [
        { name: 'React Native', icon: FaReact, level: 70, color: '#61DAFB' },
        { name: 'Flutter', icon: FaCode, level: 65, color: '#02569B' },
      ]
    } */
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('skills.subtitle')}</span>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            {t('skills.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category.key
                  ? 'bg-gray-700 dark:bg-gray-800 text-white border-2 border-blue-500 shadow-lg shadow-blue-500/50'
                  : 'bg-gray-700 dark:bg-gray-800 text-gray-300 border-2 border-gray-600 dark:border-gray-700 hover:border-gray-500'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{t(`skills.categories.${category.key}`)}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Category Skills */}
        <div className="space-y-8">
          {skillCategories.map((category) => (
            (activeFilter === category.key) && (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-3xl p-8 shadow-2xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-4 bg-gray-700 dark:bg-gray-800 rounded-2xl">
                    <span className="text-4xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{t(`skills.categories.${category.key}`)}</h3>
                    <p className="text-gray-400 text-sm">{t('skills.categoryDescription')}</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-700 dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gray-600 dark:bg-gray-700 rounded-xl">
                          <skill.icon className="text-4xl" style={{ color: skill.color || '#FFFFFF' }} />
                        </div>
                        <span className="text-white font-bold text-xl">{skill.name}</span>
                      </div>
                      <span className="font-bold text-3xl text-yellow-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"
                      >
                      </motion.div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
                      <span>{t('skills.beginner')}</span>
                      <span>{t('skills.expert')}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
