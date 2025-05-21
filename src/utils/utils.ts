import { IVerb } from "../types.ts";

export const getRandomVerbsOrder = (numVerbs: number): number[] => {
  const verbsOrder = [];
  let cnt = 0;
  while (cnt < numVerbs) {
    let verbIdInt;
    do {
      verbIdInt = Math.floor(Math.random() * numVerbs);
    } while (verbsOrder.includes(verbIdInt));
    verbsOrder.push(verbIdInt);
    cnt++;
  }
  return verbsOrder;
};

export const getSortedVerbsOrder = (verbs: IVerb[]): number[] => {
  const verbsCopy = structuredClone(verbs).sort((a: any, b: any) => {
    let nameA = a.nameRo[0];
    if (nameA.indexOf("(se) ") !== -1) {
      nameA = nameA.slice("(se) ".length);
    } else if (nameA.indexOf("se ") !== -1) {
      nameA = nameA.slice("se ".length);
    }
    let nameB = b.nameRo[0];
    if (nameB.indexOf("(se) ") !== -1) {
      nameB = nameB.slice("(se) ".length);
    } else if (nameB.indexOf("se ") !== -1) {
      nameB = nameB.slice("se ".length);
    }
    return nameA > nameB ? 1 : nameA < nameB ? -1 : 0;
  });
  return verbsCopy.map((verb: any) => verb.id);
};

export const getVerbByIdx = (verbs: any[], idx: number): any => {
  const foundVerb = verbs.find((verb) => verb.id === idx);
  return foundVerb;
};
