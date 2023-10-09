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
    TextInput,
} from 'react-native';

const YourApp = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.search}
                        placeholder="Tìm kiếm..."
                    />
                    <View style={styles.buttonMenu}>
                        <TouchableOpacity onPress={""}>
                            <Image
                                source={require('../assets/Icon_Filter.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text1}>Next to you</Text>
                    <View style={styles.text2}>
                        <TouchableOpacity onPress={""}>
                            <Text>On the map > </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.noidung}>
                        <ScrollView
                            horizontal // Cho phép cuộn ngang
                            showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                            contentContainerStyle={styles.scrollViewContent}
                        >
                            <Image
                                source={require('../assets/imgDogCard.png')}
                                style={[styles.image, { marginRight: 50 }]}
                            />
                            <Image
                                source={require('../assets/imgDogCard.png')}
                                style={styles.image}
                            />
                        </ScrollView>
                    </View>

                    <View style={styles.categoryHeader}>
                        <Text style={[styles.text1, { marginTop: 80 }]}>Categories</Text>
                        <TouchableOpacity>
                            <Text style={styles.text3}>See all > </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.khoi1}>
                            <Image
                                source={require('../assets/iconMoving.png')}
                                style={styles.icon}
                            />
                            <View>
                                <Text style={styles.textKhoi}>Moving and things</Text>
                                <Text style={styles.tasksText}>24 tasks</Text>
                            </View>
                            <Image
                                source={require('../assets/iconMore.png')}
                                style={[styles.iconMore, { marginLeft: 85 }]}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.khoi1}>
                            <Image
                                source={require('../assets/Icon_House.png')}
                                style={styles.icon}
                            />
                            <View>
                                <Text style={styles.textKhoi}>Help around the house</Text>
                                <Text style={styles.tasksText}>5 tasks</Text>
                            </View>
                            <View >
                                <Image
                                    source={require('../assets/iconMore.png')}
                                    style={[styles.iconMore, { marginLeft: 55 }]}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <Text style={styles.titel}>Go for a walk{'\n'}and feed the dog</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 66,
        paddingLeft: 24,
        // position: 'relative', // Đặt vị trí tương đối để hình ảnh nằm trên TextInput

    },
    search: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 12,
        width: 263,
        height: 48,
    },
    buttonMenu: {
        position: 'absolute',
        top: 60,
        left: 285,
    },
    text1: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 20,
    },
    text2: {
        position: 'absolute',
        left: 260,
        top: 138
    },
    noidung: {
        marginTop: 30,
    },
    titel: {
        position: 'absolute',
        top: 425,
        left: 30,
    },
    categoryHeader: {
        flexDirection: 'row', // Sắp xếp các thành phần theo chiều ngang
        // alignItems: 'center', // Căn giữa theo chiều ngang
        // justifyContent: 'space-between', // Chia khoảng cách đều giữa các thành phần
        // marginTop: 80,
    },
    text3: {
        marginLeft: 185,
        top: 86,
    },
    khoi1: {
        height: 72,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        // marginTop: 13,
        marginLeft: 10,
    },
    textKhoi: {
        marginHorizontal: 15,
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'space-between',
    },
    tasksText: {
        fontSize: 14,
        marginHorizontal: 15,
    },
    // iconMore: {
    //     marginLeft:50,
    // },
});

export default YourApp;
