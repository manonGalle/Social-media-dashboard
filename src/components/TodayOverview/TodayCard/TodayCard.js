import facebook from "../../../assets/logos/icon-facebook.svg";
import up from "../../../assets/icon/icon-up.svg";
import down from "../../../assets/icon/icon-down.svg";

import "./TodayCard.css";
import { useSelector } from "react-redux";

function TodayCard() {

    const darkmode = useSelector((state) => state.darkMode);

    const cssClass = darkmode ? 'TodayCard TodayCard-dark' : 'TodayCard';

    return(
        <div className={cssClass}>
            TODAYCARD with dynamic props
            <h4>Pages Views / Likes / Profile Views / Retweets</h4>
            <img src={facebook}/>
            <p className="number">##</p>
            <p className="pourcent">## <img src={up}/> ## % </p>
        </div>
    )
};

export default TodayCard;