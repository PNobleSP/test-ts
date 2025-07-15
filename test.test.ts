import "@jest/globals";
import { todo1, todo2, todo3, todo4, todo5, todo6 } from "./test";

// IMPORTANT :
// Pour chaque test, crée ta propre donnée mockée (MockSubsidies, MockSubsidyStates, etc.) adaptée au scénario.
// Exemple de structure de mock :

// const MockSubsidies = [
//   {
//     category: 'INVESTMENT',
//     subsidyTypes: [
//       {
//         type: 'ETAT',
//         values: [{
//           year: 2025,
//           value: 1000
//         }
//         ]
//       }
//     ]
//   }
// ];

// const MockSubsidyStates = [
//   {
//     category: 'INVESTMENT',
//     states: [
//       {
//         year: 2025,
//         state: 'DRAFT'
//       }
//     ]
//   }
// ];

describe("todo1", () => {
  it("devrait retourner la somme totale des subventions pour une année donnée", () => {
    // Crée ici ta donnée mockée adaptée au test
    // Exemple :
    // const MockSubsidies = [...];

    expect(true).toBe(false); // À remplacer par un vrai test
  });
});

describe("todo2", () => {
  it("devrait retourner la liste des années en DRAFT pour une catégorie", () => {
    // Crée ici ta donnée mockée adaptée au test
    expect(true).toBe(false); // À remplacer par un vrai test
  });
});

describe("todo3", () => {
  it("devrait ajouter une nouvelle subvention pour une année/type/catégorie", () => {
    // Crée ici ta donnée mockée adaptée au test
    expect(true).toBe(false); // À remplacer par un vrai test
  });
});

describe("todo4", () => {
  it("devrait retourner la somme totale par type de subvention", () => {
    // Crée ici ta donnée mockée adaptée au test
    expect(true).toBe(false); // À remplacer par un vrai test
  });
});

describe("todo5", () => {
  it("devrait mettre à jour l'état d'une année pour une catégorie", () => {
    // Crée ici ta donnée mockée adaptée au test
    expect(true).toBe(false); // À remplacer par un vrai test
  });
});

describe("updateNonValidatedSubsidies", () => {
  it("devrait passer à null toutes les valeurs dont l'année n'est pas VALIDATED", () => {
    // Crée ici ta donnée mockée adaptée au test
    expect(true).toBe(false); // À remplacer par un vrai test
  });
});
