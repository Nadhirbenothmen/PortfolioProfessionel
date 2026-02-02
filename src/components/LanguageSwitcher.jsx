import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaGlobe, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showSwitching, setShowSwitching] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', shortName: 'EN' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', shortName: 'FR' }
  ];

  const toggleLanguage = () => {
    // Alterner entre EN et FR
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    const language = languages.find(l => l.code === newLang);
    
    setSelectedLang(language);
    
    // Afficher la notification de basculement
    setShowSwitching(true);
    
    // Changer la langue après 1.5 seconde
    setTimeout(() => {
      i18n.changeLanguage(newLang);
      localStorage.setItem('language', newLang);
      setShowSwitching(false);
      
      // Afficher la notification de complétion
      setShowCompleted(true);
      
      // Masquer la notification de complétion après 2 secondes
      setTimeout(() => {
        setShowCompleted(false);
      }, 2000);
    }, 1500);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 border border-blue-200 dark:border-blue-700/50 transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <FaGlobe className="text-lg text-blue-600 dark:text-blue-400" />
        <span className="text-base font-bold text-gray-700 dark:text-gray-300">
          {currentLanguage.shortName}
        </span>
      </motion.button>
      
      {/* Fond flou pour les notifications */}
      <AnimatePresence>
        {(showSwitching || showCompleted) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
          />
        )}
      </AnimatePresence>
      
      {/* Notification de basculement */}
      <AnimatePresence>
        {showSwitching && selectedLang && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none"
          >
            <div className="bg-gray-900/95 dark:bg-gray-800/95 rounded-2xl shadow-2xl border border-gray-700/50 px-10 py-8 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center text-center gap-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 flex items-center justify-center shadow-lg relative">
                    <FaGlobe className="text-white text-4xl" />
                    <span className="absolute -top-1 -right-1 text-3xl">🌐</span>
                  </div>
                </motion.div>
                
                <div className="flex flex-col items-center gap-3">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold text-white"
                  >
                    Changement de langue
                  </motion.h3>
                  
                  {/* Barre de progression */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 rounded-full origin-left"
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-gray-300 font-medium"
                  >
                    Basculement vers {selectedLang.name}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Notification de complétion */}
      <AnimatePresence>
        {showCompleted && selectedLang && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none"
          >
            <div className="bg-gray-900/95 dark:bg-gray-800/95 rounded-2xl shadow-2xl border border-gray-700/50 px-10 py-8 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center text-center gap-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
                    <FaCheckCircle className="text-white text-4xl" />
                  </div>
                </motion.div>
                
                <div className="flex flex-col items-center gap-2">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold text-white"
                  >
                    Terminé !
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-gray-300 font-medium"
                  >
                    Langue changée vers {selectedLang.shortName} {selectedLang.name}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LanguageSwitcher;
