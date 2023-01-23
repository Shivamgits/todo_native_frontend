import { Button, SafeAreaView, Text,
     View,Platform,StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Task from '../components/Task'
import Icon from "react-native-vector-icons/Entypo"
//import { useNavigation } from '@react-navigation/native'

const Home = ({navigation}) => {
//   const navigation = useNavigation()
const tasks=[{
    title: '1',
    description: '12',
    completed: false,
    _id: 'dhfhf'
}];
    return (
        <>
      <View style={{backgroundColor: '#fff',flex:1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
     {/* thoda neeche shift kar deta hai (only for ios) */}
  
                <ScrollView>
                    <SafeAreaView>
                        <Text style={styles.heading}>All Tasks</Text>

                        {user && user.tasks.map((item) => (
                            <Task key={item._id} title={item.title} description={item.description} status={item.completed} taskId={item._id} />
                        ))}


                        <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>

                            <Icon name='add-to-list' size={20} color="#900" />


                        </TouchableOpacity>


                    </SafeAreaView>

                </ScrollView>
            </View>
            <Dialog visible={openDialog} onDismiss={hideDialog} >
                <Dialog.Title>ADD A TASK</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                    />

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={hideDialog} >
                            <Text>CANCEL</Text>
                        </TouchableOpacity>
                        <Button
                            onPress={addTaskHandler}
                            color="#900"
                            disabled={!title || !description || loading}
                        >
                            ADD
                        </Button>
                    </View>
                </Dialog.Content>
            </Dialog>

        </>
      )
      }



export default Home

const styles = StyleSheet.create({
    heading:{
        fontSize:28,
        textAlign: 'center',
        marginTop:25,
        marginBottom:20,
        color: '#fff',
        backgroundColor: "#474747",
    },
    addBtn: {
        backgroundColor: "#fff",
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        alignSelf: "center",
        marginVertical: 20,
        elevation: 5,
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    }
})