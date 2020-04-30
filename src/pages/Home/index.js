import React from 'react';
import {SafeAreaView} from 'react-native';

import {
  Container,
  BoxContent,
  BoxOption,
  Option,
  InfoUser,
  UserIncon,
  NameUser,
  TextContent,
  IconContent,
} from './styles';

import User from '../../assets/social.png';
import Danger from '../../assets/perigo.png';
import Luck from '../../assets/dados.png';
import About from '../../assets/question.png';
import Camera from '../../assets/camera.png';

export default function Home({navigation}) {
  return (
    <Container>
      <BoxContent>
        <InfoUser>
          <NameUser>Junior Marques</NameUser>
          <UserIncon source={User} />
        </InfoUser>
        <BoxOption>
          <Option onPress={() => navigation.navigate('DangerRegister')}>
            <IconContent source={Camera} />
            <TextContent>Registar Perigo</TextContent>
          </Option>
          <Option>
            <IconContent source={Luck} />
            <TextContent>Nº da Sorte</TextContent>
          </Option>
        </BoxOption>
        <BoxOption>
          <Option>
            <IconContent source={About} />
            <TextContent>Sobre o App</TextContent>
          </Option>
          <Option>
            <IconContent source={Danger} />
            <TextContent>Perigos Registrados</TextContent>
          </Option>
        </BoxOption>
      </BoxContent>
    </Container>
  );
}
