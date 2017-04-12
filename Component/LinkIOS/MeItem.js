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

class MeItem extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    static get defaultProps(){
        return{
            lefttitle:'',
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.tx}>{this.props.lefttitle}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:380,
        height:80,
        backgroundColor:'white',
    },
    tx:{
      fontSize:12,
    },

});

module.exports = MeItem;