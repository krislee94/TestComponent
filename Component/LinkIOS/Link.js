/**
 * Created by air on 2017/4/12.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Linking,
} from 'react-native';

import MeItem from './MeItem';

class Link extends Component{
    constructor(props){
        super(props);

    }
    get defaultProps(){
        return{
            url:'',
        }
    }

    render(){
        return(
            <TouchableOpacity onPress={()=>{

                Linking.canOpenURL(this.props.url).then(supported => {

                    if (!supported) {

                        console.log('Can\'t handle url: ' + this.props.url);

                    } else {

                        return Linking.openURL(this.props.url);

                    }

                }).catch(err => console.error('An error occurred', err));

            }}>

                <MeItem lefttitle={this.props.title} />

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

module.exports = Link;