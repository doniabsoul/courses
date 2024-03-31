import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'



const dummyData =[{
  id :"01",
  title:"whish car",
},
{
  id :"02",
  title:"read a book",
},  
]; 
const TodoScreen = () => {
  const renderTodos=({item, index}) =>{
    return(
        <View style={styles.renderTodos}>
          <Text>{item.title}</Text>
        </View>
    )
}
    
  return (
    <View  style={styles.add} >
         <View >
      <TouchableOpacity style={styles.box}>
      <View >
        <Text  style={styles.sizetext} >Add</Text>
        </View>
      </TouchableOpacity>
     
      </View>
        
      <View >
      <TextInput style={styles.box} placeholder='Add a task'/>
      </View>
      <FlatList  data={dummyData} renderItem={renderTodos}/>
      
    </View>
  )
 
}
 
  
const styles = StyleSheet.create({
box:{
borderWidth:5,
borderColor:"#A5BCCC",
borderRadius:20,
paddingVertical: 12,
paddingHorizontal: 120,
margin:5,
fontSize:20,
},
add:{
   borderRadius: 20, 
   paddingVertical: 120,
   marginTop:24,
   alignItems:"center",
   fontSize:20,
   fontWeight:'bold',
   padding:10,
},
sizetext:{
  fontSize:20,
},
renderTodos:{
  backgroundColor:"#A5BCCC",
  paddingHorizontal:150,
  paddingVertical:10,
  marginBottom:12,
  marginVertical:10,

}



})
export default TodoScreen