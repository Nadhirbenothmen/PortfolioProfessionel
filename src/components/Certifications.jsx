import { motion } from 'framer-motion'
import { FaAward, FaCertificate, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa'
import certifications from '../data/certifications'

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Professional Credentials</span>
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 mt-2">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Industry-recognized certifications validating my expertise in cloud computing, data engineering, and machine learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Certificate Image */}
              <div className="relative h-80 bg-white dark:bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className="hidden items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <FaCertificate className="text-6xl text-primary opacity-50" />
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                  <FaAward className="text-2xl text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span className="font-semibold">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <span>{cert.date}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Credential ID</p>
                    <p className="text-sm font-mono text-gray-900 dark:text-white">{cert.credentialId}</p>
                  </div>
                )}

                {/* View Certificate Link */}
                <a 
                  href={cert.certificateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                >
                  <span className="font-semibold">View Certificate</span>
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
