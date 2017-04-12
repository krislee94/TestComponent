/**
 * Created by air on 2017/4/11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>这是主页</Text>
            </View>
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

module.exports = Home;
