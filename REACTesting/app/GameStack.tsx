import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IDGLIST from './IDGLIST';
import MobileLegends from './GAME LIST/MobileLegends';
import FreeFire from './GAME LIST/FreeFire';
import PUBGM from './GAME LIST/PUBGM';
import CODM from './GAME LIST/CODM';
// import GenshinImpact from '../GAME LIST/GenshinImpact';
// import FreeFire from '../GAME LIST/FreeFire';

const Stack = createStackNavigator();

export default function GameStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="GameList" 
        component={IDGLIST} 
        options={{ title: 'ID Game List' }} 
      />
      <Stack.Screen name="MobileLegends" component={MobileLegends} />
      <Stack.Screen name="FreeFire" component={FreeFire} />
      <Stack.Screen name="PUBGM" component={PUBGM} />
      <Stack.Screen name="CODM" component={CODM} />
      {/* <Stack.Screen name="GenshinImpact" component={GenshinImpact} />
      <Stack.Screen name="FreeFire" component={FreeFire} /> */}
    </Stack.Navigator>
  );
}
