# H24 - Application Full-Stack

Une application web moderne avec un back-end Laravel et un front-end React/TypeScript.

## 🏗️ Architecture

```
h24/
├── back-end-h24/     # API Laravel
├── front-end-h24/    # Interface React/TypeScript
└── README.md         # Ce fichier
```

## 🚀 Technologies Utilisées

### Back-end

- **Laravel** - Framework PHP
- **SQLite** - Base de données
- **Sanctum** - Authentification API
- **PHPUnit** - Tests

### Front-end

- **React** - Bibliothèque JavaScript
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **CSS** - Styles

## 📋 Prérequis

- **PHP** >= 8.1
- **Composer**
- **Node.js** >= 18
- **npm** ou **yarn**

## 🛠️ Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd h24
```

### 2. Installation du Back-end

```bash
cd back-end-h24

# Installer les dépendances PHP
composer install

# Copier le fichier d'environnement
cp .env.example .env

# Générer la clé d'application
php artisan key:generate

# Configurer la base de données (SQLite)
touch database/database.sqlite

# Exécuter les migrations
php artisan migrate

# (Optionnel) Exécuter les seeders
php artisan db:seed
```

### 3. Installation du Front-end

```bash
cd ../front-end-h24

# Installer les dépendances
npm install
# ou
yarn install
```

## 🚀 Lancement de l'application

### Démarrer le Back-end

```bash
cd back-end-h24
php artisan serve
```

L'API sera accessible sur `http://localhost:8000`

### Démarrer le Front-end

```bash
cd front-end-h24
npm run dev
# ou
yarn dev
```

L'interface sera accessible sur `http://localhost:5173`

## 📝 Scripts Disponibles

### Back-end (Laravel)

```bash
# Démarrer le serveur de développement
php artisan serve


# Créer une nouvelle migration
php artisan make:migration nom_de_la_migration

# Créer un contrôleur
php artisan make:controller NomController

# Nettoyer le cache
php artisan cache:clear
```

### Front-end (React/Vite)

```bash
# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview

# Linter
npm run lint
```

un test

```

## 📁 Structure du projet

### Back-end (Laravel)
```

back-end-h24/
├── app/
│ ├── Http/Controllers/ # Contrôleurs
│ ├── Models/ # Modèles Eloquent
│ └── ...
├── routes/
│ ├── api.php # Routes API
│ └── web.php # Routes web
├── database/
│ ├── migrations/ # Migrations
│ └── seeders/ # Seeders
└── tests/ # Tests

```

### Front-end (React)
```

front-end-h24/
├── src/
│ ├── components/ # Composants réutilisables
│ ├── pages/ # Pages/Vues
│ ├── features/ # Fonctionnalités
│ ├── lib/ # Utilitaires
│ └── types/ # Types TypeScript
└── public/ # Assets statiques

````

## 🔧 Configuration

### Variables d'environnement

#### Back-end (.env)
```env
APP_NAME=H24
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database/database.sqlite

# Autres configurations...
````

#### Front-end (.env)

```env
VITE_API_URL=http://localhost:8000/api
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request
