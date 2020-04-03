import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <SafeAreaView style={{flex : 1}}>
    <FlatList 
    data = {[0,1,2,3,4,5,6,7,8,9]}
    renderItem = {({item}) => {
      return (
        <View style = {{height : 50, width : '100%', borderBottomWidth : 1, borderBottomColor : "#c4c4c4"}}>
         <TouchableOpacity style = {{...StyleSheet.absoluteFillObject, justifyContent : 'center', paddingHorizontal : 24}}>
           <Text>Item Number {item}</Text>
          </TouchableOpacity>
        </View>
      )
    }}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
