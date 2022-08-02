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

export default function DangerList({navigation}) {
  const [dangers, setDangers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDangers() {
      const response = await api.get('/dangers');

      setDangers(response.data);
    }

    loadDangers();
  }, []);

  function handlerImage(id) {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
        quality: 0.2,
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

                    {danger.resolved === true ? (
                      <Resolved>Resolvido</Resolved>
                    ) : (
                      <Resolve
                        onPress={() => {
                          handlerImage(danger._id);
                        }}>
                        <TextResolve>Resolver</TextResolve>
                      </Resolve>
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
        </Container>
      </ScrollView>
    </>
  );
}
