import { STATS, VISITORS } from '../constants';

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


const loadVisitors = () => ({
    type: VISITORS.LOAD,
});

const setVisitors = (stats: any) => ({
    type: VISITORS.LOAD_SUCCESS,
    stats,
});

const setVisitorsError = (error: any) => ({
    type: VISITORS.LOAD_FAIL,
    error,
});

export {
    loadStats,
    setStats,
    setError,
    loadVisitors,
    setVisitors,
    setVisitorsError,
};
