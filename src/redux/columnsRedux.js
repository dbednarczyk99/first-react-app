import shortid from "shortid";

export const getAllColumns = state => state.columns;
export const getColumnsByListId = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default columnsReducer;