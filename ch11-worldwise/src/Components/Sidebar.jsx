import Logo from "./Logo";
import AppNav from "./AppNav";
import AppFooter from "./AppFooter";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <AppFooter />
    </div>
  );
}

export default Sidebar;
