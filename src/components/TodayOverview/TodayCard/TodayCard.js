import facebook from "../../../assets/logos/icon-facebook.svg";
import up from "../../../assets/icon/icon-up.svg";
import down from "../../../assets/icon/icon-down.svg";

function TodayCard() {
    return(
        <div className="TodayCard">
            TODAYCARD with dynamic props
            <h4>Pages Views / Likes / Profile Views / Retweets</h4>
            <img src={facebook}/>
            <p className="number">##</p>
            <p className="pourcent">## <img src={up}/> ## % </p>
        </div>
    )
};

export default TodayCard;