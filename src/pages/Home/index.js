import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  BoxContent,
  BoxOption,
  Option,
  InfoUser,
  Exit,
  TextContent,
  IconContent,
} from './styles';

import Danger from '../../assets/perigo.png';
import Luck from '../../assets/dados.png';
import About from '../../assets/question.png';
import Camera from '../../assets/camera.png';

export default function Home({navigation}) {
  async function exit() {
    await AsyncStorage.removeItem('@TOLIGADO:token');
    await AsyncStorage.removeItem('userId');
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <BoxContent>
        <InfoUser>
          <Exit onPress={exit}>Sair</Exit>
        </InfoUser>
        <BoxOption>
          <Option onPress={() => navigation.navigate('DangerRegister')}>
            <IconContent source={Camera} />
            <TextContent>Registar Perigo</TextContent>
          </Option>

          <Option onPress={() => navigation.navigate('DangerList')}>
            <IconContent source={Danger} />
            <TextContent>Perigos Registrados</TextContent>
          </Option>
        </BoxOption>
        <BoxOption>
          <Option onPress={() => navigation.navigate('About')}>
            <IconContent source={About} />
            <TextContent>Sobre o App</TextContent>
          </Option>

          <Option onPress={() => navigation.navigate('Draws')}>
            <IconContent source={Luck} />
            <TextContent>Nº da Sorte</TextContent>
          </Option>
        </BoxOption>
      </BoxContent>
    </Container>
  );
}
