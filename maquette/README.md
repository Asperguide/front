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
* **Chart.js** (graphique de progression sur le dashboard)

---

## 6. Organisation des fichiers

```
/assets/               # Images, icônes et logos
index.html             # Page d’accueil (avant login)
login.html             # Page de connexion
register.html          # Page d’inscription
home.html              # Page principale après login
dashboard.html         # Suivi utilisateur
guide.html             # Guide évolutif
games.html             # Liste de jeux avec filtre
rewards.html           # Récompenses et badges
offres.html            # Offres d’abonnement
README.md              # Documentation (ce fichier)
```

---

## 7. Comment lancer la maquette

### Option 1 : Ouvrir directement les fichiers

1. Télécharge le dossier complet du projet.
2. Ouvre le fichier `index.html` **dans ton navigateur** (double-clique simplement dessus).
3. Tu peux naviguer manuellement entre les pages via la **navbar** ou en cliquant sur les **boutons de redirection**.

> 💡 Cette méthode fonctionne très bien si tu veux simplement **visualiser la maquette**.

---

### Option 2 : Lancer un petit serveur local (recommandé)

Si tu veux tester les redirections ou les imports plus proprement (surtout pour les chemins relatifs ou Chart.js) :

#### Sous **VS Code**

1. Installe l’extension **Live Server**.
2. Fais un clic droit sur `index.html` → “Open with Live Server”.
3. La maquette s’ouvrira sur `http://localhost:5500/` et toutes les pages seront accessibles.

#### En **ligne de commande**

Si tu as **Python** installé :

```bash
cd chemin/vers/AsperGuide
python3 -m http.server 8000
```

Puis ouvre ton navigateur sur :
👉 [http://localhost:8000](http://localhost:8000)

---

## 8. Notes et évolutions possibles

* Cette maquette est **100% front-end** (aucune base de données ni serveur).
* Toutes les actions (connexion, progression, récompenses, etc.) sont **simulées**.
* Elle servira de base à l’intégration d’un **backend en Python** avec une **base SQL** et un hébergement sur **AWS**.
* À terme, chaque utilisateur aura :

  * Un profil connecté
  * Une sauvegarde de sa progression
  * Des récompenses débloquées selon ses activités
  * Un suivi des jeux et des conseils suivis
