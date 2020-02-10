import {createStore,applyMiddleware} from 'redux';
import {persistReducer,persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';
import reducer from '../reducers';

let persistConfig = {
    key:'root',
    storage:AsyncStorage
}

//let rootReducer = persistReducer(persistConfig,reducer);
let store = createStore(reducer,applyMiddleware(thunk));
//let persistor = persistStore(store);


export {
    //persistor,
    store
}

