import React from 'react'
import { View } from 'react-native'
import { MapView } from 'expo'
import TruckMarker from "../components/TruckMarker"

export default class Map extends React.Component {
  state = {}

  render() {
    let trucks = [
      {
        id: 0,
        latitude: 35.9,
        longitude: -79.05
      }
    ]

    let notificationCircle = this.state.userLocation && <MapView.Circle
      center={this.state.userLocation}
      radius={3000}
      strokeColor={'green'}
    />

    return (
      <MapView
        provider={"google"}
        style={{ flex: 1 }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 35.9,
          latitudeDelta: 0,
          longitude: -79.06,
          longitudeDelta: 0.2,
        }}
        loadingEnabled={true}
        onRegionChangeComplete={region => this.setState({region})}
        onUserLocationChange={event => this.setState({userLocation: event.nativeEvent.coordinate})}
      >
        {trucks.map(truck =>
          <TruckMarker
            truck={truck}
            key={truck.id}
          />)}
        {notificationCircle}
      </MapView>
    )
  }
}