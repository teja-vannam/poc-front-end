import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";

import Logout from "./components/logout";
import ClientLaptopRequest from "./components/Requests/ClientLaptopRequest";
import ClientCredentialsRequest from "./components/Requests/ClientCredentialsRequest";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" index element={<Home />} />
        <Route path="requests/">
          <Route path="client-laptop" element={<ClientLaptopRequest />} />
          <Route
            path="client-credentials"
            element={<ClientCredentialsRequest />}
          />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
