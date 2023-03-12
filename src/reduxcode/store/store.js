import { createStore } from 'redux';
import CountReducer from '../reducer/CountReducer';
let Store = createStore(CountReducer);
export default Store;
