/**
 * Created by air on 2017/4/12.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Link from './Link';

class TestLinkIOS extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Link
                    url={'tel:18260336695'} title={'电话热线：18260336695'}
                />
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

module.exports = TestLinkIOS;