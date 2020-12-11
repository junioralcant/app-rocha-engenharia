import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {parseFromTimeZone, formatToTimeZone} from 'date-fns-timezone';

import {Text} from 'react-native';

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
  TextDisapproved,
  Background,
  Analyzed,
  Disapproved,
  Draw
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
        <Title>Registros</Title>

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
                  {!danger.analyzed && <Analyzed>Em análise</Analyzed>}
                  {danger.disapproved && <Disapproved>Reprovado</Disapproved>}

                  <Data>{date}</Data>
                  <Draw>{danger._id}</Draw>
                  <TextHeader>{danger.location}</TextHeader>
                </Header>
                <BoxDescription>
                  <TextDescription>{danger.description}</TextDescription>
                  {danger.disapproved && <TextDisapproved>{danger.disapprovedReason}</TextDisapproved>}
                  
                </BoxDescription>
              </BoxContent>
            );
          })}
        </BoxList>
      </Container>
    </ScrollView>
  );
}
