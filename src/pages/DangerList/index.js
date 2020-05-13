import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {parseFromTimeZone, formatToTimeZone} from 'date-fns-timezone';

import api from '../../Services/api';

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

export default function DangerList() {
  const [dangers, setDangers] = useState([]);

  useEffect(() => {
    async function loadDangers() {
      const response = await api.get('/dangers');

      setDangers(response.data);
    }

    loadDangers();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>Perigos Registrados</Title>

        <BoxList>
          {dangers.map((danger) => {
            const dateRecord = parseFromTimeZone(danger.createdAt, {
              timeZone: 'America/Sao_Paulo',
            });

            const date = formatToTimeZone(dateRecord, 'DD/MM/YYYY', {
              timeZone: 'Europe/Berlin',
            });

            return (
              <BoxContent key={danger._id}>
                <Header>
                  <Background source={{uri: `${danger.image.url}`}} />
                  <Data>{date}</Data>
                  <TextHeader>{danger.location}</TextHeader>
                </Header>
                <BoxDescription>
                  <TextDescription>{danger.description}</TextDescription>
                </BoxDescription>
              </BoxContent>
            );
          })}
        </BoxList>
      </Container>
    </ScrollView>
  );
}
