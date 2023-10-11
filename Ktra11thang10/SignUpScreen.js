import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import PushNotification from 'react-native-push-notification';
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
    TextInput,
} from 'react-native';

const YourApp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <View>
                        <Image
                            source={require('../assets/harmburger-icon.png')}
                            style={styles.buttonMenuCon}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.menuItem}>
                    <Text style={styles.text1}>
                        Shopertino
                    </Text>
                </View>
                <TouchableOpacity style={styles.menuItem}>
                    <View>
                        <Image
                            source={require('../assets/giohang.png')}
                            style={styles.buttonGioHang}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.noidung}>
                <ScrollView
                    horizontal // Cho phép cuộn ngang
                    showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                    contentContainerStyle={styles.scrollViewContent}
                >
                    <TouchableOpacity><Image
                        source={require('../assets/category_1.png')}
                        style={styles.image}
                    /></TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/category_2.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/category_2.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <Text style={styles.newArrivals}>New Arrivals</Text>
            <View style={styles.picArrival1}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/new_arrival_1.png')}
                    />
                </TouchableOpacity>
            </View>
            <Text style= {styles.moTa}>Sweet Never Salty Mini Dress</Text>
            <Text style = {styles.gia}>$34.99</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menu: {
        top: 50,
        left: 9,
        flexDirection: 'row', // Sắp xếp các thành phần theo chiều ngang
        // justifyContent: 'space-between',
        alignItems: 'center',

    },
    menuItem: {
        flex: 1,

    },
    text1: {
        textAlign: 'center',
        fontSize: 18,
    },
    buttonMenuCon: {
    },
    buttonGioHang: {
        marginLeft: 70,
        top: -6,
    },
    noidung: {
        marginTop: 70,
    },
    image: {
        marginRight: 5,
    },
    newArrivals: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 25,    
    },
    picArrival1: {
        marginTop: 20,
        alignItems: 'center',
    },
    moTa: {
        fontSize: 17,
        marginTop : 20,
        textAlign: 'center',
    },
    gia: {
        textAlign: 'center',

    },
});

export default YourApp;
