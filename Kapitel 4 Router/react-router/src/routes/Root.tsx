import { Link, Outlet } from "react-router-dom";
import "./Root.css";

function Root() {
  return (
    <div className="root-body">
      <nav className="sidebar-container">
        <Link to="/first">
          <button className="sidebar-item">First</button>
        </Link>
        <Link to="/second">
          <button className="sidebar-item">Second</button>
        </Link>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
export default Root;
