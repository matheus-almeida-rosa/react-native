import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class LeftComponent extends Component {
    render () {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.viewStyle}>
                <TouchableOpacity onPress = { () => navigate('Menu') }>
                    <View>
                        <Icon name="menu" color="#F0EDEE" size={30}/>
                    </View>
                </TouchableOpacity>
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
        paddingLeft: 20
    }
});

export default withNavigation(LeftComponent);