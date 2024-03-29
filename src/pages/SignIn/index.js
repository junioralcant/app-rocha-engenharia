import React, {useState, useEffect} from 'react';
import {ScrollView, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions} from '@react-navigation/native';

import api from '../../Services/api';

import {
  Container,
  Image,
  BoxInput,
  Input,
  Button,
  TextButton,
  Erro,
  Loading,
  BannerLogo,
  Label,
  BoxLabel,
  Form,
} from './styles';

import Girl from '../../assets/girl.png';
import Logo from '../../assets/logorocha.png';

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'stretch',
    width: 200,
  },
});

export default function SignIn({navigation}) {
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('user').then((userId) => {
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
    if (cpf.length === 0) {
      setError('Preencha cpf para continuar!');
    } else {
      try {
        setLoading(true);

        const response = await api.post('/sessions', {
          cpf,
        });

        await AsyncStorage.setItem('@TOLIGADO:token', response.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));

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

        setLoading(false);
      } catch (_err) {
        console.log(_err);
        setError('Houve um problema com o login, verifique seu CPF!');
        setLoading(false);
      }
    }
  }

  function inputCPFMask(value) {
    let valor = value;

    if (valor.length <= 14) {
      valor = valor.replace(/\D/g, '');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d{2})$/, '$1-$2');
    }

    setCpf(valor);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        {error !== 0 && <Erro>{error}</Erro>}

        <Image source={Girl} />

        <Form>
          <BoxInput>
            <BoxLabel>
              <Label>CPF</Label>
            </BoxLabel>
            <Input
              onChangeText={(value) => inputCPFMask(value)}
              value={cpf}
              placeholder="Informe seu CPF"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={14}
            />
          </BoxInput>

          {loading ? (
            <Loading>
              <ActivityIndicator size="large" color="#0e4f85" />
            </Loading>
          ) : (
            <Button onPress={handleSignInPress}>
              <TextButton>LOGIN</TextButton>
            </Button>
          )}
        </Form>

        <BannerLogo style={styles.logo} source={Logo} />
      </Container>
    </ScrollView>
  );
}
