import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions} from '@react-navigation/native';

import {
  Container,
  BoxContent,
  BoxOption,
  Option,
  InfoUser,
  Exit,
  TextContent,
  IconContent,
  UploadTexte,
  ButtonUpload,
} from './styles';

import api from '../../Services/api';

import Danger from '../../assets/perigo.png';
import Luck from '../../assets/dados.png';
import About from '../../assets/question.png';
import Camera from '../../assets/camera.png';
import {ActivityIndicator} from 'react-native';

export default function Home({navigation, route}) {
  const [registerForUpload, setRegisterForUpload] = useState('');
  const [uploadOk, setUploadOk] = useState(false);
  const [loading, setLoading] = useState(false);

  async function exit() {
    await AsyncStorage.removeItem('@TOLIGADO:token');
    await AsyncStorage.removeItem('user');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'SignIn',
          },
        ],
      }),
    );
  }

  useEffect(() => {
    async function load() {
      const response = await AsyncStorage.getItem('registerForUpload');

      setRegisterForUpload(JSON.parse(response));
    }

    load();
  }, [uploadOk, route]);

  console.log(registerForUpload);

  async function uploadRegisterOffLine() {
    if (registerForUpload !== null) {
      setLoading(true);
      Promise.all(
        registerForUpload.map(async (item) => {
          const data = new FormData();

          data.append('file', {
            name: item.file.name,
            uri: item.file.uri,
            type: item.file.type,
          });
          data.append('location', item.location);
          data.append('description', item.description);

          await api.post('/dangers', data);
        }),
      )
        .then(async (item) => {
          await AsyncStorage.removeItem('registerForUpload');
          setUploadOk(!uploadOk);
          setLoading(false);
          alert('Upload feito com sucesso!');
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          alert('Erro ao fazer upload, verifique sua conexão com a internet.');
        });
    }
  }

  return (
    <Container>
      <BoxContent>
        <InfoUser>
          {registerForUpload !== null &&
            (loading ? (
              <ButtonUpload>
                <UploadTexte>Carregando</UploadTexte>
                <ActivityIndicator size="small" color="#ffff00" />
              </ButtonUpload>
            ) : (
              <ButtonUpload
                onPress={() => {
                  uploadRegisterOffLine();
                }}>
                <UploadTexte>Fazendo upload</UploadTexte>

                <UploadTexte>{registerForUpload.length}</UploadTexte>
              </ButtonUpload>
            ))}

          <Exit onPress={exit}>Sair</Exit>
        </InfoUser>
        <BoxOption>
          <Option onPress={() => navigation.navigate('DangerRegister')}>
            <IconContent source={Camera} />
            <TextContent>Registar Perigo</TextContent>
          </Option>

          <Option onPress={() => navigation.navigate('DangerList')}>
            <IconContent source={Danger} />
            <TextContent>Perigos Registrados</TextContent>
          </Option>
        </BoxOption>
        <BoxOption>
          <Option onPress={() => navigation.navigate('About')}>
            <IconContent source={About} />
            <TextContent>Sobre o App</TextContent>
          </Option>

          <Option onPress={() => navigation.navigate('Draws')}>
            <IconContent source={Luck} />
            <TextContent>Nº da Sorte</TextContent>
          </Option>
        </BoxOption>
      </BoxContent>
    </Container>
  );
}
