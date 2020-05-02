import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {Container, Header, Title, BoxContent, TextInfo} from './styles';

import background from '../../assets/catavento.jpeg';

export default function About() {
  return (
    <Container>
      <Header>
        <Title>Sobre o App</Title>
      </Header>
      <BoxContent>
        <TextInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam
          venenatis, commodo odio eu, dapibus ligula. Quisque imperdiet dapibus
          est, posuere faucibus mauris faucibus vitae.
        </TextInfo>

        <TextInfo>
          Cras dignissim nulla quis volutpat venenatis. Cras bibendum nibh eu
          velit bibendum, ac accumsan quam dapibus. Pellentesque nec lectus id
          lectus malesuada tempus at pharetra leo.
        </TextInfo>

        <TextInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam
          venenatis, commodo odio eu, dapibus ligula. Quisque imperdiet dapibus
          est, posuere faucibus mauris faucibus vitae.
        </TextInfo>
      </BoxContent>
    </Container>
  );
}
