import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { store, persistor } from './redux/store'
import { router } from './router'
import './styles/global.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { refetchOnWindowFocus: false, staleTime: Infinity },
	},
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
)
