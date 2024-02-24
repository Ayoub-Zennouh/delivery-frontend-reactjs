import { Button } from "@mui/material";
import { Link, useFetcher, useRouteLoaderData } from "react-router-dom";

function AuthStatus() {
    // Get our logged in user, if they exist, from the root route loader data
    let { user } = useRouteLoaderData("root") as { user: string | null };
    let fetcher = useFetcher();

    if (!user) {
        return (
            <>
                <Link to={"/login"}>
                    <Button sx={{ color: 'black' }} variant='outlined'>
                        Sign in
                    </Button>
                </Link>
                <Button sx={{ color: 'black' }} variant='outlined'>Sign up</Button>
            </>
        )
    }

    let isLoggingOut = fetcher.formData != null;

    return (
        <div>
            {/* <p>Welcome {user}!</p>
        <fetcher.Form method="post" action="/logout">
          <button type="submit" disabled={isLoggingOut}>
            {isLoggingOut ? "Signing out..." : "Sign out"}
          </button>
        </fetcher.Form> */}
            <fetcher.Form method="post" action="/logout">
                <Button type="submit" sx={{ color: 'black' }} variant='outlined' disabled={isLoggingOut}>
                    {isLoggingOut ? "Signing out..." : "Sign out"}
                </Button>
            </fetcher.Form>
        </div>
    );
}

export default AuthStatus;