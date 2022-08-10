import React, {useState, useEffect} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

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
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUserLogaded() {
      const responseUser = await AsyncStorage.getItem('user');

      setUser(JSON.parse(responseUser));
    }

    loadUserLogaded();
  }, []);

  useEffect(() => {
    async function loadDraw() {
      setLoading(true);
      const response = await api.get(`/draws?company=${user.belongsCompany}`);

      setDraws(response.data);
      setLoading(false);
    }

    loadDraw();
  }, [user]);

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
        <Title>Registros Sorteados</Title>

        {loading ? (
          <ActivityIndicator size="large" color="#0e4f85" />
        ) : (
          draws.map((draw) => {
            return (
              <BoxContent key={draw._id}>
                {draws.length > 0 && (
                  <>
                    <Date>{moment(draw.createdAt).format('DD-MM-YYYY')}</Date>
                    {draw.idsDraws.map((idDraw) => (
                      <Box key={idDraw._id}>
                        <Content>
                          <TextHeader>{idDraw.recordId._id}</TextHeader>
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
            );
          })
        )}
      </Container>
    </ScrollView>
  );
}
