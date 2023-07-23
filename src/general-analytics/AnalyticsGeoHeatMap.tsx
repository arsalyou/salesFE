import React, { useEffect } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { useDispatch, useSelector } from 'react-redux';
import data from "./data";
import countries from "../utils/mock-data/countries.json";

export default function AnalyticsGeoHeatMap() {
//   const { data } = useSelector((state: any) => state.salesByRegion);
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch<any>(getSalesByRegion());
//   }, []);

  return (
    <div style={{ height: '500px', width: '100%' }}>
        <h3>Heat Map</h3>
         <ResponsiveChoropleth
        data={data}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1]}
        unknownColor="#ededed"
        valueFormat=".2s"
        projectionScale={130}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        borderWidth={0.5}

      />
    </div>
  );
};
