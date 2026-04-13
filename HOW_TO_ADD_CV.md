# 📄 Comment Ajouter Vos CV (FR/EN)

## Option 1: Ajouter vos deux CV PDF

1. **Créez ou exportez vos CV en format PDF**
   - Version française
   - Version anglaise

2. **Renommez les fichiers exactement comme suit**
   - `NadhirCV_data.pdf` (FR)
   - `NadhirCV_data_EN.pdf` (EN)

3. **Placez-les dans le dossier public**

   ```text
   PORTFOLIO_PROF/
   └── public/
       ├── NadhirCV_data.pdf      ← CV Français
       └── NadhirCV_data_EN.pdf   ← CV Anglais
   ```

4. **Le bouton fonctionnera automatiquement selon la langue**
   - Langue `fr` → télécharge `NadhirCV_data.pdf`
   - Langue `en` → télécharge `NadhirCV_data_EN.pdf`

## Option 2: Utiliser un CV en ligne

Si vous préférez lier vers votre CV hébergé ailleurs (Google Drive, Dropbox, etc.):

1. **Uploadez votre CV sur un service cloud**
2. **Obtenez un lien de téléchargement direct**
3. **Modifiez le fichier Hero.jsx**
   - Remplacez les chemins FR/EN dans `cvPath` par vos liens

Exemple:

```jsx
href="https://drive.google.com/uc?export=download&id=VOTRE_ID"
```

## Option 3: Créer un CV temporaire

Pour tester, vous pouvez:

1. Créer un document texte simple
2. Le convertir en PDF
3. Le placer dans `public/` avec les deux noms FR/EN

---

**Note**: Les fichiers doivent être dans `public/` pour être accessibles publiquement.
