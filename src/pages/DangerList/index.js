import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {
  Container,
  BoxList,
  Title,
  BoxContent,
  Data,
  Header,
  BoxDescription,
  TextHeader,
  TextDescription,
  Background,
} from './styles';

import DangerBackground from '../../assets/danger.jpg';

export default function DangerList() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>Lista de Perigos</Title>

        <BoxList>
          <BoxContent>
            <Header>
              <Background source={DangerBackground} />
              <Data>24-03-2020</Data>
              <TextHeader>Local do Ocorrido</TextHeader>
            </Header>
            <BoxDescription>
              <TextDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud .
              </TextDescription>
            </BoxDescription>
          </BoxContent>

          <BoxContent>
            <Header>
              <Background source={DangerBackground} />
              <Data>24-03-2020</Data>
              <TextHeader>Local do Ocorrido</TextHeader>
            </Header>
            <BoxDescription>
              <TextDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud .
              </TextDescription>
            </BoxDescription>
          </BoxContent>

          <BoxContent>
            <Header>
              <Background source={DangerBackground} />
              <Data>24-03-2020</Data>
              <TextHeader>Local do Ocorrido</TextHeader>
            </Header>
            <BoxDescription>
              <TextDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud .
              </TextDescription>
            </BoxDescription>
          </BoxContent>
        </BoxList>
      </Container>
    </ScrollView>
  );
}
