import {createStore} from 'redux';
import reducers from './reducers/index';

import {createLoadingError } from './actions/index';
const store = createStore(reducers);
