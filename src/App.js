import Home from "./pages/Home";
import Login from "./pages/Login"
import NewAn from "./pages/NewAn"
import Research from "./pages/Research"
import Signin from "./pages/Signin"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/poster_une_annonce" element={<NewAn />} />
        <Route path="/recherche" element={<Research />} />
        <Route path="/inscription" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
