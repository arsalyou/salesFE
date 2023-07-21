import { STATS } from '../constants';

const statReducer = (state = [], action: any) => {
    console.log(action);

    if (action.type === STATS.LOAD_SUCCESS) {
        return [...state, ...action.stats.salesquery];
    }
    return state;
};

export default statReducer;
