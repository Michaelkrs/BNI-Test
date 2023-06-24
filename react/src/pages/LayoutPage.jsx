import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  return (
    <section className="d-flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="d-flex flex-column flex-grow-1">
        <Header />
        <div className="flex-grow-1 mx-5 mb-5 mt-3">
          <Outlet />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Layout;
