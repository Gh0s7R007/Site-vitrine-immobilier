# Borcelle Immobilier - Site Vitrine

![Logo Borcelle](images/logo.png)

Site vitrine responsive pour une agence immobilière avec catalogue interactif.

## 🚀 Fonctionnalités principales

- **Catalogue intelligent** avec filtres dynamiques (type, prix, localisation)
- **Fiches détaillées** en modale interactive
- **Design moderne** : combinaison bleu & jaune sur fond blanc
- **100% responsive** : adapté à tous les écrans
- **Performant** : sans framework, uniquement HTML/CSS/JS

## 📂 Structure du projet

```
.
├── index.html          # Page d'accueil
├── catalogue.html      # Page catalogue
├── about.html          # Page À propos
├── contact.html        # Page Contact
├── css/
│   ├── style.css       # Styles globaux
│   └── catalogue.css   # Styles spécifiques
├── js/
│   ├── script.js       # Fonctions communes
│   └── catalogue.js    # Logique du catalogue
└── images/             # Assets visuels
    ├── logo.png        # Logo
    ├── maison1-3.jpg   # Photos des biens
```

## 🛠 Installation

1. Téléchargez les fichiers :
   ```bash
   git clone https://github.com/Gh0s7R007/Site-vitrine-immobilier.git
   ```
2. Ouvrez `index.html` dans votre navigateur.

## 🔍 Fonctionnement du catalogue

### Filtres disponibles

| Type        | Budget      | Localisation | Chambres |
|-------------|-------------|--------------|----------|
| Maison      | Min: 0€     | Paris        | 1+       |
| Appartement | Max: 5M€    | Lyon         | 2+       |
| Villa       |             | Marseille    | 3+       |
| Château     |             | Bordeaux     | 4+       |

### Ajouter un bien

Modifiez `catalogue.js` :
```javascript
{
  id: 4,
  title: "Nouvelle propriété",
  type: "maison",
  price: 350000,
  bedrooms: 3,
  location: "lyon",
  image: "maison4.jpg"
}
```

## 🌐 Compatibilité

| Navigateur | Support |
|------------|---------|
| Chrome     | ✅      |
| Firefox    | ✅      |
| Safari     | ✅      |
| Edge       | ✅      |

## 📝 Licence

Projet sous licence MIT - voir [LICENSE](LICENSE).
