# Chess Server

Ce projet fournit une API REST simple pour gérer une base de données de joueurs d'échecs.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clonez ce dépôt (si ce n'est pas déjà fait).
2. Installez les dépendances du projet :

```bash
npm install
```

## Démarrage

1. Assurez-vous que votre serveur MongoDB est en cours d'exécution.
2. Lancez le serveur API :

```bash
node chessServer.js
```

Le serveur démarrera par défaut sur `http://localhost:3000`.

## Documentation de l'API

Voici la liste des points de terminaison (endpoints) disponibles pour interagir avec l'API.

| Endpoint | Description | Paramètres requis | Exemple d'URL |
| :--- | :--- | :--- | :--- |
| **`/add`** | Ajoute un nouveau joueur. | `username`, `password`, `nationality`, `elo`, `age` | `/add?username=Magnus&password=secret&nationality=Norwegian&elo=2850&age=33` |
| **`/list`** | Affiche la liste de tous les joueurs. | *(Aucun)* | `/list` |
| **`/update`** | Met à jour les informations d'un joueur via son ID. | `id` + champs à modifier (`username`, `password`, `nationality`, `elo`, `age`) | `/update?id=...&username=Hikaru&elo=2800` |
| **`/delete`** | Supprime un joueur selon son ID. | `id` | `/delete?id=...` |
| **`/deleteByUsername`** | Supprime un joueur selon son username. | `username` | `/deleteByUsername?username=Magnus` |
| **`/getByUsername`** | Retourne uniquement l'ID d'un joueur selon son username. | `username` | `/getByUsername?username=Hikaru` |
| **`/searchById`** | Recherche les informations complètes d'un joueur via son ID. | `id` | `/searchById?id=...` |
| **`/searchByUsername`** | Recherche les informations complètes d'un joueur via son username. | `username` | `/searchByUsername?username=Magnus` |
