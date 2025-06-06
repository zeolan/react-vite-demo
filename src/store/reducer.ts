import { createSlice } from "@reduxjs/toolkit";

import { Mode, IVerb, Lang } from "../types.ts";
import type { RootState } from "./store.ts";
//import data from "../data_new.json";
import data from "../data.json";

export interface MainState {
  verb: IVerb | null;
  verbs: IVerb[];
  showTooltip: boolean;
  showConjugation: boolean;
  verbsOrder: number[];
  verbsOrderSorted: number[];
  verbIdx: number;
  numberOfVerbs: number;
  mode: Mode;
  sortVerbs: boolean;
  fromLang: Lang;
  showTermsOfUse: boolean;
}

//type IVerb_State = keyof MainState['verb'];

const verbs = data as IVerb[];

const initialState: MainState = {
  verb: null,
  verbs: verbs,
  showTooltip: true,
  showConjugation: false,
  verbsOrder: [],
  verbsOrderSorted: [],
  verbIdx: 0,
  numberOfVerbs: 0,
  mode: Mode.light,
  sortVerbs: false,
  fromLang: Lang.ro,
  showTermsOfUse: true,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setShowTooltip: (state, action) => {
      state.showTooltip = action.payload;
    },
    setShowConjugation: (state, action) => {
      state.showConjugation = action.payload;
    },
    setVerb: (state, action) => {
      state.verb = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setVerbsOrder: (state, action) => {
      state.verbsOrder = action.payload;
    },
    setVerbsOrderSorted: (state, action) => {
      state.verbsOrderSorted = action.payload;
    },
    setVerbIdx: (state, action) => {
      state.verbIdx = action.payload;
    },
    setNumberOfVerbs: (state, action) => {
      state.numberOfVerbs = action.payload;
    },
    setSortVerbs: (state, action) => {
      state.sortVerbs = action.payload;
    },
    setFromLang: (state, action) => {
      state.fromLang = action.payload;
    },
    setShowTermsOfUse: (state, action) => {
      state.showTermsOfUse = action.payload;
    },
  },
});

export const {
  setShowTooltip,
  setShowConjugation,
  setVerb,
  setMode,
  setVerbsOrder,
  setVerbIdx,
  setNumberOfVerbs,
  setSortVerbs,
  setVerbsOrderSorted,
  setFromLang,
  setShowTermsOfUse,
} = mainSlice.actions;

export const getVerb = (state: RootState): IVerb | null => {
  return state.main.verb;
};

export const getVerbs = (state: RootState): IVerb[] => {
  return state.main.verbs;
};

export const getShowTooltip = (state: RootState): boolean => {
  return state.main.showTooltip;
};

export const getShowConjugation = (state: RootState): boolean => {
  return state.main.showConjugation;
};

export const getMode = (state: RootState): string => {
  return state.main.mode;
};

export const getVerbsOrder = (state: RootState): number[] => {
  return state.main.verbsOrder;
};

export const getVerbsOrderSorted = (state: RootState): number[] => {
  return state.main.verbsOrderSorted;
};

export const getVerbIdx = (state: RootState): number => {
  return state.main.verbIdx;
};

export const getNumberOfVerbs = (state: RootState): number => {
  return state.main.numberOfVerbs;
};

export const getSortVerbs = (state: RootState): boolean => {
  return state.main.sortVerbs;
};

export const getFromLang = (state: RootState): Lang => {
  return state.main.fromLang;
};

export const getShowTermsOfUse = (state: RootState): boolean => {
  return state.main.showTermsOfUse;
};

export default mainSlice.reducer;
