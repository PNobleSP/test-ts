# test-ts

## Objectif du dépôt

Ce dépôt contient une série d'exercices TypeScript autour de la gestion de subventions. L'objectif est de compléter les fonctions dans le fichier `test.ts` en respectant les consignes de chaque exercice. Les types et structures de données à utiliser sont définis dans `test.type.ts`.

## Structure des exercices

- **test.ts** : Contient les fonctions à compléter pour chaque exercice.
- **test.type.ts** : Définit les types TypeScript utilisés dans les exercices.
- **test.test.ts** : Contient les tests unitaires (Jest) pour valider vos solutions. Vous devrez créer des données mockées adaptées à chaque scénario de test.

## Comment compléter les exercices ?

1. Ouvrez le fichier `test.ts`.
2. Pour chaque fonction `todoX`, lisez l'énoncé en commentaire et implémentez la solution attendue.
3. Utilisez les types définis dans `test.type.ts` pour respecter la structure des données.
4. Vous pouvez vous aider des tests dans `test.test.ts` pour comprendre les cas d'usage attendus.

## Exécution des tests

Les tests sont écrits avec Jest et permettent de vérifier automatiquement la validité de vos solutions.

### Installation des dépendances

Avant de lancer les tests, installez les dépendances du projet :

```bash
npm install
```

### Lancer les tests

Pour exécuter tous les tests et vérifier que vos exercices sont validés :

```bash
npm test
```

ou

```bash
npx jest
```

Les tests se trouvent dans le fichier `test.test.ts`. Pour chaque exercice, créez vos propres données mockées dans les tests afin de couvrir les différents scénarios.

## Conseils

- Respectez bien les types et structures attendus.
- N'hésitez pas à consulter la documentation TypeScript ou Jest si besoin.
- Les tests sont là pour vous guider : un test qui passe signifie que votre solution est correcte pour le cas testé.

Bon courage ! 
