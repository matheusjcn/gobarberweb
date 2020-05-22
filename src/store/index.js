import { persistStore } from 'redux-persist';
import createSagaMiddlewares from 'redux-saga';
import persistReducers from './persistReducers';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlewares = createSagaMiddlewares({ sagaMonitor });
const middlewares = [sagaMiddlewares];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddlewares.run(rootSaga);
export { store, persistor };
