import "../styles/accueil.css"
import {Link} from "react-router-dom";
import users from "../datas/users.json";


export default function Accueil() {
    return (
        
        <div>
            <div className="svgHaut">
                <Link to ="/authentification" className="link">Connexion</Link>
                <svg width="625" height="128" viewBox="0 0 625 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M354.331 99.7243C469.234 167.851 752.287 94.5015 1051.59 42.9681L1112.65 -126.69C833.314 -149.375 232.789 -197.524 65.3898 -208.641C-143.86 -222.537 210.703 14.5656 354.331 99.7243Z" fill="url(#paint0_linear_3_233)"/>
                <defs>
                <linearGradient id="paint0_linear_3_233" x1="182.067" y1="48.2732" x2="886.436" y2="-90.8457" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B848EE"/>
                <stop offset="1" stop-color="#260F31"/>
                </linearGradient>
                </defs>
                </svg>
            </div>

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
            <div className="svg">
                <svg  width="757" height="102" viewBox="0 0 757 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M415 33.8034C303 -38.9966 17.1667 22.6368 -284 61.8034L-352 228.803C-73.8333 262.97 524.2 335.803 691 353.803C899.5 376.303 555 124.803 415 33.8034Z" fill="url(#paint0_linear_3_232)"/>
                <defs>
                <linearGradient id="paint0_linear_3_232" x1="585" y1="92.3035" x2="-124.5" y2="202.304" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FEB931"/>
                <stop offset="1" stop-color="#B848EE"/>
                </linearGradient>
                </defs>
                </svg>
            </div>

            {/* <Link to ="/authentification" className="link">Authentification</Link>
            <Link to ="/ajout" className="link">Ajouter</Link>
            <Link to ="/modification" className="link">Modification</Link>*/}
            </div>
    );
  }