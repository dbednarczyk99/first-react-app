export const getSearchWord = payload => ({ type: GET_SEARCH_WORD, payload });

const createActionName = actionName => `app/searchWord/${actionName}`;
const GET_SEARCH_WORD = createActionName('GET_SEARCH_WORD');

const getSearchWordReducer = (statePart = '', action) => {
  switch(action.type) {
    case GET_SEARCH_WORD:
      return action.payload
    default:
      return statePart;
  }
}

export default getSearchWordReducer;