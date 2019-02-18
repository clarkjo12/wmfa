import React from "react";
import { Image, Text } from "react-native";
import { MapView } from "expo";

let icons = {
  truck: require("../assets/images/truck-all.png"),
  favorite: require("../assets/images/truck-fav.png")
};

export default function TruckMarker(props) {
  return (
    <MapView.Marker
      coordinate={{
        latitude: props.truck.latitude,
        longitude: props.truck.longitude
      }}
      title={props.truck.title}
      onPress={() => console.log("TruckMarker onPress")}
    >
      <Image
        source={props.truck.isFavorite ? icons.favorite : icons.truck}
        style={{ width: props.width || 40, height: props.height || 40 }}
      />
      <Text>{props.truck.title}</Text>
      <MapView.Callout>
        <Text>Callout</Text>
      </MapView.Callout>
    </MapView.Marker>
  );
}
