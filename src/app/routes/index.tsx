import LayoutMain from '@/layouts'
//const IndexPage = lazy(() => import('@/pages'))
import IndexPage from '@/pages'

import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const SeconPage = lazy(() => import('@/pages/second'))
const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutMain />}>
        <Route index element={<IndexPage />} />
        <Route
          path='second'
          element={
            <Suspense fallback={null}>
              <SeconPage />
            </Suspense>
          }
        />
        {/* Other Routes here */}
      </Route>
    </Routes>
  )
}

export default MyRoutes
