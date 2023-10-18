import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

//

// Alternative way of defining routes
// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/roducts" element={<Products />}></Route>
//   </Route>
// )

// const router = createBrowserRouter(routerDefinitions)
