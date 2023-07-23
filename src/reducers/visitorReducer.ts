import { VISITORS } from '../constants';

const visitorReducer = (state = [], action: any) => {
    console.log(action);

    if (action.type === VISITORS.LOAD_SUCCESS) {
        return [ ...action.stats.visitorquery];
    }
    return state;
};

export default visitorReducer;

