import React, { Component } from 'react';
import { AppRegistry, View, Text, ScrollView, Button, Dimensions } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import InstallsScreen from './src/screens/installs-screen';
import AttendanceScreen from './src/screens/attendance-screen';
import BillsScreen from './src/screens/bills-screen';

const StackNavigator = createStackNavigator ({
    Attendance: {screen: AttendanceScreen},
    Installs: {screen: InstallsScreen},
    Bills: {screen: BillsScreen}
});

const Drawer = createDrawerNavigator ({
    Menu: {
        screen: StackNavigator,
        title: 'Atendimento'
    }
})

const App = createAppContainer (Drawer);

AppRegistry.registerComponent ('albums', () => App);