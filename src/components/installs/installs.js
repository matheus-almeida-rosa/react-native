import React, { Component } from 'react';
import { Card, ListItem, Avatar } from 'react-native-elements';
import Install from './install';

const installs = [
    {
        name: 'Rua uba 500, Colégio Batista, Belo Horizonte - MG',
    }
]

class Installs extends Component {
    render () {
        return (
            <Card containerStyle={{ padding: 0, marginBottom: 20 }}>
            {
                installs.map((u, i) => {
                    return (
                        <Install onPress= { () => {} } index={i} title={u.name}></Install>
                    );
                })
            }
            </Card>
        );
    };
};

export default Installs;