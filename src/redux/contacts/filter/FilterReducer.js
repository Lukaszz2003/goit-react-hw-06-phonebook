import { createAction, createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './FilterActions';

const filter = createReducer('', {
  [changeFilter]: (state, action) => action.peyload,
});

export default filter;
