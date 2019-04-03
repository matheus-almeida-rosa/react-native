import React, { Component } from 'react';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import Bill from './bill';
import { getPendingDebts } from '../../services/api/c2m2Client';

const bills = getPendingDebts();

class BillsList extends Component {
    render () {
        const {navigate} = this.props.navigation;
        return (
            <Card containerStyle={{ padding: 0, marginBottom: 20 }}>
            {
                bills.map((u, i) => {
                    return (
                        <Bill onPress= { () => {} } key={i} index={i} title={u.date}></Bill>
                    );
                })
            }
            </Card>
        );
    };
};

export default withNavigation(BillsList);