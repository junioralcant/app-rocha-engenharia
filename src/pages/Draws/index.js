import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {parseFromTimeZone, formatToTimeZone} from 'date-fns-timezone';

import {
  Container,
  Title,
  BoxContent,
  Data,
  Content,
  TextHeader,
  TextDescription,
} from './styles';

export default function DangerList() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>Números Sorteados</Title>

        <BoxContent>
          <Content>
            <TextHeader>04403030360</TextHeader>
            <TextDescription>Mochila Universitária Escolar</TextDescription>
          </Content>
          <Data>24-03-2020</Data>
        </BoxContent>

        <BoxContent>
          <Content>
            <TextHeader>04403030360</TextHeader>
            <TextDescription>Mochila Universitária Escolar</TextDescription>
          </Content>
          <Data>24-03-2020</Data>
        </BoxContent>

        <BoxContent>
          <Content>
            <TextHeader>04403030360</TextHeader>
            <TextDescription>Mochila Universitária Escolar</TextDescription>
          </Content>
          <Data>24-03-2020</Data>
        </BoxContent>
      </Container>
    </ScrollView>
  );
}
