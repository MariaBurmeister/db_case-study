import { ChangeEventHandler, FunctionComponent } from "react";
import { useFahrplans, Stretch, FahrplanResults } from "../hooks";
import { Fahrplan } from "./Fahrplan";
import { InputAsButton } from "./design-system";
import './TravelPlanFinder.scss';


export const TravelPlanFinder: FunctionComponent = () => {
    const {status, fahrplans, stretch, setSelectedStretch} : FahrplanResults = useFahrplans({location: 'Frankfurt(Main)Hbf'});

    const toggleStretchValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        const newValue = e.currentTarget.value;
        if(newValue === stretch) return;
        setSelectedStretch(newValue as Stretch);
    }

    const isLoading = status === "LOADING";
    const isError = status === "ERROR";
    const isEmpty = status === "READY" && fahrplans.length === 0;

    return (
    <>
        <form name="stretch" className="stretch">
            <InputAsButton type='radio' name="stretch" value='from' checked={stretch === 'from' } onChange={toggleStretchValue}>von Frankfurt</InputAsButton>
            <InputAsButton type='radio' name="stretch" value='to' checked={stretch === 'to'} onChange={toggleStretchValue}>nach Frankfurt</InputAsButton>
        </form>
        <section>
            <h2 className="sr-only">Angabe</h2>
            <ul className="journeys">
                {fahrplans.map((plan) => 
                    <Fahrplan plan={plan} key={`${plan.from}${plan.to}${plan.starttime}${plan.endtime}`}/>
                    )}
            </ul>
        </section>
    </>
    );
}