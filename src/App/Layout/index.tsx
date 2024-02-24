import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Box, Container } from "@mui/material";

function Layout() {
    return (
        <Box height={1}>
            <Navbar />

            <Outlet />
        </Box>
    );
}

export default Layout;