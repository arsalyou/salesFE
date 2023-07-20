import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import statReducer from './statReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    error: errorReducer,
    stats: statReducer,
});

export default rootReducer;
