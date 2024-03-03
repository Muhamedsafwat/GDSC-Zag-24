import { Routes, Route } from "react-router-dom";
//import pages
import { HomePage, Login } from "./pages";
//import Components
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="mx-36">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={Login} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
