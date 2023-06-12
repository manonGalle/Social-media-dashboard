import GlobalCard from "./GlobalCard/GlobalCard";
import facebook from "../../assets/logos/icon-facebook.svg";
import instagram from "../../assets/logos/icon-instagram.svg";
import twitter from "../../assets/logos/icon-twitter.svg";
import youtube from "../../assets/logos/icon-youtube.svg";

import "./GlobalOverview.css";

function GlobalOverview() {
    const facebookPseudo = "ManonGalle";
    const twitterPseudo = "ManonG";
    const instagramPseudo = "MGalle";
    const youtubePseudo = "MaGalle"
    return (
        <div className="GlobalOverview">
            <GlobalCard socialLogo={facebook} pseudo={facebookPseudo}/>
            <GlobalCard socialLogo={instagram} pseudo={instagramPseudo}/>
            <GlobalCard socialLogo={twitter} pseudo={twitterPseudo}/>
            <GlobalCard socialLogo={youtube} pseudo={youtubePseudo}/>
        </div>
    )
}

export default GlobalOverview;