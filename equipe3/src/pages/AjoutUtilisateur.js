import "../styles/app.css"
import {Link} from "react-router-dom";

export default function Ajout() {
    return (
        <div>
            <h1>AJOUTER UN UTILISATEUR</h1>
            <Link to ="/" className="link">Accueil</Link>
            <form action="" method="POST">
                <label>
                Nom :
                <input type="text" name="name" />
                </label>
            <br></br>
                <label>
                 Prenom :
                <input type="text" name="prenom" />
                </label>
            <br></br>
                <label>
                Date de naissance :
                <input type="text" name="birthDate" />
                </label>
            <br></br>
                <label>
                Adresse :
                <input type="text" name="adress" />
                </label>
            <br></br>
                <label>
                Telephone :
                <input type="text" name="phone" />
                </label>
            <br></br>
                <label>
                E-mail :
                <input type="text" name="email" />
                </label>
            <br></br>
                <label>
                 N° de secu :
                <input type="text" name="secu" />
                </label>
            <br></br>
            <input type="submit" value="Envoyer" />
            </form>
        </div>
        
        
    );
    
  }
  