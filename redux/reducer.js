import * as actions from "./actions";

let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.HOME_CLICKED:
      return [...state, action.payload];
    case actions.ABOUT_CLICKED:
      return [
        ...state,
        {
          id: action.id,
          active: action.active,
        },
      ];
    case actions.SKILLS_CLICKED:
      return [
        ...state,
        {
          id: action.id,
          active: action.active,
        },
      ];
    case actions.SERVICE_CLICKED:
      return [
        ...state,
        {
          id: action.id,
          active: action.active,
        },
      ];
    case actions.PORTFOLOIO_CLICKED:
      return [
        ...state,
        {
          id: action.id,
          active: action.active,
        },
      ];
    case actions.CONTACT_CLICKED:
      return [
        ...state,
        {
          id: action.id,
          active: false,
        },
      ];
    default:
      return [...state];
  }
}
