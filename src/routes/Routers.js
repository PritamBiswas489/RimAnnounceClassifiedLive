import React from 'react';
import {View, Text, Image, Alert, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Favorites from '../pages/Favorites/Favorites';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import GetInTouch from '../pages/GetInTouch/GetInTouch';
import LastAnnounces from '../pages/LastAnnounces/LastAnnounces';
import MyAccount from '../pages/MyAccount/MyAccount';
import Splash from '../pages/Splash/Splash';
import Details from '../pages/Details/Details';
import PostTrip from '../pages/PostTrip/PostTrip';
import Logout from '../pages/Logout/Logout';
import Global from '../pages/Global/Global';
import Premium from '../pages/Premium/Premium';
import Apartment from '../pages/Apartment/Apartment';
import GpDelivery from '../pages/GpDelivery/GpDelivery';
import EditAnnouncement from '../pages/EditAnnouncement/EditAnnouncement';
import SplashScreen from '../pages/SplashScreen/SplashScreen';

import SuccessGlobal from '../pages/SuccessPages/SuccessGlobal';
import SuccessApartment from '../pages/SuccessPages/SuccessApartment';
import SuccessApartmentPre from '../pages/SuccessPages/SuccessApartmentPre';
import SuccessGpDelivery from '../pages/SuccessPages/SuccessGpDelivery';
import SuccessGpDeliveryPre from '../pages/SuccessPages/SuccessGpDeliveryPre';

import home from '../assets/images/tab/home.png';
import global from '../assets/images/tab/global.png';
import premium from '../assets/images/tab/premium.png';

import appartment from '../assets/images/tab/appartment.png';
import delivery from '../assets/images/tab/delivery.png';
import plus from '../assets/images/tab/plus.png';
import user from '../assets/images/user-3.png';
import car from '../assets/images/tab/car-1.png';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import GpCar from '../pages/GpCar/GpCar';
 

import * as fr_lang from '../languages/lang_fr';
import * as en_lang from '../languages/lang_en';
import * as ar_lang from '../languages/lang_ar';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#009DE0',
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.3,
            shadowRadius: 5,
          },
          android: {
            elevation: 5,
            shadowOpacity: 0.3,
            shadowColor: '#000',
          },
        }),
      }}>
      {children}
    </View>
  </TouchableOpacity>
);
function Tabs() {
  const isLoggedIn = useSelector(state => state['userAccountData'].isLoggedIn);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Global}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={home}
                resizeMode="contain"
                style={{
                  width: 21,
                  height: 21,
                  tintColor: focused ? '#009de0' : '#c4c4c4',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Global"
        component={Premium}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={premium}
                resizeMode="contain"
                style={{
                  width: 21,
                  height: 21,
                  tintColor: focused ? '#009de0' : '#c4c4c4',
                }}
              />
            </View>
          ),
        }}
      />

      {isLoggedIn ? (
        <Tab.Screen
          name="PostTrip"
          component={PostTrip}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={plus}
                resizeMode="contain"
                style={{
                  width: 26,
                  height: 26,
                  tintColor: '#fff',
                }}
              />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
      ) : (
        <Tab.Screen
          name="PostTrip"
          component={Login}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={plus}
                resizeMode="contain"
                style={{
                  width: 26,
                  height: 26,
                  tintColor: '#fff',
                }}
              />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
      )}

      <Tab.Screen
        name="GpDelivery"
        component={GpDelivery}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={delivery}
                resizeMode="contain"
                style={{
                  width: 21,
                  height: 21,
                  tintColor: focused ? '#009de0' : '#c4c4c4',
                }}
              />
            </View>
          ),
        }}
      />

      {isLoggedIn ? (
        <Tab.Screen
          name="Account"
          component={MyAccount}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={user}
                  resizeMode="contain"
                  style={{
                    width: 21,
                    height: 21,
                    tintColor: focused ? '#009de0' : '#c4c4c4',
                  }}
                />
              </View>
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="Account"
          component={Login}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={user}
                  resizeMode="contain"
                  style={{
                    width: 21,
                    height: 21,
                    tintColor: focused ? '#009de0' : '#c4c4c4',
                  }}
                />
              </View>
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const Routers = () => {
  const language = useSelector(state => state['userAccountData'].language);
  const langs = language === 'fr' ? fr_lang.languages : language === 'ar' ? ar_lang.languages : en_lang.languages;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Global Announcement Success"
          options={{ title: langs?.Global_Announcement_Success }}
          component={SuccessGlobal}
        />
        <Stack.Screen
          name="Apartment Announcement Success"
          component={SuccessApartment}
        />
        <Stack.Screen
          name="Apartment Announcement"
          component={SuccessApartmentPre}
        />
        <Stack.Screen
          name="Premium Announcement"
          options={{ title: langs?.Premium_Announcement }}
          component={SuccessGpDelivery}
        />
        <Stack.Screen
          name="GP Delivery Announcement"
          component={SuccessGpDeliveryPre}
        />
        <Stack.Screen name="Logout" options={{ title: langs?.Logout }} component={Logout} />
        <Stack.Screen name="Login" options={{ title: langs?.Login }} component={Login} />
        <Stack.Screen name="Register" options={{ title: langs?.Register }} component={Register} />
        <Stack.Screen
          name="Announcement Details"
          options={{title: langs?.Announcement_Details}}
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
