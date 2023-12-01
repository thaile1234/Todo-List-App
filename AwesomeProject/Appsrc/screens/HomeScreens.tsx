/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import {  StyleSheet, Text, View,TouchableOpacity,ScrollView, Alert } from 'react-native';
import styles from './style';
import Form from "../components/Form";
import Task from "../components/Task";
import HeaderComponent from "../components/HeaderComponents";
import { IMAGES } from "../theme/images";
import { useNavigation } from "@react-navigation/native";
const HomeScreens = () => {
  const Navigation = useNavigation()
  const [Tasklist,setTasklist] = useState(["Rửa bát","Quét nhà","Giặt đồ","Nấu ăn"])
  const handleAddTask =(Task) =>{
    setTasklist([...Tasklist,Task])
    console.log(Task)
    console.log(Tasklist)
  }
  const hanldeDeleteTask=(index)=>{
    Alert.alert('Thông báo!!!', 'Bạn có chắc chắn muốn xóa', [
      {
        text: 'OK',
        onPress: () => {
          let TasklistTmp=[...Tasklist]
          TasklistTmp.splice(index,1)
          setTasklist(TasklistTmp)
        },
        
      },
      {text: 'Cancel', onPress: () => {}},
    ]);
  }
 return(
  <View style={styles.container}>
      <HeaderComponent title="Màn hình Todo List" iconLeft={IMAGES.iconBack} onPress={()=>Navigation.goBack()}/>
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerTolist}>Todo List</Text>
    <ScrollView>
      {
       Tasklist.map((item,index)=>{
        return <Task key={index} title={item} number={index+1} onDeleteTask={()=> hanldeDeleteTask(index)}/>
       })
    }
  

    </ScrollView>
      </View>
    </View>

    <Form onAddTask={handleAddTask} />
 </View>
 )
}

export default  HomeScreens;
