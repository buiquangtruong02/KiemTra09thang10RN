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
        source={require('../assets/landingScreen.png')}
        style={[styles.image, { top: 127 }]}
      />
      <Text style={[styles.title, {top:298}]}>Welcome to our restaurant</Text>
      <Text style={[styles.text, {top:344}, {paddingHorizontal: 35} ]}>Order food and make reservations with one click.</Text>
      <View>
        <Pressable style={[styles.login, {top:439}]} 
          onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.textButton]}>Log In</Text>
        </Pressable>
        <Pressable style={[styles.signup, {top:470}]} 
          onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.textButton]}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', // Căn giữa theo chiều dọc
        alignItems: 'center', // Căn giữa theo chiều ngang
      },
    image: {
      width: 120, // Đặt chiều rộng của hình ảnh
      height: 120, // Đặt chiều cao của hình ảnh
      position: 'absolute',
    },
    title: {
    fontSize:17,
    color: 'green',
    fontWeight: 'bold',
    position: 'absolute',
    },
    text: {
    fontSize:17,
    position: 'absolute',
    textAlign: 'center',
    },
    login:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#5EA33A',
      borderRadius: 26.5,
      width: 278,
      height: 53,
    },
    textButton:{
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#fff'
    },
    signup: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      borderRadius: 26.5,
      width: 278,
      height: 53,
    }
  });
export default YourApp;