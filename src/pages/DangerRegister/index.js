import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-picker';

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

  function handlerImage() {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
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

  console.log(path);

  async function handlerSendDanger() {
    if (path === null) {
      setError('Tire uma foto para continuar');
    } else {
      try {
        setLoading(true);
        const data = new FormData();

        data.append('file', {
          name: path.fileName,
          uri: path.uri,
          type: path.type,
        });
        data.append('location', location);
        data.append('description', description);

        await api.post('/dangers', data);
        setLoading(false);

        alert('Registro enviado para análise');
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  }

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
