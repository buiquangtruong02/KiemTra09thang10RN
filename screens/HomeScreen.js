import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
const YourApp = () => {
  return (
    <SafeAreaView>
         <ScrollView>
            <View style={styles.container}>
        <Icon style={[styles.menuIcon]}
        name="bars" size={25} color="black" />
        <Icon style={[styles.cartIcon]}
        name="shopping-cart" size={25} color="black" />
        <Text style={[styles.text, {top:90}]}>Popular Categories</Text>
       
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
         </ScrollView>
    </SafeAreaView>
    
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text:{
        position: 'absolute',
        left:6.5,
        fontSize: 17,
        fontWeight: 'bold',
    },
    menuIcon: {
        position: 'absolute',
        top: 48,
        left: 14,
      },
      cartIcon: {
        position: 'absolute',
        top: 48,
        right: 14,
      },

  });
export default YourApp;