import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AnalyticsConversionRates from './general-analytics/AnalyticsConversionRates';
import ThemeConfig from "./theme";
import GeneralAnalytics from './GeneralAnalytics';
import { Provider } from 'react-redux';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import configureStore from './store';
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  HttpLink,
  ApolloLink
} from '@apollo/client';

const store = configureStore();

const link = '/graphql';

const client = new ApolloClient({
  uri: link,
  // fetchOptions: {
  //   credentials: 'include'
  // },
  // request: (operation) => {
  //   const token = localStorage.getItem('token');
  //   operation.setContext({
  //     headers: {
  //       authorization: token ? `Bearer ${token}` : ''
  //     }
  //   });
  // },
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
  <Provider store={store}>
      <GeneralAnalytics />
  </Provider>
  </ApolloProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
