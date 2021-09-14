import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,TextInput,TouchableOpacity } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
}
export default class Login extends Component {
    constructor(props) {
        super(props)

    }

    async componentDidMount() {

        changeScreenOrientation()
    }
    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={styles.mainContainer}>
                    <View style={styles.inputView}>
                    <Image style={{width:50, height:50, alignSelf:"center",marginBottom:30}} source={require("../assets/images/logo.png")}></Image>
                        <Text style={styles.girisText}>Sign in </Text>
                        <View style={styles.textInputView}>
                      
                            <TextInput textAlign="left" style={styles.mainThirdText}>USERNAME</TextInput>

                        </View>
                        <View style={styles.textInputView}>
                            <TextInput textAlign="left" style={styles.mainThirdText}>Password</TextInput>

                        </View>

                        <View style={styles.registerButtonView}>
                            <TouchableOpacity onPress={() => {
                              //  this.props.navigation.navigate("HomePage")
                            }}>
                                <Text textAlign="left" style={styles.registerButtonText}>Login</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={styles.mainImageView}>
                        <Image style={styles.image} source={require("../assets/images/viper4.png")}></Image>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flexDirection: "row"
    },
    mainImageView: {

        width: "70%",

    },
    image: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",


    },
    inputView: {
        backgroundColor: "white",
        width: "30%",
        justifyContent:"center",
      
        marginRight: 15,
        marginLeft:30
    },
    input: {

    },
    girisText:{
        
        marginBottom:10,
        color:"black",
        fontSize:20,
        fontWeight:"bold",
        alignSelf:"center"
    },
    textInputView:{
        borderRadius:1,
        borderWidth:1,
        width:"100%",
        height:"7%",
        marginBottom:10
        
    },
    registerButtonView:{
        backgroundColor:"white",
        borderRadius:1,
        borderWidth:1,
        width:"100%",
        height:"10%",
        justifyContent:"center"
    },
    registerButtonText:{
        color:"black",
        textAlign:"center",
        fontSize:15,
        //fontFamily:"PoppinsBold"
    },
    mainFirstText:{
        color:"black",
        textAlign:"center",
        fontSize:32,
      //  fontFamily:"PoppinsBold"
    },
    mainSecondText:{
        color:"black",
        textAlign:"center",
        fontSize:15,
      //  fontFamily:"PoppinsBold",
        opacity:0.4
    },
    mainThirdText:{
        color:"black",
        textTransform:"uppercase",
       fontWeight:"bold",
        fontSize:10,
       // fontFamily:"PoppinsBold",
        opacity:0.5,
        
    },
    registerView:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        
        
    },
    registerText:{
      
        color:"white",
        fontSize:27,
      //  fontFamily:"PoppinsBold"
       
    },
    loginTextView:{
        flex:1,
       
        
    },
    loginText:{
        color:"white",
        fontSize:17,
        //fontFamily:"PoppinsBold",
        opacity:0.7,
        textAlign:"center",
        
        textDecorationLine: 'underline'

    }

})
