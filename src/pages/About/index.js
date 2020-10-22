import React from 'react';

import {StyleSheet} from 'react-native';

import {Container, Header, Title, BoxContent, TextInfo, Image} from './styles';

import Banner from '../../assets/persona.png';

const styles = StyleSheet.create({
  banner: {
    resizeMode: 'stretch',
    width: 200,
  },
});

export default function About() {
  return (
    <Container>
      <Header>
        <Title>Sobre o App</Title>

        <Image source={Banner} style={styles.banner} />
      </Header>
      <BoxContent>
        <TextInfo>
          O app "TÔ LIGADO SSMA" aguça a percepção de riscos de todos aqueles
          que vestem a camisa da prevenção.
        </TextInfo>

        <TextInfo>
          É uma ferramenta moderna que garante o registro de todos os riscos de
          incidentes.
        </TextInfo>

        <TextInfo>
          O sistema de gestão recebe, avalia, aprova o registro offline e gera
          um código da sorte
        </TextInfo>

        <TextInfo>
          O app proporciona sorteios mensais e premia os mais engajados.
        </TextInfo>

        <TextInfo>
          Com o app todos se tornam multiplicadores da prevenção.
        </TextInfo>
      </BoxContent>
    </Container>
  );
}
