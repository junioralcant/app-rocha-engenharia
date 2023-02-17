import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import RNPickerSelect from 'react-native-picker-select';

import api from '../../Services/api';

import {ActivityIndicator} from 'react-native';

import {
  Container,
  BoxContent,
  Input,
  Button,
  TextButton,
  Title,
  BoxPhoto,
  IconPhoto,
  TextPhoto,
  Preview,
  Loading,
  Erro,
} from './styles';

import Camera from '../../assets/interface.png';

export default function DangerRegister({navigation}) {
  const [preview, setPreview] = useState();
  const [path, setPath] = useState(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [registerForUpload, setRegisterForUpload] = useState('');
  const [riskCategory, setRiskCategory] = useState('');

  function handlerImage() {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
        quality: 0.1,
      },
      (upload) => {
        if (upload.error) {
          console.log('Error');
        } else if (upload.didCancel) {
          console.log('Used Canceled');
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`, // obj do tipo base 64
          };

          setPreview(preview);
          setPath(upload);
        }
      },
    );
  }

  useEffect(() => {
    async function load() {
      const response = await AsyncStorage.getItem('registerForUpload');

      setRegisterForUpload(JSON.parse(response));
    }

    load();
  }, []);

  async function handlerSendDanger() {
    if (path === null) {
      setError('Tire uma foto para continuar');
    } else {
      try {
        setLoading(true);
        // await AsyncStorage.removeItem('registerForUpload');
        const data = new FormData();

        data.append('file', {
          name: !path.fileName ? String(Date.now()) : path.fileName,
          uri: path.uri,
          type: path.type,
        });

        data.append('location', location);
        data.append('description', description);
        data.append('riskCategory', riskCategory ? riskCategory : 'Outros');

        await api.post('/dangers', data);
        setLoading(false);
        alert('Registro enviado para análise');

        navigation.navigate('Home', {
          params: {back: true},
        });

        // eslint-disable-next-line no-catch-shadow
      } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.status);

        const data = new FormData();

        data.append('file', {
          name: !path.fileName ? String(Date.now()) : path.fileName,
          uri: path.uri,
          type: path.type,
        });

        data.append('location', location);
        data.append('description', description);
        data.append('riskCategory', riskCategory ? riskCategory : 'Outros');

        let object = {
          file: {
            name: !path.fileName ? String(Date.now()) : path.fileName,
            uri: path.uri,
            type: path.type,
          },
          description: description,
          location: location,
        };

        if (registerForUpload === null) {
          await AsyncStorage.setItem(
            'registerForUpload',
            JSON.stringify([object]),
          );
        } else {
          let registerUpdated = registerForUpload.concat(object);

          await AsyncStorage.setItem(
            'registerForUpload',
            JSON.stringify(registerUpdated),
          );
        }

        setLoading(false);
        alert('Registro feito no modo off-line');
        navigation.navigate('Home', {
          params: {back: true},
        });
      }
    }
  }

  console.log(riskCategory);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <BoxContent>
          <Title>Registrar</Title>

          <BoxPhoto onPress={() => handlerImage()}>
            <TextPhoto>Foto</TextPhoto>
            <IconPhoto source={Camera} />
          </BoxPhoto>
          {preview && <Preview source={preview} />}
          <Input
            onChangeText={setLocation}
            value={location}
            placeholder="Local"
          />
          <Input
            onChangeText={setDescription}
            value={description}
            placeholder="Descrição do ocorrido"
          />
          <RNPickerSelect
            onValueChange={(value) => setRiskCategory(value)}
            placeholder={{label: 'Selecione uma categoria', value: ''}}
            value={riskCategory}
            items={[
              {label: 'Trânsito', value: 'Trânsito'},
              {label: 'Choque ou incêndio', value: 'Choque ou incêndio'},
              {label: 'Queda', value: 'Queda'},
              {label: 'Corte ou fratura', value: 'Corte ou fratura'},
              {label: 'EPI ou EPC', value: 'EPI ou EPC'},
              {
                label: 'Equipamento ou ferramenta',
                value: 'Equipamento ou ferramenta',
              },
              {label: 'Documentação', value: 'Documentação'},
              {label: 'Pessoas', value: 'Pessoas'},
              {label: 'Outros', value: 'Outros'},
            ]}
          />
          {error !== 0 && <Erro>{error}</Erro>}
          {loading ? (
            <Loading>
              <ActivityIndicator size="large" color="#208eeb" />
            </Loading>
          ) : (
            <Button onPress={handlerSendDanger}>
              <TextButton>ENVIAR</TextButton>
            </Button>
          )}
        </BoxContent>
      </Container>
    </ScrollView>
  );
}
