import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
const YourApp = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Group.png')}
        style={[styles.image, { top: 48 }]}
      /> 
        <Text style={[styles.text, {top:90}]}>Popular Categories</Text>
        <Image
        source={require('../assets/ListFood.png')}
        style={[styles.image, { top: 90 }]}
      /> 
      <Text style={[styles.text, {top:254}]}>Best Deals</Text>
      <Image
        source={require('../assets/BestDeals.png')}
        style={[styles.image, { top:160 }]}
      />
      <Text style={[styles.text, {top:563}]}>Most Popular</Text>
      <Image
        source={require('../assets/ForbiddenSalad.png')}
        style={[styles.image, { top:240 }]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
    },
    text:{
        position: 'absolute',
        left:6.5,
        fontSize: 17,
    },

  });
export default YourApp;