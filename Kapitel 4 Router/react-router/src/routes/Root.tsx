import { Outlet } from "react-router-dom";
import "./Root.css";

function Root() {
  return (
    <div className="root-body">
      <nav className="sidebar-container">
        <a href="/first">
          <button className="sidebar-item">First</button>
        </a>
        <a href="/second">
          <button className="sidebar-item">Second</button>
        </a>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
export default Root;
