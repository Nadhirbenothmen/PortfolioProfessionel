import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'
import projects from '../data/projects'

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showAllTech, setShowAllTech] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-xs font-bold whitespace-nowrap ml-2">
            {project.category}
          </span>
        </div>
        
        {/* Date */}
        {project.date && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              📅 {project.date}
            </span>
          </div>
        )}
        
        <div className="text-gray-600 dark:text-gray-300 mb-4">
          <p className={isExpanded ? '' : 'line-clamp-3'}>
            {project.description}
          </p>
          {project.description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-accent font-medium text-sm mt-1 transition-colors"
            >
              {isExpanded ? 'Voir moins' : '... Voir plus'}
            </button>
          )}
        </div>


        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(showAllTech ? project.technologies : project.technologies.slice(0, 3)).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-lg text-sm font-medium hover:from-primary/20 hover:to-accent/20 transition-all cursor-pointer"
            >
              {showAllTech ? 'Voir moins' : `+${project.technologies.length - 3}`}
            </button>
          )}
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-4 border-t border-gray-100">
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.liveUrl ? 'flex-1' : 'w-full'} flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium`}
            >
              <FaGithub size={18} />
              <span>Code</span>
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.githubUrl ? 'flex-1' : 'w-full'} flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium`}
            >
              <FaExternalLinkAlt size={16} />
              <span>{project.linkType || 'Live'}</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', ...new Set(projects.map(project => project.category))]
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider"></span>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            Some of my recent work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
