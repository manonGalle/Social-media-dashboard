import facebook from "../../../assets/logos/icon-facebook.svg";
import up from "../../../assets/icon/icon-up.svg";
import down from "../../../assets/icon/icon-down.svg";

import "./GlobalCard.css";
import { useSelector } from "react-redux";

function GlobalCard() {

    const darkmode = useSelector((state) => state.darkMode);

    const cssClass = darkmode ? 'GlobalCard GlobalCard-dark' : 'GlobalCard';


    return(
        <div className={cssClass}>
            CARD with dynamic props
            <img src={facebook}/>
            <h4>pseudo</h4>
            <p><span className="followers-number">##</span> followers</p>
            <p><img src={up}/> {/*add a condition if increase display green up icon and if decrease display red down icon*/} <span className="followers-today-number">##</span> Today </p>
        </div>
    )
};

export default GlobalCard;