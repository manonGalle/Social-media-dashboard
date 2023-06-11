import TodayCard from "./TodayCard/TodayCard";
import facebook from "../../assets/logos/icon-facebook.svg";
import instagram from "../../assets/logos/icon-instagram.svg";
import twitter from "../../assets/logos/icon-twitter.svg";
import youtube from "../../assets/logos/icon-youtube.svg";

import "./TodayOverview.css";

function TodayOverview() {
    return (
        <div className="TodayOverview">
            <h1>Overview - Today</h1>
            <div className="TodayOverviewCards">
                <TodayCard socialLogo={facebook}/>
                <TodayCard socialLogo={instagram}/>
                <TodayCard socialLogo={twitter}/>
                <TodayCard socialLogo={youtube}/>
                <TodayCard socialLogo={facebook}/>
                <TodayCard socialLogo={instagram}/>
                <TodayCard socialLogo={twitter}/>
                <TodayCard socialLogo={youtube}/>
            </div>
        </div>
    )
};

export default TodayOverview ;