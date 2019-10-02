import { createStore, combineReducers } from 'redux';
import { NavbarReducer } from './components/Navbar/NavbarReducer';

const reducers = combineReducers({
  NavbarReducer,
});

export const store = createStore(reducers);
