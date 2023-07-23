import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import statReducer from './statReducer';
import visitorReducer from './visitorReducer';
import visitorLoadingReducer from './visitorLoadingReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    isVisitorLoading: visitorLoadingReducer,
    error: errorReducer,
    stats: statReducer,
    visits: visitorReducer,
});

export default rootReducer;
