import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from '../card/cardReducer';

const reducers = combineReducers({
  cardReducer,
});

export default store = createStore(reducers, applyMiddleware(thunk));
