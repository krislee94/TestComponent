
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,

} from 'react-native';
import good from './good.json';

class Sock extends Component{
    constructor(props){
        super(props);
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        this.state={
            dataSource:new ListView.DataSource({
                getSectionData          : getSectionData,
                getRowData              : getRowData,
                rowHasChanged:(row1,row2)=> row1 !== row2,
                sectionHeaderHasChanged : (s1, s2) => s1 !== s2

            }),
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>User List</Text>
                </View>

                <ListView
                    dataSource = {this.state.dataSource}
                    style      = {styles.listview}
                    renderRow  = {this.renderRow}
                    renderSectionHeader = {this.renderSectionHeader}
                />

            </View>

        );
    }
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.section}>
                <Text style={styles.text}>片头-公司名:{sectionData}</Text>
            </View>
        );
    }
    renderRow (rowData, sectionID, rowID) {
        return (

            <View style={styles.rowStyle}>
                <Text style={styles.rowText}>{rowData.name.title} {rowData.name.first} {rowData.name.last}-{sectionID}-{rowID}</Text>
            </View>

        );
    }
    componentDidMount() {
        //this.fetchData();

        this.fetchData2();
    }
    fetchData2 () {
        var responseData=good;
        console.log(good);
        console.log(responseData);
        var organizations = responseData.results,
            length = organizations.length,
            //4个组织机构
            dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            organization,
            users,
            userLength,
            user,
            i,
            j;

        for (i = 0; i < length; i++) {
            //某个组织机构的所有信息organization
            organization = organizations[i];

            sectionIDs.push(organization.id);
            //片段id为 12348124 内容为 ：马云的淘宝
            dataBlob[organization.id] = organization.organization;

            users = organization.users;//某个组织的所有用户
            userLength = users.length;//该组织一共有多少人？

            rowIDs[i] = [];//rowIDs是一个二维数组

            for(j = 0; j < userLength; j++) {
                user = users[j].user;
                rowIDs[i].push(user.md5);//二维数组放的都是 md5

                dataBlob[organization.id + ':' + user.md5] = user;
            }
        }

        this.setState({
            dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),

        });


    }


}

const styles = StyleSheet.create({

    loadingpage:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    container: {
        flex: 1
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3F51B5',
        flexDirection: 'column',
        paddingTop: 25
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    text: {
        color: 'white',
        paddingHorizontal: 8,
        fontSize: 16
    },
    rowStyle: {
        paddingVertical: 20,
        paddingLeft: 16,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderWidth: 1
    },
    rowText: {
        color: '#212121',
        fontSize: 16
    },
    subText: {
        fontSize: 14,
        color: '#757575'
    },
    section: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 6,
        backgroundColor: '#2196F3'
    }



});

module.exports = Sock;
