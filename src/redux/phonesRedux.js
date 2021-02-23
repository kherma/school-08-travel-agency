/* selectors */
export const getAll = ({ phones }) => phones;

// action name creator
const reducerName = 'phones';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const SET_OPTION = createActionName('GET_PHONES');

// action creators
export const setOrderOption = (payload) => ({ payload, type: SET_OPTION });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
