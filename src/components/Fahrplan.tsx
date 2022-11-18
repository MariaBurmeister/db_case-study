import { FunctionComponent, Key } from "react";
import { Fahrplan as FahrplanType } from "../hooks";
import { JourneyBar } from "./JourneyBar";
import './Fahrplan.scss';

export const Fahrplan: FunctionComponent<{plan: FahrplanType; key?: Key}> = ({plan}) => {
    const {from, to, starttime, endtime} = plan;
    const {hours, min} = calculateDuration(starttime, endtime);
    return (
        <li className="journey-plan">
            <section className="journey-information">
            <div className="journey-step start">
                <p className="h3" aria-label="von">{from}</p>
                <p className="time" aria-label="Abfahrt">{`${starttime} Uhr`}</p>
            </div>
            <p className="duration" aria-label="Dauer">{hours}h {min}min</p>
            <div className="journey-step end">
                <p className="h3" aria-label="to">{to}</p>
                <p className="time" aria-label="Anfahrt">{`${endtime} Uhr`}</p>
            </div>
            </section>
            <JourneyBar/>
        </li>
    );
}



const calculateDuration = (starttime: string, endtime: string) => {
    const [startHour, startMins] = starttime.split(':').map((s) => Number(s));
    const [endHour, endMins] = endtime.split(':').map((s) => Number(s));

    const durationInMins = (endHour*60 + endMins) - (startHour*60 + startMins);
    const hours = Math.floor(durationInMins / 60);
    const min = durationInMins % 60;

    return {hours, min};
}