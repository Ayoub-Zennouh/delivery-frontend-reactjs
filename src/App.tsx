import {
  RouterProvider,
} from "react-router-dom";
import router from "./App/Router";

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

