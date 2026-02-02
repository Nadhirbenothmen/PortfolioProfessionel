import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaMoon, FaSun, FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: t('nav.home'), path: '/', scroll: 'hero', icon: FaHome },
    { name: t('nav.about'), path: '/', scroll: 'about', icon: FaUser },
    { name: t('nav.education'), path: '/', scroll: 'education', icon: FaGraduationCap },
    { name: t('nav.skills'), path: '/', scroll: 'skills', icon: FaCode },
    { name: t('nav.projects'), path: '/', scroll: 'projects', icon: FaProjectDiagram },
    { name: t('nav.certifications'), path: '/', scroll: 'certifications', icon: FaCertificate },
    { name: t('nav.contact'), path: '/', scroll: 'contact', icon: FaEnvelope },
  ]

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Détecter si on a scrollé
      setIsScrolled(window.scrollY > 50)

      // Ne pas mettre à jour activeSection si on n'est pas sur la page d'accueil
      if (location.pathname !== '/') return

      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleNavigation = (link) => {
    setIsOpen(false)
    
    if (link.scroll) {
      // Si on est déjà sur la page d'accueil, on scroll directement
      if (location.pathname === '/') {
        const element = document.getElementById(link.scroll)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Sinon, on navigue vers la page d'accueil puis on scroll
        navigate('/')
        setTimeout(() => {
          const element = document.getElementById(link.scroll)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }

  return (
    <nav className={`backdrop-blur-sm fixed w-full top-0 z-50 border-b transition-all duration-300 ${
      isScrolled || activeSection !== 'hero' 
        ? 'bg-white/90 dark:bg-gray-900/90 border-gray-200 dark:border-gray-800' 
        : 'border-gray-100/10 dark:border-gray-800/10'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link 
            to="/" 
            onClick={() => {
              navigate('/')
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }, 100)
            }}
            className="hover:scale-105 transition-transform duration-300 flex-shrink-0"
          >
            <Logo className="w-40 h-12" />
          </Link>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              link.scroll ? (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link)}
                  className={`relative transition-colors duration-300 font-semibold group flex items-center gap-2 ${
                    activeSection === link.scroll 
                      ? 'text-primary dark:text-primary' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  <link.icon className="text-lg" />
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    activeSection === link.scroll ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`relative transition-colors duration-300 font-semibold group flex items-center gap-2 ${
                    location.pathname === link.path && !link.scroll
                      ? 'text-primary dark:text-primary' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  <link.icon className="text-lg" />
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    location.pathname === link.path && !link.scroll ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            ))}
          </div>
          
          {/* Right Side - Theme Toggle and Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="flex items-center justify-center px-3 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 border border-blue-200 dark:border-blue-700/50 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="text-xl text-yellow-500" /> : <FaMoon className="text-xl text-blue-600" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="flex items-center justify-center px-3 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 border border-blue-200 dark:border-blue-700/50 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="text-xl text-yellow-500" /> : <FaMoon className="text-xl text-blue-600" />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 shadow-lg"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              link.scroll ? (
                <motion.button
                  whileHover={{ x: 5 }}
                  key={link.name}
                  onClick={() => handleNavigation(link)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent dark:hover:from-blue-900/20 dark:hover:to-transparent rounded-xl transition-all duration-300 font-semibold"
                >
                  <link.icon className="text-xl" />
                  {link.name}
                </motion.button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setIsOpen(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent dark:hover:from-blue-900/20 dark:hover:to-transparent rounded-xl transition-all duration-300 font-semibold"
                >
                  <link.icon className="text-xl" />
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
