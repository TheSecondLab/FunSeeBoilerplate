import { ADD_TODO, COMPONENT_ZX_ACTION } from './action';

export default function (state = { text: 'test text1' }, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        // ...state,
        text: action.payload
      };
    case COMPONENT_ZX_ACTION:
      return {
        // ...state,
        zxText: action.payload
      };
    default:
      return state;
  }
}
