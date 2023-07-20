import { STATS } from '../constants';

const imagesReducer = (state = [], action: any) => {
    if (action.type === STATS.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }
    return state;
};

export default imagesReducer;
