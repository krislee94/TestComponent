/**
 *  主框架界面---底部选项卡
 * 
 * 
 */

import React,{Component} from 'react'
import{
StyleSheet,
Image,
View,
ScrollView,
ListView


} from 'react-native'

//import Icon from 'react-native-vector-icons/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';

import Cold from './cold';
import Drink from './drink';
import Food from './food';
import Noodles from './noodles';
import Sock from './sock';


const styles = StyleSheet.create({
  iconStyle: {
    width: 26,
    height: 26,
  },
  textStyle: {
    color: '#999',
    fontSize:19,
  },
  selectedTextStyle: {
    color: 'black',
  }
});

export default  class TabBarController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
     
    };
  }


  render() {
    return (

      <TabNavigator>
        <TabNavigator.Item
          title="零食"
          selected={this.state.selectedTab === 'sock'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          onPress={() => this.setState({ selectedTab: 'sock' })}
        >
          <Sock {...this.props} />
        </TabNavigator.Item>

          <TabNavigator.Item
              title="饮料"
              selected={this.state.selectedTab === 'drink'}
              selectedTitleStyle={styles.selectedTextStyle}
              titleStyle={styles.textStyle}

              onPress={() => {
                this.setState({ selectedTab: 'drink' });

              }}
          >
              <Drink {...this.props} />
          </TabNavigator.Item>

          <TabNavigator.Item
              title="冷饮"
              selected={this.state.selectedTab === 'cold'}
              selectedTitleStyle={styles.selectedTextStyle}
              titleStyle={styles.textStyle}
              onPress={() => this.setState({ selectedTab: 'cold' })}
          >
              <Cold {...this.props} />
          </TabNavigator.Item>

          <TabNavigator.Item
              title="面食"
              selected={this.state.selectedTab === 'noodles'}
              selectedTitleStyle={styles.selectedTextStyle}
              titleStyle={styles.textStyle}
              onPress={() => this.setState({ selectedTab: 'noodles' })}
          >
              <Noodles {...this.props} />
          </TabNavigator.Item>

          <TabNavigator.Item
              title="饭食"
              selected={this.state.selectedTab === 'food'}
              selectedTitleStyle={styles.selectedTextStyle}
              titleStyle={styles.textStyle}
              onPress={() => this.setState({ selectedTab: 'food' })}
          >
              <Food {...this.props} />
          </TabNavigator.Item>
      </TabNavigator>

      );
  }
}

