import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import App from './App.js'
import './assets/styles/main.scss'
import { worker } from './services/browser.js'

const queryClient = new QueryClient({})
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
