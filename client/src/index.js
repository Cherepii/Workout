import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

import AppProvider from './provider/AppProvider';

import "./scss/index.scss"

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
