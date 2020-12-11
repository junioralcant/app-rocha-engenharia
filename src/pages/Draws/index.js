import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import moment from 'moment';

import api from '../../Services/api';

import {
  Container,
  Title,
  BoxContent,
  Cpf,
  Content,
  TextHeader,
  TextDescription,
  Box,
  Date,
} from './styles';

export default function Draw() {
  const [draws, setDraws] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadDraw() {
      const response = await api.get('/draws');

      setDraws(response.data.docs);
    }

    loadDraw();
  }, []);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('/users');

      setUsers(response.data);
    }

    loadUser();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>Números Sorteados</Title>

        {
          draws.map(draw => {
            return (
              <BoxContent>
              {draws.length > 0 && (
                <>
                  <Date>{moment(draw.createdAt).format('DD-MM-YYYY')}</Date>
                  {draw.idsDraws.map((idDraw) => (
                    <Box key={idDraw._id}>
                      <Content>
                        <TextHeader>{idDraw.recordId._id}</TextHeader>
                        {console.log(idDraw)}
                        {users.map((user) => {
                          if (user._id === idDraw.recordId.user) {
                            return (
                              <View key={user._id}>
                                <TextDescription key={user._id}>
                                  {user.name}
                                </TextDescription>
                                <Cpf>CPF: {user.cpf}</Cpf>
                              </View>
                            );
                          }
                        })}
                      </Content>
                    </Box>
                  ))}
                </>
              )}
            </BoxContent>
            )
          })
        }
      </Container>
    </ScrollView>
  );
}
