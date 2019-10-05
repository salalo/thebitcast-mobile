import Navbar from './Navbar';
import { NavigationActions } from 'react-navigation';

const initialAction = { type: NavigationActions.Init };
const initialState = Navbar.router.getStateForAction(initialAction);

export const NavbarReducer = (state = initialState, action) => {
  return Navbar.router.getStateForAction(action, state);
};
