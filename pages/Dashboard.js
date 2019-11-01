import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Dashboard extends Component {
	render() {
		return(
			<View style={styles.container}>
        <Text style={style.dashboardTextCont}> Dashboard </Text>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  dashboardTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row',
    color:'#000'
  }
});
