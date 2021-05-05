import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';
import { apiMiddleware } from './middlewares';

// Without redux-devtools 
// export default function configureStore(initialState) {
//   return createStore(rootReducer, initialState, applyMiddleware(apiMiddleware));
// };

// Redux-Dev Tools for Chrome
export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(apiMiddleware)));
};
