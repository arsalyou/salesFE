import { STATS } from '../constants';

const loadingReducer = (state = false, action: any) => {
    switch (action.type) {
        case STATS.LOAD:
            return true;
        case STATS.LOAD_SUCCESS:
            return false;
        case STATS.LOAD_FAIL:
            return false;

        default:
            return state;
    }
};

export default loadingReducer;
