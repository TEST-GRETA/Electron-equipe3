import "../styles/accueil.css"
import {Link} from "react-router-dom";
import users from "../datas/users.json";

export default function Accueil() {
    return (
        <div>
            <p className="titre">Liste des différents utilisateurs</p>
            
            <div className="container">
            {users.map((user) => 
                <div className="user">
                    <p className="userText">{user.nom} {user.prenom} <br/>
                    {user.naissance}</p>
                    <img src={user.urlImage} className="pp"/>
                </div>
            )}
            </div>
            <Link to ="/authentification" className="link">Authentification</Link>
            <Link to ="/ajout" className="link">Ajouter</Link>
            <Link to ="/modification" className="link">Accueil</Link>
        </div>
    );
  }