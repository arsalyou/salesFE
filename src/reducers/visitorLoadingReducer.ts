import { VISITORS } from '../constants';

const visitorLoadingReducer = (state = false, action: any) => {
    switch (action.type) {
        case VISITORS.LOAD:
            return true;
        case VISITORS.LOAD_SUCCESS:
            return false;
        case VISITORS.LOAD_FAIL:
            return false;

        default:
            return state;
    }
};

export default visitorLoadingReducer;
