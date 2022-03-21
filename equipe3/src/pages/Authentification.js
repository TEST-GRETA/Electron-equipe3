import "../styles/app.css"
import {Link} from "react-router-dom";

export default function Authentification() {
    return (
        <div>
            <h1>AUTHENTIFICATION</h1>
            <Link to ="/" className="link">Accueil</Link>
        </div>
    );
  }