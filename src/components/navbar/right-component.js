import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

class RightComponent extends Component {
    render () {
        return (
            <View style={styles.viewStyle}>
                <View>
                    <Icon name="search" color="#F0EDEE" size={30}/>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 15,
        color: '#F0EDEE'
    },
    viewStyle: {
        flexDirection: 'row',
        paddingRight: 20
    }
});

export default RightComponent;