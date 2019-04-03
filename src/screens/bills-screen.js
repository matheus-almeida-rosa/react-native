import React, { Component } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';

import RightComponent from '../components/navbar/right-component';
import BillsList from '../components/bills/bills-list';

export default class BillsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
	  let title = navigation.state.params.name;
	  return {
		title: title,
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
		headerRight: <RightComponent/>
	  }
  };
	
  render() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <BillsList/>
            </ScrollView>
        </View>
    );
  }
};