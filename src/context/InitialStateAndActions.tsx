import { State } from './Interface';

// Initial State
export const initialState: State = {
  loading: false,
  selectedAuthor: null,
};

// Actions
export type Action = { type: 'SET_LOADING'; payload: boolean } | { type: 'SET_SELECTED_AUTHOR'; payload: number };

export type Dispatch = (action: Action) => void;
