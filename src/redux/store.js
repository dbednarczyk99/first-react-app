import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

export const getFiltredCards = ({ cards, searchWord}, columnId) => {
  // console.log(searchWord)
  // console.log(cards)
  return cards.filter(card => card.columnId === columnId && ( strContains(card.title, searchWord) || searchWord === ''));};


export const getAllColumns = state => state.columns;
export const getAllLists = state => state.lists;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)
export const getColumnsByListId = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const getSearchWord = payload => ({ type: 'GET_SEARCH_WORD', payload });

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
    case 'GET_SEARCH_WORD':
      return { ...state,  searchWord: action.payload };
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;