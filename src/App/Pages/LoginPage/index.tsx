import { useLocation, useNavigation, useActionData, Form, LoaderFunctionArgs, redirect } from "react-router-dom";
import { fakeAuthProvider } from "../../../auth";


export async function loginAction({ request }: LoaderFunctionArgs) {
    let formData = await request.formData();
    let username = formData.get("username") as string | null;


    console.log('action');
  
    // Validate our form inputs and return validation errors via useActionData()
    if (!username) {
      return {
        error: "You must provide a username to log in",
      };
    }
  
    // Sign in and redirect to the proper destination if successful.
    try {
      await fakeAuthProvider.signin(username);
    } catch (error) {
      // Unused as of now but this is how you would handle invalid
      // username/password combinations - just like validating the inputs
      // above
      return {
        error: "Invalid login attempt",
      };
    }
  
    let redirectTo = formData.get("redirectTo") as string | null;
    return redirect(redirectTo || "/");
  }

function LoginPage() {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let from = params.get("from") || "/";
  
    let navigation = useNavigation();
    let isLoggingIn = navigation.formData?.get("username") != null;
  
    let actionData = useActionData() as { error: string } | undefined;
  
    return (
      <div>
        <p>You must log in to view the page at {from}</p>
  
        <Form method="post" replace>
          <input type="hidden" name="redirectTo" value={from} />
          <label>
            Username: <input name="username" />
          </label>{" "}
          <button type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
          {actionData && actionData.error ? (
            <p style={{ color: "red" }}>{actionData.error}</p>
          ) : null}
        </Form>
      </div>
    );
  }
  
export default LoginPage;  