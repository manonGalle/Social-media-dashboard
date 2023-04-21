import TodayCard from "./TodayCard/TodayCard";

import "./TodayOverview.css";

function TodayOverview() {
    return (
        <div className="TodayOverview">
            <h1>Overview - Today</h1>
                <TodayCard/>
                <TodayCard/>
                <TodayCard/>
                <TodayCard/>
                <TodayCard/>
                <TodayCard/>
                <TodayCard/>
                <TodayCard/>
        </div>
    )
};

export default TodayOverview ;