import { runSaga } from 'redux-saga';

import {
    loadStats,
    setStats,
    setError,
    loadVisitors,
    setVisitors,
    setVisitorsError,
} from '../../actions';
import { handleVisitorLoad } from '../visitorSaga';
import * as api from '../../api'; // we'll mock the fetchImageStats api

test('should load and set the visitors in case of success', async () => {
    const dispatchedActions: any = [];


    (api.fetchVisitors as any)= jest.fn(() => Promise.resolve());

    const fakeStore = {
        dispatch: (action: any) => dispatchedActions.push(action),
    };

    await (runSaga(fakeStore, handleVisitorLoad) as any).done;
    console.log(dispatchedActions, loadVisitors())
    
    expect(dispatchedActions).toContainEqual(setVisitors(undefined));

});


test('should load and handle the image visitors error in case of failure', async () => {
    const dispatchedActions: any = [];
   

    (api.fetchVisitors as any)= jest.fn(() => Promise.reject());

    const fakeStore = {
        dispatch: (action: any) => dispatchedActions.push(action),
    };

    await (runSaga(fakeStore, handleVisitorLoad) as any).done;

    expect(dispatchedActions).toContainEqual(setVisitorsError("Some error occur"));
   
});
