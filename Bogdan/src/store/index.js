import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { loadState, saveState } from './loadStore';
import botAnswer from './botAnswer';

const logger = createLogger({ collapsed: true });

const storeConfig = () => {
  const persistedState = loadState();

  const store = createStore(rootReducer, applyMiddleware(thunk, botAnswer, logger));

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};

export default storeConfig();