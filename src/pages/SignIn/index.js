import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions} from '@react-navigation/native';

import api from '../../Services/api';

import {
  Container,
  BoxBanner,
  Image,
  BoxInput,
  Input,
  Button,
  TextButton,
  TextBanner,
  Erro,
  Loading,
  BannerLogo,
  BookBox,
} from './styles';

import Banner from '../../assets/persona.png';
import Logo from '../../assets/logorocha.png';
import Book from '../../assets/book.png';

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
    if (cpf.length === 0) {
      setError('Preencha cpf para continuar!');
    } else {
      try {
        setLoading(true);

        const response = await api.post('/sessions', {
          cpf,
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

        setLoading(false);
      } catch (_err) {
        console.log(_err);
        setError('Houve um problema com o login, verifique seu CPF!');
        setLoading(false);
      }
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <BoxBanner>
          <Image source={Banner} />
          <BookBox source={Book} />
        </BoxBanner>
        <BoxInput>
          <Input
            onChangeText={setCpf}
            value={cpf}
            placeholder="Informe seu CPF"
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="numeric"
          />

          {error !== 0 && <Erro>{error}</Erro>}
        </BoxInput>

        {error !== 0 && <Erro>{error}</Erro>}
        {loading ? (
          <Loading>
            <ActivityIndicator size="large" color="#208eeb" />
          </Loading>
        ) : (
          <Button onPress={handleSignInPress}>
            <TextButton>LOGIN</TextButton>
          </Button>
        )}

        <BannerLogo style={styles.logo} source={Logo} />
      </Container>
    </ScrollView>
  );
}
