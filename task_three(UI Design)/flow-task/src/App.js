import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import MainPage from './components/main_page';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<MainPage />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
