API pour chessDB:

|   1   | `/add`              | Ajoute un nouveau joueur                                     | `username`, `password`, `nationality`, `elo`, `age`                             |  http://localhost:3000/add?username=Magnus&password=secret&nationality=Norwegian&elo=2850&age=33

|   2   | `/list`             | Affiche la liste de tous les joueurs                         | *(aucun)*                                                                       |  http://localhost:3000/list

|   3   | `/update`           | Met à jour les infos d’un joueur via son id                  | `id`, + champs à modifier (`username`, `password`, `nationality`, `elo`, `age`) |  http://localhost:3000/update?id=6719c1d3f2e123abc4567890&username=Hikaru&elo=2800

|   4   | `/delete`           | Supprime un joueur selon son id                              | `id`                                                                            |  http://localhost:3000/delete?id=6719c1d3f2e123abc4567890

|   5   | `/deleteByUsername` | Supprime un joueur selon son username                        | `username`                                                                      |  http://localhost:3000/deleteByUsername?username=Magnus

|   6   | `/getByUsername`    | Retourne uniquement l’id d’un joueur selon son username      | `username`                                                                      |  http://localhost:3000/getByUsername?username=Hikaru

|   7   | `/searchById`       | Recherche un joueur complet via son id                       | `id`                                                                            |  http://localhost:3000/searchById?id=6719c1d3f2e123abc4567890

|   8   | `/searchByUsername` | Recherche un joueur complet via son username                 | `username`                                                                      |  http://localhost:3000/searchByUsername?username=Magnus                                   