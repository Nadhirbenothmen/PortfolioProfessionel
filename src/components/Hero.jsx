import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown, FaPython, FaDatabase, FaDocker, FaReact, FaAngular, FaChartBar, FaJava, FaBrain, FaChartLine, FaTable, FaChartPie, FaServer, FaChartArea, FaMicrosoft } from 'react-icons/fa'
import { SiTensorflow, SiMongodb, SiPostgresql, SiPytorch, SiTalend, SiMysql, SiOracle, SiTableau } from 'react-icons/si'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t, i18n } = useTranslation()
  
  // Get CV path based on current language
  const cvPath = i18n.language === 'fr' ? '/Nadhir-BENOTHMEN-CV-FR.pdf' : '/Nadhir-BENOTHMEN-CV-EN.pdf'
  const cvFileName = i18n.language === 'fr' ? 'Nadhir_BEN_OTHMEN_CV-FR.pdf' : 'Nadhir_BEN_OTHMEN_CV-EN.pdf'
  
  // Floating icons data
  const floatingIcons = [
    { Icon: FaPython, color: '#3776AB', size: 40, delay: 0, duration: 20, x: '10%', y: '15%' },
    { Icon: SiTensorflow, color: '#FF6F00', size: 35, delay: 2, duration: 25, x: '85%', y: '20%' },
    { Icon: FaReact, color: '#61DAFB', size: 38, delay: 1, duration: 22, x: '15%', y: '70%' },
    { Icon: SiMongodb, color: '#47A248', size: 36, delay: 3, duration: 24, x: '90%', y: '60%' },
    { Icon: FaDatabase, color: '#4169E1', size: 34, delay: 4, duration: 23, x: '8%', y: '45%' },
    { Icon: FaChartLine, color: '#F2C811', size: 40, delay: 1.5, duration: 21, x: '92%', y: '85%' },
    { Icon: FaDocker, color: '#2496ED', size: 37, delay: 2.5, duration: 26, x: '12%', y: '88%' },
    { Icon: FaAngular, color: '#DD0031', size: 35, delay: 3.5, duration: 24, x: '88%', y: '40%' },
    { Icon: FaBrain, color: '#FF6B9D', size: 36, delay: 0.5, duration: 22, x: '5%', y: '30%' },
    { Icon: SiPytorch, color: '#EE4C2C', size: 34, delay: 4.5, duration: 25, x: '95%', y: '75%' },
    { Icon: FaChartBar, color: '#27AE60', size: 33, delay: 1.8, duration: 23, x: '7%', y: '60%' },
    { Icon: SiTalend, color: '#16B4E5', size: 35, delay: 3.2, duration: 24, x: '93%', y: '30%' },
    { Icon: SiPostgresql, color: '#4169E1', size: 38, delay: 2.8, duration: 22, x: '18%', y: '25%' },
    { Icon: SiMysql, color: '#4479A1', size: 36, delay: 1.2, duration: 24, x: '82%', y: '55%' },
    { Icon: FaTable, color: '#34A853', size: 34, delay: 3.8, duration: 23, x: '14%', y: '50%' },
    { Icon: FaChartPie, color: '#EA4335', size: 35, delay: 0.8, duration: 21, x: '88%', y: '70%' },
    { Icon: FaMicrosoft, color: '#CC2927', size: 37, delay: 4.2, duration: 25, x: '6%', y: '75%' },
    { Icon: FaServer, color: '#0078D4', size: 33, delay: 2.2, duration: 22, x: '94%', y: '50%' },
    { Icon: FaChartArea, color: '#FBBC04', size: 35, delay: 1.6, duration: 24, x: '10%', y: '82%' },
    { Icon: SiTableau, color: '#E97627', size: 36, delay: 3.6, duration: 23, x: '90%', y: '15%' },
  ]
  const subtitles = [
    'Building Scalable Solutions',
    'Data-Driven Insights',
    'Full-Stack Development',
    'AI & Machine Learning'
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Enhanced Professional Universe Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#1a1f35] to-[#0d1117]">
        {/* Deep Space Layer - Distant Stars */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <div
              key={`star-distant-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 1 + 0.3 + 'px',
                height: Math.random() * 1 + 0.3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>
        
        {/* Main Stars Layer - Twinkling */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={`star-main-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2.5 + 0.8 + 'px',
                height: Math.random() * 2.5 + 0.8 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.6 + 0.3,
                boxShadow: '0 0 4px rgba(255,255,255,0.8)',
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Bright Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`star-bright-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: '3px',
                height: '3px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: 0.9,
                boxShadow: '0 0 6px rgba(255,255,255,1), 0 0 12px rgba(147,197,253,0.5)',
                animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Shooting Stars - More Visible */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`shooting-${i}`}
              className="absolute"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 60 + '%',
                animation: `shooting-star ${Math.random() * 4 + 5}s linear infinite`,
                animationDelay: `${i * 2}s`
              }}
            >
              <div className="w-[2px] h-[2px] bg-white rounded-full"
                   style={{
                     boxShadow: '0 0 6px 3px rgba(255,255,255,0.9), 0 0 12px 6px rgba(147,197,253,0.6), -30px 30px 20px 2px rgba(255,255,255,0.3), -60px 60px 30px 1px rgba(147,197,253,0.2)'
                   }}
              ></div>
            </div>
          ))}
        </div>
        
        {/* Nebula Clouds - Rich Colors */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/25 via-purple-600/15 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-cyan-600/15 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/15 via-pink-600/10 to-transparent rounded-full filter blur-3xl" style={{ animation: 'pulse-glow 18s ease-in-out infinite', animationDelay: '6s' }}></div>
        </div>
        
        {/* Floating Planets/Orbs */}
        <div className="absolute top-20 right-[12%] w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/40 to-red-600/30 opacity-50 filter blur-sm animate-float" style={{ animationDuration: '10s', boxShadow: '0 0 40px rgba(249,115,22,0.3)' }}></div>
        <div className="absolute bottom-28 left-[8%] w-14 h-14 rounded-full bg-gradient-to-br from-blue-400/45 to-cyan-500/35 opacity-55 filter blur-sm animate-float" style={{ animationDuration: '12s', animationDelay: '2s', boxShadow: '0 0 35px rgba(59,130,246,0.3)' }}></div>
        <div className="absolute top-[40%] left-[88%] w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/40 to-pink-500/30 opacity-45 filter blur-sm animate-float" style={{ animationDuration: '14s', animationDelay: '4s', boxShadow: '0 0 30px rgba(168,85,247,0.25)' }}></div>
        
        {/* Advanced Reflection/Shine Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
          <div className="absolute top-[-50%] left-[-25%] w-[150%] h-[150%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 animate-shine"></div>
          <div className="absolute top-[20%] right-[-30%] w-[100%] h-[100%] bg-gradient-to-bl from-blue-300/12 via-transparent to-transparent rotate-[-30deg] animate-shine" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
          <div className="absolute bottom-[-10%] left-[5%] w-[80%] h-[80%] bg-gradient-to-tr from-indigo-300/10 via-transparent to-transparent rotate-12 animate-shine" style={{ animationDelay: '5s', animationDuration: '12s' }}></div>
        </div>
        
        {/* Professional Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.015]" 
             style={{
               backgroundImage: `
                 linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
               `,
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>

      {/* Floating Skills Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-60 hover:opacity-90 transition-opacity duration-300"
            style={{
              left: item.x,
              top: item.y,
              color: item.color,
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 30px currentColor)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        ))}
      </div>

      {/* Profile Image - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-0 top-0 h-full w-1/2 hidden md:flex md:items-center md:justify-center pt-16 px-4"
      >
        <img 
          src="/assets/BG.png" 
          alt="Nadhir Ben Othmen" 
          className="w-auto h-full object-contain"
        />
      </motion.div>

      <div className="relative w-full md:w-1/2 px-8 sm:px-12 lg:px-20 py-20">
          {/* Left Side - Text Content */}
          <div className="text-left">
          {/* Animated Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-accent text-sm md:text-base font-semibold uppercase tracking-widest mb-3 block">{t('hero.greeting')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-1 whitespace-nowrap">
              {t('hero.iAm')} <span className="text-primary">{t('hero.name')}</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl font-semibold text-white mb-4"
          >
            {t('hero.title')}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-4 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Nadhirbenothmen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl text-gray-800 hover:text-primary transition-all duration-300"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/nadhir-ben-othmen-a58604202/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl text-gray-800 hover:text-primary transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:nadhirbenothmen12@gmail.com"
              className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl text-gray-800 hover:text-accent transition-all duration-300"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300"
            >
              {t('hero.viewProjects')}
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={cvPath}
              download={cvFileName}
              className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload size={18} />
              {t('hero.downloadCV')}
            </motion.a>
          </motion.div>
          </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm font-semibold mb-2">{t('hero.scrollDown')}</span>
          <FaChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
