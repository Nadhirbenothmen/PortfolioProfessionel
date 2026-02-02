# Guide d'utilisation i18n (Français/Anglais)

## Configuration complétée ✅

Le système de traduction FR/EN est maintenant intégré dans votre portfolio !

## Comment utiliser les traductions dans vos composants

### 1. Importer useTranslation
```jsx
import { useTranslation } from 'react-i18next';
```

### 2. Utiliser le hook dans votre composant
```jsx
const MonComposant = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.greeting')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
};
```

## Fichiers de traduction

### Anglais (en.json)
- Fichier: `src/i18n/locales/en.json`

### Français (fr.json)
- Fichier: `src/i18n/locales/fr.json`

## Clés de traduction disponibles

### Navigation
- `nav.home` - Accueil / Home
- `nav.about` - À propos / About
- `nav.skills` - Compétences / Skills
- `nav.education` - Formation / Education
- `nav.certifications` - Certifications
- `nav.projects` - Projets / Projects
- `nav.contact` - Contact

### Hero Section
- `hero.greeting` - Bonjour, je suis / Hello, I'm
- `hero.description` - Description
- `hero.downloadCV` - Télécharger CV / Download CV
- `hero.contactMe` - Me Contacter / Contact Me

### About
- `about.title` - À Propos / About Me
- `about.subtitle` - Sous-titre

### Skills
- `skills.title` - Compétences / Skills
- `skills.subtitle` - Technologies que je maîtrise / Technologies I work with

### Education
- `education.title` - Formation / Education
- `education.subtitle` - Mon parcours académique / My academic journey
- `education.present` - Présent / Present

### Certifications
- `certifications.title` - Certifications
- `certifications.subtitle` - Certifications professionnelles
- `certifications.viewCertificate` - Voir le Certificat / View Certificate

### Projects
- `projects.title` - Projets / Projects
- `projects.subtitle` - Quelques-uns de mes travaux récents
- `projects.viewProject` - Voir le Projet / View Project
- `projects.viewCode` - Voir le Code / View Code
- `projects.technologies` - Technologies

### Contact
- `contact.title` - Entrer en Contact / Get In Touch
- `contact.subtitle` - N'hésitez pas à me contacter
- `contact.name` - Nom / Name
- `contact.email` - Email
- `contact.message` - Message
- `contact.send` - Envoyer / Send Message
- `contact.sending` - Envoi en cours... / Sending...
- `contact.success` - Message envoyé avec succès !
- `contact.error` - Échec de l'envoi
- `contact.namePlaceholder` - Votre Nom / Your Name
- `contact.emailPlaceholder` - Votre email
- `contact.messagePlaceholder` - Votre message

### Footer
- `footer.rights` - Tous droits réservés / All rights reserved
- `footer.madeWith` - Fait avec / Made with
- `footer.by` - par / by

### Stats
- `stats.yearsExperience` - Années d'Expérience / Years Experience
- `stats.projectsCompleted` - Projets Réalisés / Projects Completed
- `stats.technologies` - Technologies
- `stats.certifications` - Certifications

### Common
- `common.loading` - Chargement... / Loading...
- `common.error` - Erreur / Error
- `common.readMore` - Lire Plus / Read More
- `common.learnMore` - En Savoir Plus / Learn More

## Exemple d'intégration dans un composant

```jsx
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="hero">
      <h1>{t('hero.greeting')} John Doe</h1>
      <p>{t('hero.description')}</p>
      <button>{t('hero.downloadCV')}</button>
      <button>{t('hero.contactMe')}</button>
    </section>
  );
};

export default Hero;
```

## Ajouter une nouvelle traduction

1. Ouvrez `src/i18n/locales/en.json`
2. Ajoutez votre clé : `"mySection.myKey": "English text"`
3. Ouvrez `src/i18n/locales/fr.json`
4. Ajoutez la même clé : `"mySection.myKey": "Texte français"`
5. Utilisez dans votre composant : `{t('mySection.myKey')}`

## Changement de langue

Le changement de langue se fait automatiquement via le composant `LanguageSwitcher` présent dans la Navbar.

La langue sélectionnée est sauvegardée dans `localStorage` et sera automatiquement restaurée lors de la prochaine visite.

## Composants à mettre à jour

Pour que tout votre portfolio soit traduit, mettez à jour ces composants :

- ✅ **Navbar.jsx** - Déjà mis à jour
- ⏳ **Hero.jsx** - À mettre à jour
- ⏳ **About.jsx** - À mettre à jour
- ⏳ **Skills.jsx** - À mettre à jour
- ⏳ **Education.jsx** - À mettre à jour
- ⏳ **Certifications.jsx** - À mettre à jour
- ⏳ **Projects.jsx** - À mettre à jour
- ⏳ **Contact.jsx** - À mettre à jour
- ⏳ **Footer.jsx** - À mettre à jour
- ⏳ **Stats.jsx** - À mettre à jour

Remplacez les textes en dur par `{t('translation.key')}` dans chaque composant !
