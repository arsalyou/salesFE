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
            _id
            productID {
      category
      name
      _id
      price
    }
    customerIDs{
      country
      age
      name
      gender
    }
            dailyData {
            date
            saleStats {
                totalSales
                totalUnits
            }
            }
            monthlyData {
            month
            saleStats {
                totalSales
                totalUnits
            }
            }
            
            year
            yearlySalesTotal
            targetSales
            yearlyTotalSoldUnits
        }
        }
`
});
        
        

        // const stats = yield call(data);
        console.log('data', data);
        yield put(setStats(data));
    } catch (error) {
        yield put(setError(error));
    }
}

export default function* watchStatsLoad() {
    yield takeEvery(STATS.LOAD, handleStatsLoad);
}
