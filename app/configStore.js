import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
export default function configureStore() {
    store = createStore({
        rootReducer
    })
    return store;

}