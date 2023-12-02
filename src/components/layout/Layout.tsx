import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "@components/footer/Footer";
const Layout = () => {
  return (
    <div className="flex h-screen flex-col">
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
};

export default Layout;
