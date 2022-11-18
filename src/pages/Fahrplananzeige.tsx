import { FunctionComponent } from "react";
import { DBPrefix } from "../components/design-system";
import { Page } from "../components/layout";
import { TravelPlanFinder } from "../components";

export const Fahrplananzeige: FunctionComponent = () => (
    <Page title={<><DBPrefix/> Fahrplananzeige</>}>
       <TravelPlanFinder/>
    </Page>
    );