import { createReducer } from 'redux-act';
import * as ac from '../components/actions/candidates';

export default createReducer(
  {
    [ac.vote]: (state, {id, type}) => {
      const el = state.find(el => el.id === id);
      const index = state.indexOf(el);

      return [
        ...state.slice(0, index),
        {
          ...el,
          votes: ++el.votes
        },
        ...state.slice(index + 1),
      ]
    }
  },
  {
   candidates: []
  }
);
