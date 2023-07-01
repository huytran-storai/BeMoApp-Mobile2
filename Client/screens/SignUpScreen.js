import {
    View, Text, TouchableOpacity, Image, TextInput,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const navigation = useNavigation();
    return (
        <KeyboardAwareScrollView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1 bg-white" style={{ backgroundColor: '#429F9E' }}>
                    <SafeAreaView className="flex">
                        <View className="flex-row justify-start">
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                            >
                                <ArrowLeftIcon size="20" color="black" />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row justify-center">
                        </View>
                    </SafeAreaView>
                    <View className="flex-1 bg-white px-8 pt-8 h-screen"
                        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
                    >
                        <View className="form space-y-2">
                            <Text className="text-gray-700 ml-4">Họ và tên</Text>
                            <TextInput
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                                // value={fullName}
                                // onChangeText={setFullName}
                                placeholder='Họ và tên'
                            />
                            
                            <Text className="text-gray-700 ml-4">Địa chỉ email</Text>
                            <TextInput
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                                // value={email}
                                // onChangeText={value => setEmail(value)}
                                placeholder='Địa chỉ email'
                            />
                            
                            <Text className="text-gray-700 ml-4">Số điện thoại</Text>
                            <TextInput
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                                // value={phoneNumber}
                                // onChangeText={setPhoneNumber}
                                placeholder='Số điện thoại'
                            />
                            
                            <Text className="text-gray-700 ml-4">Mật Khẩu</Text>
                            <TextInput
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl "
                                secureTextEntry
                                // value={password}
                                // onChangeText={value => setPassword(value)}
                                placeholder='Mật Khẩu'
                            />
                            
                            <Text className="text-gray-700 ml-4">Nhập Mật Khẩu Lần 2</Text>
                            <TextInput
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl "
                                secureTextEntry
                                // value={passwordVerify}
                                // onChangeText={setPasswordVerify}
                                placeholder='Mật Khẩu'
                            />
                            
                            <TouchableOpacity
                                className="py-3 bg-yellow-400 rounded-xl" 
                            >
                                <Text className="font-xl font-bold text-center text-gray-700">
                                    Đăng kí
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row justify-center space-x-12 mt-4">
                            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                                <Image source={require('../assets/google.png')}
                                    className="w-10 h-10" />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row justify-center mt-7">
                            <Text className="text-gray-500 font-semibold">Bạn đã có tài khoản rồi?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text className="font-semibold text-yellow-500"> Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>

    )
}