import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { QuestionReducer, ResultReducer } from './reducers';

const rootReducer = combineReducers({
  questions: QuestionReducer,
  results: ResultReducer,
});

export default configureStore({ reducer: rootReducer });
