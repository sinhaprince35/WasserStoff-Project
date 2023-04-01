import React from "react";
import styles from "./worldmap.module.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import features from "./features.json";

const WorldMap = () => {
  // I have created this page using react-simple-maps.
  return (
    <div className={styles.worldmap}>
      <div className={styles.worldmapChild}>
        <ComposableMap>
          <Geographies geography={features}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default WorldMap;
