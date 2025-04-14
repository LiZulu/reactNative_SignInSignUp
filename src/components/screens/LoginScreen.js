import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const navigation = useNavigation();
    
    return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImg}
        source={require('../../assets/images/workout2.png')} />

        {/** Snowflakes **/}
        <View style={styles.iconContainer}>
            <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
            style={styles.image1}
            source={require('../../assets/images/dumbbell.png')} />
            <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()}
            style={styles.image2}
            source={require('../../assets/images/kettlebell.png')} />
        </View>

        {/** title and form **/}
        <View style={styles.form}>
            {/** title **/}
            <View style={styles.formContent1}> 
                <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.formTitle}>
                    Login
                </Animated.Text>
            </View>

            {/** form **/}
            <View style={styles.formContent2}> 
                <Animated.View entering={FadeInUp.duration(1000).springify()}>
                    <View style={styles.formEmail}>
                        <TextInput placeholder='Email' placeholderTextColor={'#444444'} />
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(200).springify()}>
                    <View style={styles.formPassword}>
                        <TextInput placeholder='Password' placeholderTextColor={'#444444'} />
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(400).springify()}>
                    <View style={styles.formButton}>
                        <TouchableOpacity style={styles.formButtonStyle}>
                            <Text style={styles.buttonText}> Login </Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).springify()}>
                    <View style={styles.formAccountRegister}>
                        <Text style={styles.registerLinkText}> Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                            <Text style={styles.linkSignUp}> Sign Up </Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor: 'white',
    },

    backgroundImg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        marginTop: 0,
    },

    iconContainer:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
    },

    image1: {
        height: '180',
        width: '160',
        marginHorizontal: 20,
    },

    image2: {
        height: '200',
        width: '180',
        marginHorizontal: 20,
        marginTop: -10,
    },

    form: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'flex-start', // Changed to flex-start to align content at the top
        paddingBottom: 340,
    },

    formContent1:
    {
        flex: 1,
        alignItems: 'center',
    },

    formContent2:
    {
        flex: 1,
        alignItems: 'center',
        marginLeft: 4,
        marginRight: 4,
        marginTop: 10,  // Adjusted for better spacing
        letterSpacing: 4,
    },

    formTitle:
    {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 60,
        marginTop: 200, // Reduced margin to ensure title and form don't overlap
        letterSpacing: 4,
    },

    formEmail:
    {
        backgroundColor: '#D3D3D3',
        padding: 10,
        borderRadius: 16,
        width: '100%',
        opacity: 0.7,
        marginBottom: 25, // Space below the Email input
    },

    formPassword:
    {
        backgroundColor: '#D3D3D3',
        padding: 10,
        borderRadius: 16,
        width: '100%',
        opacity: 0.7,
        marginBottom: 30,
    },

    formButton:
    {
        width: '100%',
    },

    formButtonStyle:
    {
        width: '100%',
        backgroundColor: '#7DF9FF',
        borderRadius: 10,
        color: 'white',
        padding: 16,
        marginBottom: 5,
    },

    buttonText:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#444444',
        textAlign: 'center',
    },

    formAccountRegister:
    {
        flexDirection: 'row',
        textAlign: 'justify',
        marginTop: 10,
    },

    registerLinkText:
    {
        color: 'white',
        fontSize: 20,
    },

    linkSignUp:
    {
        fontSize: 20,
        color: '#7DF9FF',
        fontWeight: 'bold',
    }
});