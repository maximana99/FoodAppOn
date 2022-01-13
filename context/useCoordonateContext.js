import {useContext, createContext} from "react";

export const CoordinateContext = createContext({
    latitude1:0,
    longitude1:0,
    setLatitude1: () => {},
    setLongitude1: () => {},
    latitude2:0,
    longitude2:0,
    setLatitude2: () => {},
    setLongitude2: () => {}
})

export function useCoordonateContext() {
    return useContext(CoordinateContext);
}

