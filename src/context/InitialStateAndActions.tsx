import { State } from './Interface';

// Initial State
export const initialState: State = {
  loading: false,
};

// Actions
export type Action = { type: 'SET_LOADING'; payload: boolean };

export type Dispatch = (action: Action) => void;
