import { STATS } from '../constants';

const errorReducer = (state = null, action: any) => {
    switch (action.type) {
        case STATS.LOAD_FAIL:
            return action.error;
        case STATS.LOAD:
        case STATS.LOAD_SUCCESS:
            return null;

        default:
            return state;
    }
};

export default errorReducer;
