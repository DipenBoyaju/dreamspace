import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/HomePage/Home'
import ListPage from './pages/listPage/ListPage'
import SinglePage from './pages/singlePage/SinglePage'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: '/', element: <Home /> },
        { path: '/list', element: <ListPage /> },
        { path: '/:id', element: <SinglePage /> }
      ]
    },
  ])
  return <RouterProvider router={router} />
}
export default App