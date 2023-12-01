import React from 'react';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View,_ScrollView,Alert} from 'react-native';
import HeaderComponent from '../components/HeaderComponents';
import styles from './style';
import {IMAGES} from '../theme/images';
import { useNavigation } from '@react-navigation/native';
import SCREEN from '../navigators/Routekey';

const UserScreen = () => {
    const Navigation = useNavigation()
     const hanldeLogOut=()=>{
    Alert.alert('Thông báo!!!', 'Bạn có chắc chắn muốn đăng xuất', [
      {
        text: 'OK',
        onPress: () => {
          Navigation.navigate(SCREEN.LOGIN_SCREEN)
        },
        
      },
      {text: 'Cancel', onPress: () => {}},
    ]);
  }
  return (
    <View style={styles.LoginScreen}>
      <ImageBackground  style={styles.LoginScreen}>
        <HeaderComponent title="THÔNG TIN CÁ NHÂN" iconLeft={IMAGES.iconBack} onPress={()=>Navigation.goBack()}/>
     <ScrollView>
    <Image source={IMAGES.icUserName} style={styles.imgUser} />
    <View>
    <View style={styles.txtUser}>
        <Text style={styles.txtName}>
            Tên hiển thị
        </Text>
        <Text style={styles.txtName}>
            Lê Hoàng Thái
        </Text>
    </View>
     <View style={styles.txtUser}>
        <Text style={styles.txtName}>
            Giới tính
        </Text>
        <Text style={styles.txtName}>
            Nam
        </Text>
    </View>
     <View style={styles.txtUser}>
        <Text style={styles.txtName}>
            Quốc tịch
        </Text>
        <Text style={styles.txtName}>
            Việt Nam
        </Text>
    </View>
     <View style={styles.txtUser}>
        <Text style={styles.txtName}>
            Ngày sinh
        </Text>
        <Text style={styles.txtName}>
            07/06/2002
        </Text>
    </View>
     <View style={styles.txtUser}>
        <Text style={styles.txtName}>
            Email
        </Text>
        <Text style={styles.txtName}>
            thaile@gmail.com
        </Text>
    </View>
    </View>
    <TouchableOpacity style={styles.LogAcc} onPress={hanldeLogOut}>
        <View >
            <Text style={styles.txtLogAcc}>
                Đăng xuất
            </Text>
        </View>
    </TouchableOpacity>
     </ScrollView>
      </ImageBackground> 
    </View>
  );
};
//ok r a 
export default UserScreen;
