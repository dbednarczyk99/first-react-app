export const getSearchWord = payload => ({ type: 'GET_SEARCH_WORD', payload });

const getSearchWordReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'GET_SEARCH_WORD':
      return action.payload
    default:
      return statePart;
  }
}

export default getSearchWordReducer;