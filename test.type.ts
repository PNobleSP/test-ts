export type Category = "INVESTMENT" | "FUNCTIONING";
export type SubsidyType = "ETAT" | "DEPARTEMENT";
export type SubsidyState = "DRAFT" | "VALIDATED" | "TO_BE_VALIDATED";

export type SubsidyValue = { year: number; value: number | null };
export type SubsidyTypeObject = {
  type: SubsidyType;
  values: SubsidyValue[];
};
export type SubsidyCategory = {
  category: Category;
  subsidyTypes: SubsidyTypeObject[];
};

export type SubsidyStateValue = { year: number; state: SubsidyState };
export type SubsidyStateCategory = {
  category: Category;
  states: SubsidyStateValue[];
}; 