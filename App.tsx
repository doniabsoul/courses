import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoScreen from './src/screens/TodoScreen'
import home from '.'


const App = () => {
  
  return (
    
    <View style={styles.background}>
      
       <View >
       <TodoScreen />
       </View>
       </View>
  )
}
const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:"#E7EFF2",
  },
})

export default App