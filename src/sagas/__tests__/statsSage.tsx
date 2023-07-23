import { runSaga } from 'redux-saga';

import {
    loadStats,
    setStats,
    setError,
    loadVisitors,
    setVisitors,
    setVisitorsError,
} from '../../actions';
import { handleStatsLoad } from '../statSaga';
import * as api from '../../api'; // we'll mock the fetchImageStats api

test('should load and set the stats in case of success', async () => {
    const dispatchedActions: any = [];


    (api.fetchStats as any)= jest.fn(() => Promise.resolve());

    const fakeStore = {
        dispatch: (action: any) => dispatchedActions.push(action),
    };

    await (runSaga(fakeStore, handleStatsLoad) as any).done;
    console.log(dispatchedActions, loadStats())
    
    expect(dispatchedActions).toContainEqual(setStats(undefined));

});


test('should load and handle the image stats error (incl. retries) in case of failure', async () => {
    const dispatchedActions: any = [];
   

    (api.fetchStats as any)= jest.fn(() => Promise.reject());

    const fakeStore = {
        dispatch: (action: any) => dispatchedActions.push(action),
    };

    await (runSaga(fakeStore, handleStatsLoad) as any).done;

    expect(dispatchedActions).toContainEqual(setError("Some error occur"));
   
});
