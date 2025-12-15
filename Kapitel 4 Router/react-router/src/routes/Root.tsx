import { Link, Outlet } from "react-router-dom";
import "./Root.css";
import { Button } from "@mui/material";

function Root() {
  return (
    <div className="root-body">
      <nav className="sidebar-container">
        <Link to="/first">
          <Button variant="contained" className="sidebar-item">
            First
          </Button>
        </Link>
        <Link to="/second">
          <Button variant="contained" className="sidebar-item">
            Second
          </Button>
        </Link>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
export default Root;
