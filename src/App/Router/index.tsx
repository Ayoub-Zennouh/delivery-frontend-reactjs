import {
    LoaderFunctionArgs,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import LoginPage, { loginAction } from "../Pages/LoginPage";
import { fakeAuthProvider } from "../../auth";
import Profile from "../Pages/Profile";


const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      loader() {
        // Our root route always provides the user, if logged in
        return { user: fakeAuthProvider.username };
      },
      Component: Layout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "login",
          action: loginAction,
          loader: loginLoader,
          Component: LoginPage,
        },
        {
          path: "profile",
          loader: protectedLoader,
          Component: Profile,
        },
      ],
    },
    {
      path: "/logout",
      async action() {
        // We signout in a "resource route" that we can hit from a fetcher.Form
        await fakeAuthProvider.signout();
        return redirect("/");
      },
    },
  ]);

  
  function protectedLoader({ request }: LoaderFunctionArgs) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!fakeAuthProvider.isAuthenticated) {
      let params = new URLSearchParams();
      params.set("from", new URL(request.url).pathname);
      return redirect("/login?" + params.toString());
    }
    return null;
  }
  
  async function loginLoader() {
    if (fakeAuthProvider.isAuthenticated) {
      return redirect("/");
    }
    return null;
  }
  
  export default router;