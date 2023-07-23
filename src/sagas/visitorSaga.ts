import { put, call, takeEvery, select } from 'redux-saga/effects';
import { ApolloClient, gql , InMemoryCache} from "@apollo/client";

import {setVisitors, setVisitorsError } from '../actions';
import { VISITORS } from '../constants';
import {  fetchVisitors } from '../api';

export function* handleVisitorLoad() : any{
    const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache() });

    try {
        //const stats1 = yield call(fetchVisitor);
//         const { data } = yield client.query({ query: gql`
//         {
//             visitorquery {
//                 totalLeadsGenerated
//                 totalVisitors
//                 year
//             }
//         }
//     `
// });

        // const stats = yield call(data);
        const data = yield call(fetchVisitors);

        console.log('data', data);
        yield put(setVisitors(data));
    } catch (error) {
        yield put(setVisitorsError("Some error occur"));
    }
}

export default function* watchVisitorLoad() {
    console.log('watchVisitorLoad');
    yield takeEvery(VISITORS.LOAD, handleVisitorLoad);
}
