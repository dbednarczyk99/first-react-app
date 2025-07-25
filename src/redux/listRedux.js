import shortid from 'shortid';

export const getAllLists = state => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

export const addList = payload => ({ type: ADD_LIST, payload });
const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default listsReducer;