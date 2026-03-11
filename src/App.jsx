import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-contact" element={<AddContact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;