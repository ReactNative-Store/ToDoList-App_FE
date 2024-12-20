import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../../../features/auth/authHook'

const RegisterScreen = ({ navigation }: any) => {
  const { register } = useAuth();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  const handleRegister = async () => {
    try {
      await register(username, password, name, email, image);
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TodoList App</Text>
      <Text style={styles.subtitle}>Register to your account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Username</Text>
        <TextInput placeholder="username" value={username} onChangeText={setUserName} style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Password</Text>
        <TextInput placeholder="password" value={password} onChangeText={setPassword} style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Name</Text>
        <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Email</Text>
        <TextInput placeholder="abc@gmail.com" value={email} onChangeText={setEmail} style={styles.input} />
        {image ? (
          <Image source={{ uri: image}} style={styles.imagePreview} />
        ) : null }
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Image</Text>
        <TextInput placeholder="url" value={image} onChangeText={setImage} style={styles.input} />

      </View>

      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
        <Text style={styles.loginText}>Already have an account?{' '}
          <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32, 
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle:{
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  lable: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  loginButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    color: '#007bff',
    fontWeight: '600',
  },
  imagePreview: {
    width: '100%',
    height: 150,
    marginBottom: 15,
    borderRadius: 8,
  },
})

export default RegisterScreen