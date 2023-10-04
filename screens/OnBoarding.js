import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
const RenderItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: item.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
        backgroundColor: 'green',
      }}>
      <Image style={styles.introImageStyle} source={item.image} />
      <Text style={styles.introTitleStyle}>{item.title}</Text>
      <Text style={[styles.introTextStyle, {paddingHorizontal: 20 }]}>
        {item.text}
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <AppIntroSlider
      renderItem={RenderItem}
      data={slides}
      onDone={() => {
        // Xử lý khi người dùng hoàn thành màn hình giới thiệu
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introImageStyle: {
    width: 100,
    height: 100,
  },
  introTextStyle: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 20,
  },
  introTitleStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    image: require('../assets/icons8-restaurant-menu-101.png'),
    title: 'Browse Food',
    text: 'Welcome to our restaurant app! Log in and check  out our delicious food.',
  },
  {
    key: 's2',
    image: require('../assets/icons8-delivery-500.png'),
    title: 'Order Food',
    text: 'Hungry? Order food in just a few clicks and we’ll take care of you..',
  },
  {
    key: 's3',
    image: require('../assets/noun_Calendar_2442157.png'),
    title: 'Make Reservations',
    text: 'Book a table in advance to avoid waiting in line',
  },
  {
    key: 's4',
    image: require('../assets/noun_Binoculars_1107295.png'),
    title: 'Quick Search',
    text: 'Quickly find food items you like the most',
  },
  {
    key: 's5',
    image: require('../assets/noun_mac_2076879.png'),
    title: 'Apple Pay',
    text: 'We know you’re busy, so you can pay with your phone in just one click',
  },
];
