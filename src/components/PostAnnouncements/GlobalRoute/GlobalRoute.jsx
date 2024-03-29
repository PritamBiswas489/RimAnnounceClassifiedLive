import React, {useState, useEffect} from 'react';
import styles from './Style';
import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  FlatList,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

import Spinner from 'react-native-loading-spinner-overlay';
import {createAnnouncementService} from '../../../services/announcementCreate.service';
import AnnouncementImages from '../../AnnouncementImages/AnnouncementImages';
import AnnouncementVideos from '../../AnnouncementVideos/AnnouncementVideos';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import CategoryButton from '../../CategoryButton/CategoryButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import CountryTelephoneField from '../../CountryTelephoneField/CountryTelephoneField';
import { validatePrice } from '../../../config/utility';
import * as fr_lang from '../../../languages/lang_fr';
import * as en_lang from '../../../languages/lang_en';
import * as ar_lang from '../../../languages/lang_ar';
 
 

export default function GlobalRoute(props) {
  const language = useSelector(state => state['userAccountData'].language);
  const langs = language === 'fr' ? fr_lang.languages : language === 'ar' ? ar_lang.languages : en_lang.languages;
  const categories = useSelector(state => state['settingData'].categories);
  const locations = useSelector(state => state['settingData'].locations);
  const subLocations = useSelector(state => state['settingData'].subLocations);
  const isPromoted = useSelector(state => state['userAccountData'].isPromoted);
  const userAccData = useSelector(state => state['userAccountData']);
  const [testData, setTestData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [locationId, setSelectedLocation] = useState(null);
  const [location, setLocation] = useState('');
  const [subLocationsSelected, setSubLocationsSelected] = useState([]);
  const [subLocationId, setSelectedSubLocation] = useState(null);
  const [subLocation, setSubLocation] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [phoneCountryCode, setphoneCountryCode] = useState('+1');
  const [contactNumber, setContactNumber] = useState('');
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (testData === true) {
      setSelectedLocation(8);
      setTitle('Demo location');
      setPrice('20.00') 
      setDescription(
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      );
      
    }
    setContactNumber(userAccData?.phone);
    setphoneCountryCode(userAccData?.phoneCountryCode);
    setCategory('apartment');
  }, []);

  useEffect(() => {
    if (locationId) {
      const filteredEntry = subLocations.find(
        entry => parseInt(entry.location_id) === parseInt(locationId),
      );
      const filteredLocations = filteredEntry ? filteredEntry.locations : [];
      const locationItems = [];
      filteredLocations.forEach((locDSata, locaIndex) => {
        locationItems.push({label: language === 'fr' ? locDSata?.frName : language === 'ar' ? locDSata?.arName : locDSata?.name, value: locDSata.id});
      });
      setSubLocationsSelected(locationItems);
      setSelectedSubLocation(null);
      setSubLocation('');
    }
  }, [locationId]);

  useEffect(() => {
    if (locationId) {
      const filteredEntry = locations.find(
        entry => parseInt(entry.id) === parseInt(locationId),
      );
      const filteredLocations = filteredEntry ? filteredEntry : [];
      if (filteredLocations?.id) {
        setLocation(filteredLocations?.name);
      }
    }
  }, [locationId]);

  useEffect(() => {
    if (subLocationId && subLocationsSelected) {
      // console.log(subLocationsSelected);
      const filteredEntry = subLocationsSelected.find(
        entry => parseInt(entry.value) === parseInt(subLocationId),
      );
      const filteredLocations = filteredEntry ? filteredEntry : [];
      if (filteredLocations?.label) {
        setSubLocation(filteredLocations?.label);
      }
    }
  }, [subLocationId]);

  //publish announcement
  const publishAnnouncement = async () => {
  
    let valid = true;
    if (category.trim() === '') {
      valid = false;
      Alert.alert('Error', langs?.Select_category || 'Failed', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (title.trim() === '') {
      valid = false;
      Alert.alert('Error', langs?.Enter_title || 'Failed', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }else if(!validatePrice(parseFloat(price))){
      valid = false;
      Alert.alert('Error', langs?.Enter_valid_price || 'Failed', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);

    } else if (location.trim() === '') {
      valid = false;
      Alert.alert('Error', langs?.Enter_location || 'Failed', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (subLocationsSelected.length > 0 && subLocation === '') {
      valid = false;
      Alert.alert('Error', langs?.Select_sublocation || 'Failed', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (contactNumber.trim() === '') {
      valid = false;
      Alert.alert('Error', langs?.Enter_contact_number || 'Failed', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (description.trim() === '') {
      valid = false;
      Alert.alert('Error', langs?.Enter_description || 'Failed', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    if (valid === false) return;

    const formData = new FormData();
    setIsLoading(true);
    let fileCount = 0;
    if (images && images.length > 0) {
      images.forEach((image, index) => {
        formData.append(`images_${fileCount}`, {
          uri: image.uri,
          type: image.fileType,
          name: image.fileName,
        });
        fileCount++;
      });
    }
    if (videos && videos.length > 0) {
      videos.forEach((video, index) => {
        formData.append(`videos_${fileCount}`, {
          uri: video.uri,
          type: video.fileType,
          name: video.fileName,
        });
        fileCount++;
      });
    }
    formData.append('locationId', locationId);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('subLocationId', subLocationId);
    formData.append('subLocation', subLocation);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('phoneCountryCode', phoneCountryCode);
    formData.append('contactNumber', contactNumber);
    // console.log(formData)
    const response = await createAnnouncementService(formData);

    if (response?.data?.status === 200) {
      setIsLoading(false);
      setSelectedLocation('');
      setLocation('');
      setTitle('');
      setPrice('');
      setDescription('');
      // setContactNumber('');
      setCategory('');
      setImages('');
      setVideos('');
      navigation.navigate('Global Announcement Success');
    } else {
      setIsLoading(false);
      Alert.alert(
        'Error',
        response?.data?.error?.message || 'Server error.please try again later',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    }
  };

  const locationItems = [];
  locations.forEach((locDSata, locaIndex) => {
    locationItems.push({
      label: language === 'fr' ? locDSata?.frName : language === 'ar' ? locDSata?.arName : locDSata?.name , 
      value: locDSata.id});
  });

  useEffect(() => {
    //console.log({images});
  }, [images]);

  useEffect(() => {
    //console.log({videos});
  }, [videos]);

  const handleRadioButtonPress = option => {
    setCategory(option);
  };

  

  

  return (
    <>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#fff', marginBottom: 100}}>
          <View style={styles.tabInner}>
            <View style={styles.formWrap}>
              <View style={styles.formGroup}>
                <View>
                  <Text style={styles.inputLabel}>
                    {langs?.Select_Catgeory} <Text style={styles.redAsterisk}>*</Text>
                  </Text>
                  <View style={styles.radioButtonContainer}>
                    <FlatList
                      horizontal
                      data={categories}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item, index}) =>
                        item.id !== 'gp_delivery' && (
                          <CategoryButton
                            selected={category === item.id}
                            onPress={() => handleRadioButtonPress(item.id)}
                            icon={
                              <FontAwesomeIcon
                                name={item.icon}
                                size={28}
                                color="#555"
                              />
                            }
                            label={item.name}
                            labelFr={item.frName}
                            labelAr={item.arName}
                          />
                        )
                      }
                      keyExtractor={item => item.id}
                    />

                    {/* Add more radio buttons as needed */}
                  </View>
                </View>
              </View>

              <View style={styles.formGroup}>
                <View style={styles.inputIconBox}>
                  <Text style={styles.inputLabel}>
                    {langs?.Title} <Text style={styles.redAsterisk}>*</Text>
                  </Text>
                </View>
                <TextInput
                  placeholder={langs?.placeHolder1}
                  style={styles.input}
                  placeholderTextColor="#9c9c9c"
                  value={title}
                  onChangeText={text => setTitle(text)}
                />
              </View>

              <View style={styles.formGroup}>
                <View style={styles.inputIconBox}>
                  <Text style={styles.inputLabel}>
                    {langs?.Price} <Text style={styles.redAsterisk}>*</Text>
                  </Text>
                </View>
                <TextInput
                  value={price}
                  onChangeText={text => setPrice(text)}
                  keyboardType="numeric"
                  placeholderTextColor="#9c9c9c"
                  placeholder={langs?.Enter_price}
                  style={styles.input}
                />
              </View>
              <View style={styles.formGroup}>
                <View style={styles.inputIconBox}>
                  <Text style={styles.inputLabel}>
                    {langs?.Location} <Text style={styles.redAsterisk}>*</Text>
                  </Text>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#ededed',
                    borderRadius: 8,
                  }}>
                  <RNPickerSelect
                    placeholder={{
                      label: langs?.placeHolder2,
                      value: null,
                      color: '#9EA0A4',
                    }}
                    items={locationItems}
                    onValueChange={value => setSelectedLocation(value)}
                    style={{
                      inputAndroid: {
                        fontSize: 16,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 8,
                        color: 'black',
                      },
                      inputIOS: {
                        fontSize: 16,
                        paddingHorizontal: 10,
                        paddingVertical: 12,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 8,
                        color: 'black',
                      },
                    }}
                    value={locationId}
                  />
                </View>
              </View>
              {subLocationsSelected.length > 0 && (
                <View style={styles.formGroup}>
                  <View style={styles.inputIconBox}>
                    <Text style={styles.inputLabel}>{langs?.Sub_Location}</Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#ededed',
                      borderRadius: 8,
                    }}>
                    <RNPickerSelect
                      placeholder={{
                        label: langs?.placeHolder3,
                        value: null,
                        color: '#9EA0A4',
                      }}
                      items={subLocationsSelected}
                      onValueChange={value => setSelectedSubLocation(value)}
                      style={{
                        inputAndroid: {
                          fontSize: 16,
                          paddingHorizontal: 10,
                          paddingVertical: 8,
                          borderWidth: 1,
                          borderColor: 'gray',
                          borderRadius: 8,
                          color: 'black',
                        },
                        inputIOS: {
                          fontSize: 16,
                          paddingHorizontal: 10,
                          paddingVertical: 12,
                          borderWidth: 1,
                          borderColor: 'gray',
                          borderRadius: 8,
                          color: 'black',
                        },
                      }}
                      value={subLocationId}
                    />
                  </View>
                </View>
              )}

              <View style={styles.formGroup}>
                <View style={styles.inputIconBox}>
                  <Text style={styles.inputLabel}>
                    {langs?.Contact_number} <Text style={styles.redAsterisk}>*</Text>
                  </Text>
                </View>

                <CountryTelephoneField
                  countryCode={phoneCountryCode}
                  setCountryCode={setphoneCountryCode}
                  phoneNumber={contactNumber}
                  setPhoneNumber={setContactNumber}
                />
              </View>

              <View style={styles.formGroup}>
                <View style={styles.inputIconBox}>
                  <Text style={styles.inputLabel}>
                    {langs?.Description} <Text style={styles.redAsterisk}>*</Text>
                  </Text>
                </View>
                <TextInput
                  placeholder={langs?.placeHolder4}
                  style={styles.textArea}
                  placeholderTextColor="#9c9c9c"
                  multiline={true}
                  numberOfLines={6}
                  textAlignVertical="top"
                  value={description}
                  onChangeText={text => setDescription(text)}
                />
              </View>
            </View>
            <AnnouncementImages title={langs?.Upload_images} images={images} setImages={setImages} />
            <AnnouncementVideos videos={videos} setVideos={setVideos} />
            <View style={[styles.formGroup, styles.dFlexCenter]}>
              <Pressable
                style={styles.addFlyerBtn}
                onPress={() => publishAnnouncement()}>
                <Text style={styles.publish}>{langs?.Publish}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <Spinner
        visible={isLoading}
        textContent={'Processing...'}
        textStyle={{color: '#FFF'}}
      />
    </>
  );
}
