
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./styles/app.css"
import Accueil from "./pages/Accueil"
import Authentification from "./pages/Authentification";
import Ajout from "./pages/AjoutUtilisateur";
import Modif from "./pages/ModificationUtilisateur"

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Accueil/>}/>
          <Route exact path="/authentification" element={<Authentification/>}/>
          <Route exact path="/ajout" element={<Ajout/>}/>
          <Route exact path="/modification" element={<Modif/>}/>
        </Routes>
    </Router>
  );
}

export default App;
