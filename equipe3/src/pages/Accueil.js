import "../styles/app.css"
import {Link} from "react-router-dom";
export default function Accueil() {
    return (
        <div>
            <h1>ACCUEIL</h1>
            <Link to ="/authentification" className="link">Authentification</Link>
            <Link to ="/ajout" className="link">Ajouter</Link>
            <Link to ="/modification" className="link">Accueil</Link>
        </div>
    );
  }