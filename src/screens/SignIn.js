import {
  View,
  Text,
  Alert,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/firebase';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Logged in'))
        .catch(err => Alert.alert('Login error', err.message));
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
      <Button title="Login" onPress={handleLogin} />
      <View>
        <Text>Dont have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
