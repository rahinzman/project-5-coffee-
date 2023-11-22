
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
