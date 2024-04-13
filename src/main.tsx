import { Result, Skeleton } from 'antd'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { App } from './app'

const rootElement = document.querySelector('#root')
if (!rootElement) throw new Error('Root element not found!')

ReactDOM.createRoot(rootElement).render(
  <ErrorBoundary fallback={<Result status={500} />}>
    <Suspense fallback={<Skeleton />}>
      <App />
    </Suspense>
  </ErrorBoundary>,
)
