import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native' ;
import { ListItem, Avatar } from 'react-native-elements';

class Service extends Component {
    render () {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <ListItem style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}
                    key={this.props.index}
                    title={this.props.title}
                    leftAvatar=<Avatar source={this.props.avatar}></Avatar>
                    subtitle={this.props.description}
                    chevron
                />
            </TouchableOpacity>
        );
    };
};

export default Service;