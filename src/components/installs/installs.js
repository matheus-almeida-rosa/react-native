import React, { Component } from 'react';
import { Card, ListItem, Avatar } from 'react-native-elements';
import Install from './install';
import { withNavigation } from 'react-navigation';

const installs = [
    {
        name: 'Rua uba 500, Colégio Batista, Belo Horizonte - MG',
    }
]

class Installs extends Component {
    render () {
        const {navigate} = this.props.navigation;
        return (
            <Card containerStyle={{ padding: 0, marginBottom: 20 }}>
            {
                installs.map((u, i) => {
                    return (
                        <Install onPress= { () => navigate('Bills', { name: 'Segunda Via' }) } key={i} index={i} title={u.name}></Install>
                    );
                })
            }
            </Card>
        );
    };
};

export default withNavigation(Installs);