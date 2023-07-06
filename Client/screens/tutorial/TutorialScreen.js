import React from 'react'
import { Text, Image, Dimensions, View, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context'

const TutorialScreen = ({ navigation }) => {
    const goToLogIn = () => {
        navigation.navigate('Login');
    }
    return (
        <Swiper loop={false}>
            <SafeAreaView className="bg-white w-full h-full justify-center items-center">
                <View className="flex-1 justify-center mt-10 mb-1">
                    <Image source={require('../../assets/images/intro1.png')} className="mt-0" style={{ width: 200, height: 600, objectFit: 'contain', alignSelf: 'center' }} />
                    <Text className="text-black left-0 text-center text-sm font-medium leading-4" style={{ textAlign: 'center' }}>Chúng tôi cung cấp dịch vụ giao đồ ăn/ thức uống.</Text>
                    <Text className="text-black left-0 text-center text-sm font-medium leading-4" style={{ textAlign: 'center' }}>Chúng tôi chắc chắn bạn sẽ hài lòng với dịch vụ của chúng tôi</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={goToLogIn}>
                        <Text
                            style={{
                                color: '#FFF',
                                fontWeight: 700,
                                textAlign: 'center',
                                backgroundColor: '#ff7b00',
                                paddingVertical: 5,
                                paddingHorizontal:10,
                                marginTop:20,
                                margin:50,
                            }}
                        >
                            {"Đăng nhập"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white w-full h-full justify-center items-center">
                <View className="flex-1 justify-center mt-10 mb-1">
                    <Image source={require('../../assets/images/loginandsignup.png')} className="mt-0" style={{ width: 300, height: 600, objectFit: 'contain', alignSelf: 'center' }} />
                    <Text className="text-black left-0 text-center text-sm font-medium leading-4" style={{ textAlign: 'center' }}>Đầu tiên bạn phải tạo một tài khoản</Text>
                    <Text className="text-black left-0 text-center text-sm font-medium leading-4" style={{ textAlign: 'center' }}>để trở thành thành viên của chúng tôi</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={goToLogIn}>
                        <Text
                            style={{
                                color: '#FFF',
                                fontWeight: 700,
                                textAlign: 'center',
                                backgroundColor: '#ff7b00',
                                paddingVertical: 5,
                                paddingHorizontal:10,
                                marginTop:20,
                                margin:50,
                            }}
                        >
                            {"Đăng nhập"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white w-full h-full justify-center items-center">
                <View className="flex-1 justify-center mt-10 mb-1">
                    <Image source={require('../../assets/images/intro3.png')} className="mt-0" style={{ width: 300, height: 600, objectFit: 'contain', alignSelf: 'center' }} />
                    <Text className="text-black left-0 text-center text-sm font-medium leading-4" style={{ textAlign: 'center' }}>Sau khi tạo tài khoản, bạn có thể chọn món ăn</Text>
                    <Text className="text-black left-0 text-center text-sm font-medium leading-4" style={{ textAlign: 'center' }}>bạn muốn thêm vào giỏ hàng của bạn và tiến hành chấp nhận đặt món</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={goToLogIn}>
                        <Text
                            style={{
                                color: '#FFF',
                                fontWeight: 700,
                                textAlign: 'center',
                                backgroundColor: '#ff7b00',
                                paddingVertical: 5,
                                paddingHorizontal:10,
                                marginTop:20,
                                margin:50,
                            }}
                        >
                            {"Đăng nhập"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white w-full h-full justify-center items-center">
                <View className="flex-1 justify-center mt-10 mb-1">
                    <Image source={require('../../assets/images/intro4.png')} className="mt-0" style={{ width: 300, height: 600, objectFit: 'contain', alignSelf: 'center' }} />
                    <Text className="text-black left-0 text-center text-sm font-medium leading-4" style={{ textAlign: 'center' }}>Sau khi đặt món thành công</Text>
                    <Text className="text-black left-0 text-center text-sm font-medium leading-4" style={{ textAlign: 'center' }}>món ăn sẽ đến với bạn trong thời gian dự kiến!</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={goToLogIn}>
                        <Text
                            style={{
                                color: '#FFF',
                                fontWeight: 700,
                                textAlign: 'center',
                                backgroundColor: '#ff7b00',
                                paddingVertical: 5,
                                paddingHorizontal:10,
                                marginTop:20,
                                margin:50,
                            }}
                        >
                            {"Đăng nhập"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Swiper>
    )
}
export default TutorialScreen;
