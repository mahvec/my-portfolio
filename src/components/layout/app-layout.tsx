import Navbar from "../general/navbar";
import { Outlet } from "react-router";
import Footer from "../general/footer";

export default function AppLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
