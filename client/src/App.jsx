import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Users />
  },
  {
    path:'/create',
    element: <CreateUser />
  },
  {
    path:'/update/:id',
    element: <UpdateUser />
  }
]);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
