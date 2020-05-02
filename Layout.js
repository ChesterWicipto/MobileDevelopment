import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Layout= ()=>{
	return(

		<View>
		<Text style={{
        fontSize:20,
        fontWeight: 'bold',
        padding : 40}}
        >Data COVID-19 Global & Indonesia </Text>
		<Text style={{
			color: 'black',
			fontWeight: 'bold',
			fontSize : 40

        }}> GLOBAL </Text>

        <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>


      </View>
		</View>

		);
}
const styles=StyleSheet.create({
	container: {
		flex : 1,
		flexDirection: 'row',
	},
	box1 :{
		width: 90, 
		height: 40, 
		backgroundColor: 'orange', 
		margin: 10,
	
	},

	box2 :{
		width: 90, 
		height: 40, 
		backgroundColor: 'yellow', 
		margin: 10
	},
	box3 :{
		width: 90, 
		height: 40, 
		backgroundColor: 'green', 
		margin: 10
	}
})
export default Layout;
