import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/navbar/nav-bar";

export function AppLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
