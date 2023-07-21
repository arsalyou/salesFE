import { STATS } from '../constants';

const loadStats = () => ({
    type: STATS.LOAD,
});

const setStats = (stats: any) => ({
    type: STATS.LOAD_SUCCESS,
    stats,
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
