import React, {useState, useCallback} from 'react';
import { CoordinateContext } from './useCoordonateContext';


export function CoordonateProvider(props) {
    const [latitude1, setLatitude1] = useState(0);
    const [longitude1, setLongitude1] = useState(0);

    const [latitude2, setLatitude2] = useState(0);
    const [longitude2, setLongitude2] = useState(0);

    const handleSetLatitude1 = useCallback((_latitude) => {
        setLatitude1(_latitude);
    }, [])

    const handleSetLongitude1 = useCallback((_longitude) => {
        setLongitude1(_longitude);
    }, [])

    const handleSetLatitude2 = useCallback((_latitude) => {
        setLatitude2(_latitude);
    }, [])

    const handleSetLongitude2 = useCallback((_longitude) => {
        setLongitude2(_longitude);
    }, [])


    return (<CoordinateContext.Provider
        value={{
            latitude1,
            latitude2,
            longitude1,
            longitude2,
            setLatitude1: handleSetLatitude1,
            setLongitude1: handleSetLongitude1,
            setLatitude2: handleSetLatitude2,
            setLongitude2: handleSetLongitude2
        }}
    >
        {
            props.children
        }
    </CoordinateContext.Provider>)
}