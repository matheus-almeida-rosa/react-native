import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MiddleComponent extends Component {
    render () {
        return (
            <View>
                <Text style={styles.textStyle}>{this.props.name}</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 15,
        color: '#F0EDEE'
    }
});

export default MiddleComponent;