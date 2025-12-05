# 🎨 Guide de Personnalisation Rapide

## ✅ Étapes à Suivre

### 1. Informations Personnelles

**Fichier: `src/components/Hero.jsx`**
- Ligne 20: Remplacez `"Your Name"` par votre nom
- Lignes 40-56: Mettez à jour vos liens sociaux (GitHub, LinkedIn, Email)

**Fichier: `src/components/About.jsx`**
- Lignes 37-52: Remplacez le texte par votre propre biographie
- Ligne 18-24: Ajoutez votre photo (remplacez le placeholder)

**Fichier: `src/components/Contact.jsx`**
- Lignes 52-70: Mettez à jour votre email, téléphone et localisation
- Lignes 81-102: Actualisez vos liens sociaux

**Fichier: `src/components/Footer.jsx`**
- Ligne 10: Changez la description
- Lignes 35-56: Mettez à jour les liens sociaux

### 2. Compétences

**Fichier: `src/components/Skills.jsx`**
- Lignes 14-59: Modifiez les catégories et compétences selon votre expertise
- Ajoutez/supprimez des technologies
- Changez les icônes si nécessaire

### 3. Projets

**Fichier: `src/data/projects.js`**
- Remplacez les 6 projets exemples par vos vrais projets
- Pour chaque projet, remplissez:
  - `title`: Titre du projet
  - `description`: Description détaillée
  - `image`: URL de l'image (utilisez https://unsplash.com pour des images gratuites)
  - `technologies`: Liste des technologies utilisées
  - `githubUrl`: Lien vers le repo GitHub
  - `liveUrl`: Lien vers le site en ligne
  - `category`: "Full-Stack", "Frontend", "Backend", "Data", ou "AI"

### 4. Images

**Pour ajouter votre photo:**
1. Placez votre photo dans `public/` (ex: `public/profile.jpg`)
2. Dans `src/components/About.jsx`, ligne 18-24, remplacez par:
```jsx
<img 
  src="/profile.jpg" 
  alt="Your Name" 
  className="w-72 h-72 rounded-full object-cover"
/>
```

**Pour les images de projets:**
1. Placez les images dans `public/projects/`
2. Dans `src/data/projects.js`, utilisez: `image: "/projects/nom-projet.jpg"`

### 5. Couleurs (Optionnel)

**Fichier: `tailwind.config.js`**
- Ligne 8: `primary: '#0F7FFF'` - Couleur principale (bleu)
- Ligne 9: `accent: '#FF8C42'` - Couleur d'accentuation (orange)
- Ligne 10: `background: '#FFFFFF'` - Couleur de fond

### 6. Formulaire de Contact

**Option 1: EmailJS (Recommandé)**
1. Créez un compte sur https://www.emailjs.com/
2. Installez: `npm install @emailjs/browser`
3. Dans `src/components/Contact.jsx`, ligne 17, ajoutez:
```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Message envoyé avec succès!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  })
  .catch(() => {
    alert('Erreur lors de l\'envoi.')
  })
}
```

**Option 2: Formspree**
1. Créez un compte sur https://formspree.io/
2. Dans `src/components/Contact.jsx`, ligne 95, ajoutez:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 7. SEO et Meta Tags

**Fichier: `index.html`**
- Ligne 6: Changez le titre
- Ajoutez des meta tags pour le SEO:
```html
<meta name="description" content="Portfolio de [Votre Nom] - Full-Stack & Data Engineer">
<meta name="keywords" content="développeur, full-stack, data engineer, react, python">
<meta name="author" content="[Votre Nom]">
```

### 8. Déploiement

**Vercel (Gratuit et Facile)**
```bash
npm install -g vercel
npm run build
vercel --prod
```

**Netlify**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**GitHub Pages**
1. Installez: `npm install gh-pages --save-dev`
2. Dans `package.json`, ajoutez:
```json
"homepage": "https://votre-username.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Déployez: `npm run deploy`

## 📱 Tester la Réactivité

Ouvrez le navigateur et testez:
- Chrome DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)
- Testez sur: Mobile (375px), Tablet (768px), Desktop (1920px)

## 🎯 Checklist Finale

- [ ] Nom et titre mis à jour
- [ ] Biographie personnalisée
- [ ] Photo de profil ajoutée
- [ ] Compétences mises à jour
- [ ] Au moins 3-6 projets réels ajoutés
- [ ] Images de projets ajoutées
- [ ] Informations de contact mises à jour
- [ ] Liens sociaux fonctionnels
- [ ] Formulaire de contact configuré
- [ ] Testé sur mobile et desktop
- [ ] SEO optimisé
- [ ] Déployé en ligne

## 🚀 Commandes Utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview

# Installer une nouvelle dépendance
npm install nom-package
```

## 💡 Conseils

1. **Images**: Utilisez des images optimisées (< 500KB)
2. **Performance**: Testez sur https://pagespeed.web.dev/
3. **Accessibilité**: Vérifiez les contrastes de couleurs
4. **SEO**: Utilisez des descriptions pertinentes
5. **Mobile First**: Testez d'abord sur mobile

## 🆘 Besoin d'Aide?

- Documentation React: https://react.dev/
- Documentation Tailwind: https://tailwindcss.com/
- Documentation Framer Motion: https://www.framer.com/motion/
- Stack Overflow: https://stackoverflow.com/

---

**Bon courage pour la personnalisation de votre portfolio! 🚀**
