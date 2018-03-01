import { ADD_TODO } from './action';

export default function (state = { text: 'test text1' }, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        // ...state,
        text: action.payload
      };
    default:
      return state;
  }
}
