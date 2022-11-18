import axios from "axios";
import { useEffect, useState } from "react";
export type Station = 'Frankfurt(Main)Hbf' | 'Hamburg Hbf' | 'Berlin Hbf';

export interface Fahrplan {
    from: Station;
    to: Station;
    starttime: string;
    endtime: string;
}



export type Stretch = 'to' | 'from';
export type Status = "LOADING" | "READY" | "ERROR";
export interface FahrplanResults {status: Status; fahrplans: Fahrplan[]; stretch:Stretch; setSelectedStretch: (stretch: Stretch) => void; }

export const useFahrplans = ({location}:{location: Station}): FahrplanResults => {
    const [selectedStretch, setSelectedStretch] = useState<Stretch>('from');
    const [status, setStatus] = useState<Status>('LOADING');
    const [fahrplans, setFahrplans] = useState<Fahrplan[]>([]);

    
    const url = `http://localhost:8080/fahrplans?location=${location}&stretch=${selectedStretch}`;
  
    useEffect(() => {
      setStatus("LOADING");
      getFahrplans(url).then(({ status, fahrplans }) => {
          setFahrplans(fahrplans);
          setStatus(status);
      });
    }, [url, selectedStretch]);  
  
    return {status, fahrplans, stretch: selectedStretch, setSelectedStretch};
}


const getFahrplans =  async (url: string): Promise<{status: Status; fahrplans:Fahrplan[]}> => {
    return axios.get(url)
      .then(({ data }) => {
        return {
          status: "READY" as Status,
          fahrplans: data.map((result: any) => ({
            ...result,
            from: result.origin,
            to: result.destination,
            starttime: result.starttime,
            endtime: result.endtime
          }))
        };
      })
      .catch((error) => {
        console.log(error.message);
        return { status: "ERROR" as Status, fahrplans: [] };
      });
  };
  