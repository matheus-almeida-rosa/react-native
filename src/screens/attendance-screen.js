import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import Services from '../components/services/services';
import RightComponent from '../components/navbar/right-component.js';
import LeftComponent from '../components/navbar/left-component.js';

export default class AttendanceScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Atendimento',
            headerStyle: {
                backgroundColor: '#274029',
            },
            headerLayoutPreset: 'center',
            headerTitleStyle: {
                textAlign:"center",
                flex: 1,
                fontSize: 15,
                color: '#F0EDEE'
            },
            headerTintColor: '#F0EDEE',
            headerLeft: <LeftComponent/>,
            headerRight: <RightComponent/>
        }
    };
    render () {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Services/>
                </ScrollView>
            </View>
        );
    }
};