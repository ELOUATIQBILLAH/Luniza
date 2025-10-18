# Luniza Jewelers - Boutique de Bijoux de Luxe

## Vue d'ensemble
Luniza Jewelers est une application e-commerce de bijoux de luxe construite avec React, TypeScript, Vite et Supabase. L'application permet aux utilisateurs de parcourir des collections de bijoux, de passer des commandes et aux administrateurs de gérer les produits et les commandes.

## État actuel du projet
- ✅ Configuration Vite et TypeScript
- ✅ Tous les composants React créés et fonctionnels
- ✅ Intégration Supabase configurée
- ✅ Workflow de développement configuré (port 5000)
- ✅ Configuration de déploiement mise en place
- ⚠️ Variables d'environnement Supabase requises

## Technologies utilisées
- **Frontend**: React 18, TypeScript
- **Routage**: React Router DOM v7
- **Build**: Vite 6
- **Backend**: Supabase (Base de données PostgreSQL + Auth)
- **Styling**: CSS-in-JS (styles inline)

## Structure du projet
```
src/
├── components/        # Composants réutilisables
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   └── ProductCard.tsx
├── pages/            # Pages de l'application
│   ├── About.tsx     # Page à propos
│   ├── Account.tsx   # Compte utilisateur
│   ├── Admin.tsx     # Panneau d'administration
│   ├── Contact.tsx   # Page de contact
│   ├── Home.tsx      # Page d'accueil
│   ├── Login.tsx     # Connexion/Inscription
│   ├── ProductDetail.tsx  # Détail d'un produit
│   └── Shop.tsx      # Boutique/Catalogue
├── hooks/
│   └── useAuth.ts    # Hook d'authentification
├── lib/
│   └── supabase.ts   # Client Supabase
├── types/
│   └── index.ts      # Types TypeScript
├── App.tsx           # Composant racine
├── main.tsx          # Point d'entrée
└── index.css         # Styles globaux

supabase/
└── migrations/       # Migrations de base de données
    └── 20251018132121_create_initial_schema.sql
```

## Configuration requise

### Variables d'environnement Supabase
Les variables suivantes doivent être définies dans les secrets Replit :

- `VITE_SUPABASE_URL` - URL de votre projet Supabase
- `VITE_SUPABASE_ANON_KEY` - Clé anonyme/publique de Supabase
- `VITE_ADMIN_EMAIL` - Email de l'administrateur

### Configuration Supabase
1. Créez un projet sur supabase.com
2. Exécutez la migration SQL dans `supabase/migrations/20251018132121_create_initial_schema.sql`
3. Ajoutez les variables d'environnement dans les secrets Replit

## Base de données

### Tables principales
- **categories** - Catégories de produits (Bagues, Colliers, Bracelets, etc.)
- **products** - Produits avec images, prix, descriptions
- **orders** - Commandes clients avec informations de livraison
- **profiles** - Profils utilisateurs liés à l'authentification

### Politique de sécurité
- RLS (Row Level Security) activé sur toutes les tables
- Lecture publique pour les produits et catégories
- Gestion des commandes et profils sécurisée par utilisateur

## Fonctionnalités

### Pour les visiteurs
- ✨ Navigation des collections de bijoux
- 🔍 Filtrage par catégorie
- 📱 Design responsive
- 🛍️ Commande de produits

### Pour les utilisateurs connectés
- 👤 Gestion du profil
- 📦 Historique des commandes
- 💳 Paiement à la livraison

### Pour les administrateurs
- 📊 Gestion des produits
- 📋 Gestion des catégories
- 🛒 Suivi des commandes

## Développement

### Commandes disponibles
- `npm run dev` - Démarre le serveur de développement (port 5000)
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production

### Workflow configuré
- **Nom**: Frontend
- **Commande**: npm run dev
- **Port**: 5000
- **Type**: Webview

## Déploiement
La configuration de déploiement est configurée pour :
- **Type**: Autoscale (pour les sites web stateless)
- **Build**: npm run build
- **Run**: npm run preview

## Notes importantes
- Les prix sont en dirhams marocains (MAD)
- Paiement à la livraison (COD) uniquement
- L'application nécessite une connexion Supabase pour fonctionner complètement
- Sans les variables d'environnement, l'application s'affiche mais les fonctionnalités backend ne fonctionnent pas

## Prochaines étapes recommandées
1. ✅ Configurer Supabase et ajouter les variables d'environnement
2. Ajouter des produits et catégories via le panneau admin
3. Télécharger des images de produits
4. Tester le flux complet de commande
5. Personnaliser les informations de contact
6. Publier l'application

## Support
Pour toute question ou problème, consultez :
- Documentation Supabase: https://supabase.com/docs
- Documentation Vite: https://vitejs.dev
- Documentation React Router: https://reactrouter.com

---
Dernière mise à jour: 18 octobre 2025
