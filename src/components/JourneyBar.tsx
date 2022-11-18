import { FunctionComponent } from "react";
import './JourneyBar.scss';

export const JourneyBar: FunctionComponent = () => (
    <div className="journey" aria-hidden>
        <hr className="journey-start"/>
        <hr className="journey-bar"/>
        <hr className="journey-end"/>
    </div>
    );