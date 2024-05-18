import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Vista1 from './routes/vista1'
import Vista2 from './routes/vista2'
import Vista5 from './routes/vista5'
import Mix_response from './routes/mix_response'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Vista1 />,
  },
  {
    path: "/mix_polymers",
    element: <Vista2 />,
  },
  {
    path: "/search_polymers",
    element: <Vista5 />,
  },
  {
    path: "/mix_polymers/response",
    element: <Mix_response responseData={this.state.response} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
