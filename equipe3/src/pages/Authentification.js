import "../styles/auth.css"
import {Link} from "react-router-dom";

export default function Authentification() {
    return (
        <div className="containerAth">

<h1>AUTHENTIFICATION</h1>
<br></br><br></br>

        <div className="intro_Page">
            Connectez <br></br> vous  en tant <br></br> qu'Administrateur
        </div>

             <form>
        <div className="authent">
           
          <input placeholder="Pseudo"></input>   
          <input placeholder="Mot de passe"></input>  



            
        </div>
        <button className="buttonAuthent" type="submit">CONNEXION</button>
        </form>
            
            <Link to ="/" className="link">accueil</Link>

<div class="bottom_svg"><svg width="659" height="84" viewBox="0 0 659 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M656 33.8034C544 -38.9966 258.167 22.6368 -43 61.8034L-111 228.803C167.167 262.97 765.2 335.803 932 353.803C1140.5 376.303 796 124.803 656 33.8034Z" fill="url(#paint0_linear_4_205)"/>
<defs>
<linearGradient id="paint0_linear_4_205" x1="826" y1="92.3035" x2="116.5" y2="202.304" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEB931"/>
<stop offset="1" stop-color="#B848EE"/>
</linearGradient>
</defs>
</svg></div>
        </div>
    );
  }