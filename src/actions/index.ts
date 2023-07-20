import { STATS } from '../constants';

const loadStats = () => ({
    type: STATS.LOAD,
});

const setStats = (images: any) => ({
    type: STATS.LOAD_SUCCESS,
    images,
});

const setError = (error: any) => ({
    type: STATS.LOAD_FAIL,
    error,
});



export {
    loadStats,
    setStats,
    setError,
};
