import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {auth} from '../../config/firebase';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email !== '' && password !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('signup success'))
        .catch(err => Alert.alert('signup error', err.message));
    }
  };

  return (
    <View>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
        placeholder="Password"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <Button title="Sign up" onPress={handleLogin} />
      <View>
        <Text>already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
