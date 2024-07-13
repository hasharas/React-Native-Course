import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Link} from 'expo-router';

export default function app() {
  return (
    <View style={styles.container}>
      
        <Text>Hello World </Text>
        <StatusBar style="auto" />
        <Link href="/profile" style={{color:'blue'}} >Go to Profile </Link>
        <Link href="/_layout" style={{color:'blue'}} >Go to layout </Link>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  }
});
