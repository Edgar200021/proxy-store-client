import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ErrorFallback } from './components/ErrorFallback/ErrorFallback.tsx'
import { router } from './config/router.tsx'
import './index.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={() => window.location.replace('/')}
  >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
	<ToastContainer position="top-right" />
  </ErrorBoundary>
)
