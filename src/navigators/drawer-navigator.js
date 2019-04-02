import React from 'react';
import { Platform, Dimensions, View, Text } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import AttendanceScreen from '../screens/attendance-screen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83
};

const DrawerNavigator = createDrawerNavigator (
    {
        Home:  {
            screen: AttendanceScreen
        }
    },
    {
        DrawerConfig
    }
);

export default createAppContainer(DrawerNavigator);