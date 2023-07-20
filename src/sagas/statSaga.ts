import { put, call, takeEvery, select } from 'redux-saga/effects';
import { ApolloClient, gql , InMemoryCache} from "@apollo/client";

import {setStats, setError } from '../actions';
import { STATS } from '../constants';
import { useFetchStats, fetchStats } from '../api';


export function* handleStatsLoad() : any{
    const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache() });

    try {
        console.log('loading');
        //const stats1 = yield call(fetchStats);
        const { data } = yield client.query({ query: gql`
{
    salesquery {
    product
    region
    salesRevenue
  } }
`
});
        
        

        const stats = yield call(useFetchStats);

        yield put(setStats(stats));
    } catch (error) {
        yield put(setError(error));
    }
}

export default function* watchStatsLoad() {
    yield takeEvery(STATS.LOAD, handleStatsLoad);
}
