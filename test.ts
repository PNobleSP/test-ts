import { SubsidyType } from './test.type';

// Exercice 1 : Extraction de valeurs par année
// Ecris une fonction qui prend en paramètre une année et retourne la somme totale des subventions pour cette année, toutes catégories et types confondus
function todo1(): number {
  // À implémenter
  return 0;
}

// Exercice 2 : Filtrage par état de subvention
// Ecris une fonction qui retourne, pour une catégorie donnée, la liste des années où l’état de la subvention est "DRAFT"
function todo2(): number[] {
  // À implémenter
  return [];
}

// Exercice 3 : Ajout d’une nouvelle subvention
// Ecris une fonction qui ajoute une nouvelle valeur de subvention pour une année et un type donnés dans une catégorie donnée.
function todo3(): void {
  // À implémenter
}

// Exercice 4 : Regroupement par type
// Ecris une fonction qui retourne, pour chaque type de subvention, la somme totale de toutes les valeurs, toutes années et catégories confondues.
function todo4(): Record<SubsidyType, number> {
  // À implémenter
  return { ETAT: 0, DEPARTEMENT: 0 };
}

// Exercice 5 : Mise à jour de l’état d’une année
// Ecris une fonction qui met à jour l’état d’une année donnée pour une catégorie donnée.
function todo5(): void {
  // À implémenter
}

// Exercice 6 : Modification conditionnelle des subventions
// Pour chaque valeur de subvention, si son année n'a pas l’état validé, passer la valeur à null.
function todo6(): void {
  // À implémenter
}

export {
  todo1,
  todo2,
  todo3,
  todo4,
  todo5,
  todo6,
};
