import * as actions from "./actions";
export function home_click(hover) {
  return {
    type: actions.HOME_CLICKED,
    payload: hover,
  };
}

export function about_click(id, active) {
  return {
    type: actions.ABOUT_CLICKED,
    id: id,
    active: active,
  };
}

export function skills_click(id, active) {
  return {
    type: actions.SKILLS_CLICKED,
    id: id,
    active: active,
  };
}
export function service_click(id, active) {
  return {
    type: actions.SERVICE_CLICKED,
    id: id,
    active: active,
  };
}

export function portfolio_click(id, active) {
  return {
    type: actions.PORTFOLOIO_CLICKED,
    id: id,
    active: active,
  };
}

export function contact_click(id, active) {
  return {
    type: actions.CONTACT_CLICKED,
    id: id,
    active: active,
  };
}
