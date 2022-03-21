import "../styles/app.css"
import "../styles/ajout.css"
import {Link} from "react-router-dom";



export default function Ajout() {
    return (
        <div>
            <h1>AJOUTER UN UTILISATEUR</h1>
            <Link to ="/" className="link">Accueil</Link>
            <form  method="POST" className="ajoutForm">
                <input type="text" name="name" className="inputAjout" placeholder="Nom"/>
            <br></br>
                <input type="text" name="prenom" className="inputAjout" placeholder="Prénom"/>
            <br></br>
                <input type="text" name="birthDate" className="inputAjout" placeholder="Date de naissance"/>
            <br></br>
                <input type="text" name="adress" className="inputAjout" placeholder="Adresse"/>
            <br></br>
                <input type="text" name="phone" className="inputAjout" placeholder="Téléphone"/>
            <br></br>
                <input type="text" name="email" className="inputAjout" placeholder="Email"/>
            <br></br>
                <input type="text" name="secu" className="inputAjout" placeholder="Num de sécurité social"/>
            <br></br>
            <input type="file" onchange="previewFile()" className="inputAjout"/>            
            <canvas id="preview-canvas"></canvas>                     
            <input type="submit" value="Envoyer" className="inputAjout"/>
            </form>
            
        </div>
        
        
    );
    
  }
  