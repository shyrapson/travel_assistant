import React from "react";
import GoogleMapReact from "google-map-react";
import { paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles.js";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ keys: "AIzaSyDQ03njaqzMe2yTp5jUgHbR6yDFaSQmGLY" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
