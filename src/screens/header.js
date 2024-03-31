import React from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
    return (
        <View>
            <Text>
                {props.name}
            </Text>


        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    props: {
        fontweight: "bold",
        fontsize: 22,
        marginLeft: 15,
    }

})
