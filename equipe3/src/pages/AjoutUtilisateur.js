import "../styles/app.css"
import {Link} from "react-router-dom";

export default function Ajout() {
    return (
        <div>
            <h1>AJOUTER UN UTILISATEUR</h1>
            <Link to ="/" className="link">Accueil</Link>
        </div>
    );
  }