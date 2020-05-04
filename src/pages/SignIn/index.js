import React from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';

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
} from './styles';
import Banner from '../../assets/worker03.png';

export default function SignIn({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <BoxBanner>
          <Image source={Banner} />
          <TextBanner>Seja bem vindo!</TextBanner>
        </BoxBanner>
        <BoxInput>
          <Input placeholder="Informe seu CPF" />
          <Input placeholder="Informe sea senha" />
          <TouchableOpacity>
            <ForgotPassword>Resgatar Senha</ForgotPassword>
          </TouchableOpacity>
        </BoxInput>
        <Button onPress={() => navigation.navigate('Home')}>
          <TextButton>LOGIN</TextButton>
        </Button>
      </Container>
    </ScrollView>
  );
}
