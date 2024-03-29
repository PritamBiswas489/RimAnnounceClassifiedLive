import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Linking, Platform, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 
 


const TelephoneButton = ({ phoneNumber }) => {
  
  const handlePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <View style={styles.buttonContent}>
        <Icon name="phone" size={30} color="white" />
        <Text style={styles.buttonText}>Call</Text>
      </View>
    </TouchableOpacity>
  );
};

const openWhatsAppWithPhoneNumber = (phoneNumber) => {
  const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`

  return Linking.openURL(whatsappUrl).catch(err => {
    if (Platform.OS === 'android') {
      return Linking.openURL('https://play.google.com/store/apps/details?id=com.whatsapp');
    } else if (Platform.OS === 'ios') {
      return Linking.openURL('https://apps.apple.com/app/whatsapp-messenger/id310633997');
    }
  });
};


const WhatsAppButton = ({ phoneNumber }) => {
  
  const handlePress = () => {
    // Replace 'YOUR_COUNTRY_CODE' with the actual country code
    openWhatsAppWithPhoneNumber(phoneNumber);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <View style={styles.buttonContent}>
        <Icon name="whatsapp" size={30} color="white" />
        <Text style={styles.buttonText}>WhatsApp</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#08A7EB', // or any color of your choice
    padding: 10,
    borderRadius: 5,
    marginRight: 10, // Adjust spacing between buttons
     
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    
    
    
  },
  buttonText: {
    color: 'white',
    marginLeft: 5, 
    fontSize:18
  },
});

// Example usage
const OwnerContact = ({contactnumber}) => {
   

  
  
  //console.log({admin_call_number,admin_whatsapp_number})
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
     {contactnumber && <TelephoneButton phoneNumber={contactnumber} />} 
     {contactnumber &&  <WhatsAppButton phoneNumber={contactnumber} /> } 
    </View>
  );
};

export default OwnerContact;
