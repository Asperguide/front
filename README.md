# Documentation de la Maquette **AsperGuide**

## 1. Présentation

Cette maquette a été réalisée avec **HTML**, **Bootstrap 5** et un peu de **JavaScript** pour certaines interactions dynamiques.
Elle représente la **version front-end** du site **AsperGuide**, une plateforme dédiée aux **parents et enfants concernés par le syndrome d’Asperger**.

L’objectif de cette maquette est de **visualiser le parcours utilisateur complet** avant l’intégration d’un backend (gestion des utilisateurs, progression, etc.).

---

## 2. Structure générale

La maquette comprend plusieurs pages principales simulant le fonctionnement global du site :

| Fichier          | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| `index.html`     | Page d’accueil avant connexion                             |
| `login.html`     | Page de connexion                                          |
| `register.html`  | Page d’inscription                                         |
| `home.html`      | Page d’accueil après connexion                             |
| `dashboard.html` | Page de suivi de l’utilisateur                             |
| `guide.html`     | Page de conseils pour parents (fonctionnalité interactive) |
| `games.html`     | Page listant les jeux disponibles (avec filtre)            |
| `rewards.html`   | Page des récompenses et badges                             |
| `offres.html`    | Page des offres d’abonnement                               |

Toutes les pages partagent la même **navbar** et le même **footer**, assurant une navigation cohérente sur tout le site.

---

## 3. Fonctionnement général

La maquette simule le parcours d’un utilisateur typique :

1. **Accueil / Connexion**

   * L’utilisateur arrive sur `index.html`, puis peut aller sur `login.html` ou `register.html`.
   * Après avoir rempli le formulaire, un **script JavaScript simule la connexion** en redirigeant vers `dashboard.html`.

2. **Dashboard**

   * L’utilisateur voit ses **statistiques simulées** : progression, activités, badges, etc.
   * Un graphique de progression est affiché avec **Chart.js**.

3. **Guide (Conseils pour parents)**

   * L’utilisateur clique sur “Prochain conseil”.
   * Le JavaScript ajoute dynamiquement une **nouvelle carte de conseil** depuis un tableau de données.
   * Cela crée une **expérience interactive** et évolutive sans recharger la page.

4. **Jeux**

   * La page `games.html` présente plusieurs jeux dans des **cartes Bootstrap**.
   * Des boutons permettent de **filtrer les jeux** selon leur catégorie (`data-category`) via un script JS.
   * Exemple : cliquer sur “Jeux éducatifs” n’affiche que ceux de cette catégorie.

5. **Récompenses**

   * Présente les **badges et trophées** que l’utilisateur peut débloquer.
   * Une **barre de progression générale** illustre l’avancement global.
   * Le JavaScript pourrait, à terme, connecter ces données à un backend réel.

6. **Offres**

   * Trois offres principales sont affichées (Basique, Standard, Premium).
   * Chaque carte contient un bouton “S’abonner” menant vers une future page de paiement (non encore implémentée).

---

## 4. Fonctionnalités JavaScript

| Fonctionnalité              | Description                                           | Page concernée                |
| --------------------------- | ----------------------------------------------------- | ----------------------------- |
| Redirection après connexion | Simule une connexion en redirigeant vers le dashboard | `login.html`, `register.html` |
| Guide évolutif              | Ajout d’un nouveau conseil à chaque clic              | `guide.html`                  |
| Filtrage des jeux           | Masque/affiche les jeux selon la catégorie choisie    | `games.html`                  |
| Graphique de progression    | Affiche un graphique avec Chart.js                    | `dashboard.html`              |

---

## 5. Technologies utilisées

* **HTML5 / CSS3**
* **Bootstrap 5** (mise en page, cartes, responsive)
* **JavaScript natif**
AsperGuide — Front-end

Ce dépôt contient l'interface front-end d'AsperGuide. Le dossier principal de l'application front-end se trouve dans `./asperguide` et utilise Next.js (app router).

Cette documentation a été mise à jour pour refléter le projet actuel : Next.js + Docker (optionnel) — elle remplace l'ancienne maquette statique HTML/Bootstrap.

## Présentation

AsperGuide est une application visant à aider les parents et enfants concernés par le syndrome d'Asperger. Le front est développé avec Next.js (React), et contient les pages, composants et ressources publiques nécessaires.

Ce README couvre : installation locale, exécution en développement, build de production, utilisation avec Docker / docker-compose, et la structure du projet.

## Prérequis

- Node.js 18+ (recommandé)
- npm ou pnpm
- (optionnel) Docker & docker-compose si vous souhaitez lancer des services conteneurisés

## Démarrage en local (dev)

1. Aller dans le dossier de l'app front-end :

```bash
cd asperguide
```

2. Installer les dépendances :

```bash
npm install
# ou: pnpm install
```

3. Variables d'environnement :

Le projet fournit `sample.front.env` à la racine du dépôt. Copiez/ajustez ce fichier dans `asperguide` comme fichier `.env.local` si nécessaire :

```bash
cp ../sample.front.env .env.local
# puis éditez .env.local selon vos valeurs
```

4. Lancer le serveur de développement :

```bash
npm run dev
# ouvrez http://localhost:3000
```

Le site Next.js sera accessible par défaut sur http://localhost:3000.

## Build & démarrage en production

```bash
cd asperguide
npm run build
npm run start
```

Cela construit l'application et lance le serveur Next.js en mode production.

## Lancer avec Docker / docker-compose

Le dépôt contient un fichier `docker-compose.yaml` à la racine et un Dockerfile pour le front dans `docker/Dockerfile.front`.

Pour démarrer via Docker (tous services définis dans `docker-compose.yaml`) :

```bash
# depuis la racine du repo
docker compose up --build
```

Si vous ne souhaitez démarrer que le front via Docker, adaptez la commande ou le service concerné dans le compose.

Notes :
- Assurez-vous que les variables d'environnement nécessaires sont renseignées — `sample.front.env` peut être utilisé comme modèle.

## Structure du projet (principaux dossiers)

- `asperguide/` — application Next.js
  - `app/` — routes/pages (app router)
  - `components/` — composants réutilisables
  - `public/` — images et ressources publiques
  - `next.config.ts`, `package.json`, `tsconfig.json` — configs du projet

## Scripts utiles (dans `asperguide/package.json`)

- `dev` — lance Next.js en développement
- `build` — build production
- `start` — démarre l'app construite
- `lint` — lance ESLint (si configuré)

## Débogage & conseils

- Si vous avez des problèmes de variables d'environnement, vérifiez `process.env` dans Next.js et l'emplacement de votre `.env.local`.
- Pour des problèmes de modules, supprimez `node_modules` et exécutez `npm install` à nouveau.

## Contributions

Voir les fichiers `CONTRIBUTING.md` et `COMMIT_CONVENTION.md` à la racine pour les règles de contribution et de commits.

## Évolutions prévues

- Intégration backend (API, authentification, sauvegarde de progression)
- Pages dynamiques et internationalisation
- Tests automatisés et CI/CD

---

Si vous voulez que j'adapte le README pour inclure des instructions plus précises (par ex. variables d'environnement exactes, commandes make, ou la façon dont docker-compose orchestre d'autres services), dites-moi ce que vous préférez et je l'intègre.
