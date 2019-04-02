import React, { Component } from 'react';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import Service from './service';
import C2m2Client from '../../services/api/c2m2Client';

var client = new C2m2Client();
const users = client.getAttendanceList();

class Services extends Component {
    render () {
        const {navigate} = this.props.navigation;
        return (
            <Card containerStyle={{ padding: 0, marginBottom: 20 }}>
            {
                users.map((u, i) => {
                    return (
                        <Service onPress= { () => navigate('Installs', { name: u.name }) } index={i} title={u.name} avatar={u.avatar} description={u.description}></Service>
                    );
                })
            }
            </Card>
        );
    };
};

export default withNavigation(Services);