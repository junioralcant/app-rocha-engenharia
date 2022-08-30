import React, {useState, useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {parseFromTimeZone, formatToTimeZone} from 'date-fns-timezone';
import ImagePicker from 'react-native-image-picker';

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
  Draw,
  Resolve,
  TextResolve,
  Resolved,
  Modal,
  Loading,
} from './styles';
import {Alert} from 'react-native';

export default function DangerList({navigation}) {
  const [dangers, setDangers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingDanger, setLoadingDanger] = useState(false);

  useEffect(() => {
    async function loadDangers() {
      setLoadingDanger(true);
      const response = await api.get('/dangers');

      setDangers(response.data);
      setLoadingDanger(false);
    }

    loadDangers();
  }, []);

  function handlerImage(id) {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
        quality: 0.1,
      },
      async (upload) => {
        if (upload.error) {
          console.log('Error');
        } else if (upload.didCancel) {
          console.log('Used Canceled');
        } else {
          if (upload === null) {
            alert('Tire uma foto para continuar!');
          } else {
            setLoading(true);

            try {
              const data = new FormData();

              data.append('file', {
                name: !upload.fileName ? String(Date.now()) : upload.fileName,
                uri: upload.uri,
                type: upload.type,
              });

              await api.put(`/resolved/${id}`, data);

              setLoading(false);

              alert('Registro resolvido enviado para análise');

              navigation.navigate('Home', {
                params: {back: true},
              });

              // eslint-disable-next-line no-catch-shadow
            } catch (error) {
              console.log(error);
              setLoading(false);
              alert('Não é possível resolver problema off-line');
              navigation.navigate('Home', {
                params: {back: true},
              });
            }
          }
        }
      },
    );
  }

  return (
    <>
      {loading && (
        <Modal>
          <Loading>
            <ActivityIndicator size="large" color="#208eeb" />
          </Loading>
        </Modal>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Title>Registros</Title>

          {loadingDanger ? (
            <ActivityIndicator size="large" color="#0e4f85" />
          ) : (
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
                      {danger.disapproved && (
                        <Disapproved>Reprovado</Disapproved>
                      )}

                      {danger.resolved === true ? (
                        <Resolved
                          type={
                            (danger.resolvedApproved === 'ANALYSIS' &&
                              'analysis') ||
                            (danger.resolvedApproved === 'APPROVAD' &&
                              'approved') ||
                            (danger.resolvedApproved === 'DISAPPROVED' &&
                              'disapproved')
                          }
                          onPress={() => {
                            if (danger.disapprovedReasonResolved) {
                              Alert.alert(
                                'Reprovado mensagem',
                                danger.disapprovedReasonResolved &&
                                  String(danger.disapprovedReasonResolved),
                              );
                            }
                          }}>
                          Resolvido
                        </Resolved>
                      ) : (
                        !danger.disapproved && (
                          <Resolve
                            onPress={() => {
                              handlerImage(danger._id);
                            }}>
                            <TextResolve>Resolver</TextResolve>
                          </Resolve>
                        )
                      )}

                      <Data>{date}</Data>
                      <Draw>{danger._id}</Draw>
                      <TextHeader>{danger.location}</TextHeader>
                    </Header>
                    <BoxDescription>
                      <TextDescription>{danger.description}</TextDescription>
                      {danger.disapproved && (
                        <TextDisapproved>
                          {danger.disapprovedReason}
                        </TextDisapproved>
                      )}
                    </BoxDescription>
                  </BoxContent>
                );
              })}
            </BoxList>
          )}
        </Container>
      </ScrollView>
    </>
  );
}
