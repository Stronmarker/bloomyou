import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = ({ text, onPress }) => (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
    >
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);


const ParcoursScreen = () => (
    <View style={styles.container}>
        <View style={styles.header}>
            {/* <Text style={styles.title}>MES PARCOURS</Text> */}
        </View>
        <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>BLOOM YOU</Text>
            <Text> Comment ça va aujourd'hui ?</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button text=" MES EMOTIONS " />
            <Button text=" MOI... " />
            <Button text=" ... ET LES AUTRES " />
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerText}>US</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.footer}>MENTIONS LÉGALES</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.footerText}>CVG</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#DDD',
      width: '100%',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
     
     
    },
    notificationContainer: {
      padding: 50,
      width: '100%',
    },
    notificationText: {
      color: '#ff925c',
      fontSize: 20,
   
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'center',
    },
    button: {
      width: '85%',
      padding: 25,
      backgroundColor: '#FFBF47',
      margin: 20,
      borderRadius: 30,
      alignItems: 'center',
    },
    buttonText: {
      color: 'black',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: '#DDD',
      width: '100%',
    },
    footerText: {
      color: '#FFBF47',
    },
  });

export default ParcoursScreen; // Exportez le composant sous le nom ParcoursScreen
