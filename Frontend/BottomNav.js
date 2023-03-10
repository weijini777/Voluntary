import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeComponent from './HomeComponent';
import MapComponent from './MapComponent';
import ProfileComponent from './ProfileComponent';
import Rewards from './Rewards';
import SocialBar from './SocialBar';

const RewardRoute = () => <Rewards></Rewards>;

const MapRoute = () => <MapComponent></MapComponent>;

const HomeRoute = () => <HomeComponent></HomeComponent>;

const ProfileRoute = () => <ProfileComponent></ProfileComponent>;

const SocialRoute = () => <SocialBar></SocialBar>;


const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'map', title: 'Map', focusedIcon: 'map', unfocusedIcon: 'map-outline'},
    { key: 'rewards', title: 'Rewards', focusedIcon: 'store', unfocusedIcon: 'store-outline'},
    { key: 'social', title: 'Social', focusedIcon: 'account-group', unfocusedIcon: 'account-group-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    rewards: RewardRoute,
    map: MapRoute,
    home: HomeRoute,
    social: SocialRoute,
    profile: ProfileRoute
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;