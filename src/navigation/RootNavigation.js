import React, {createContext, useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import ChatList from '../screens/ChatList';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../config/firebase';
import {ActivityIndicator, View} from 'react-native';

const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChatList" component={ChatList} />
    </Stack.Navigator>
  );
}

export default function RootNavigation() {
  const {user, setUser} = useContext(AuthenticatedUserContext);
  const {loading, setLoading} = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async authenticatedUser => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
