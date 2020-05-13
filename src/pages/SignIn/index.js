import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions} from '@react-navigation/native';

import api from '../../Services/api';

import {
  Container,
  BoxBanner,
  Image,
  BoxInput,
  Input,
  ForgotPassword,
  Button,
  TextButton,
  TextBanner,
  Erro,
} from './styles';

import Banner from '../../assets/worker03.png';

export default function SignIn({navigation}) {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userId').then((userId) => {
      if (userId) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'Home',
              },
            ],
          }),
        );
      }
    });
  }, [navigation]);

  async function handleSignInPress() {
    if (cpf.length === 0 || password.length === 0) {
      setError('Preencha usuário e senha para continuar!');
    } else {
      try {
        const response = await api.post('/sessions', {
          cpf,
          password,
        });

        await AsyncStorage.setItem('@TOLIGADO:token', response.data.token);
        await AsyncStorage.setItem('userId', response.data.user._id);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'Home',
              },
            ],
          }),
        );
      } catch (_err) {
        console.log(_err);
        setError('Houve um problema com o login, verifique seu CPF e Senha!');
      }
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <BoxBanner>
          <Image source={Banner} />
          <TextBanner>Seja bem vindo!</TextBanner>
        </BoxBanner>
        <BoxInput>
          <Input
            onChangeText={setCpf}
            value={cpf}
            placeholder="Informe seu CPF"
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <Input
            onChangeText={setPassword}
            value={password}
            placeholder="Informe sea senha"
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={true}
          />
          {error !== 0 && <Erro>{error}</Erro>}
          <TouchableOpacity>
            <ForgotPassword>Resgatar Senha</ForgotPassword>
          </TouchableOpacity>
        </BoxInput>
        <Button onPress={handleSignInPress}>
          <TextButton>LOGIN</TextButton>
        </Button>
      </Container>
    </ScrollView>
  );
}
