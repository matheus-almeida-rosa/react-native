import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native' ;
import { ListItem } from 'react-native-elements';

class Bill extends Component {
    render () {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <ListItem style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}
                    key={this.props.index}
                    title={this.props.title}
                />
            </TouchableOpacity>
        );
    };
};

export default Bill;