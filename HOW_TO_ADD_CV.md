# 📄 Comment Ajouter Votre CV

## Option 1: Ajouter votre propre CV PDF

1. **Créez ou exportez votre CV en format PDF**
   - Utilisez Word, Google Docs, Canva, ou un autre outil
   - Exportez en PDF

2. **Renommez le fichier**
   - Nommez-le exactement: `cv.pdf`

3. **Placez-le dans le dossier public**
   ```
   PORTFOLIO_PROF/
   └── public/
       └── cv.pdf  ← Placez votre CV ici
   ```

4. **Le bouton fonctionnera automatiquement**
   - Le bouton "Download CV" téléchargera votre CV
   - Avec le nom: "Nadhir_Ben_Othmen_CV.pdf"

## Option 2: Utiliser un CV en ligne

Si vous préférez lier vers votre CV hébergé ailleurs (Google Drive, Dropbox, etc.):

1. **Uploadez votre CV sur un service cloud**
2. **Obtenez un lien de téléchargement direct**
3. **Modifiez le fichier Hero.jsx**
   - Ligne ~125: Remplacez `href="/cv.pdf"` par votre lien

Exemple:
```jsx
href="https://drive.google.com/uc?export=download&id=VOTRE_ID"
```

## Option 3: Créer un CV temporaire

Pour tester, vous pouvez:
1. Créer un document texte simple
2. Le convertir en PDF
3. Le placer dans `public/cv.pdf`

---

**Note**: Le fichier doit être dans `public/` pour être accessible publiquement.
