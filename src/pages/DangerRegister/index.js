import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-picker';

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
} from './styles';

import Camera from '../../assets/interface.png';

export default function DangerRegister() {
  const [preview, setPreview] = useState();

  function handlerImage() {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
      },
      upload => {
        if (upload.error) {
          console.log('Error');
        } else if (upload.didCancel) {
          console.log('Used Canceled');
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`, // obj do tipo base 64
          };

          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split('.');
            ext = ext.toLowerCase() == 'heic' ? 'jpg' : ext; // se o valor dessa da extensão for igual a heic substitua para jpg se não  deixe como esta
          } else {
            prefix = new Date().getTime();
            ext = 'jpg';
          }
          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`,
          };

          setPreview(preview);
        }
      },
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <BoxContent>
          <Title>Registrar Perigo</Title>

          <BoxPhoto onPress={() => handlerImage()}>
            <TextPhoto>Foto</TextPhoto>
            <IconPhoto source={Camera} />
          </BoxPhoto>
          {preview && <Preview source={preview} />}
          <Input placeholder="Descrição do ocorrido" />
          <Input placeholder="Local" />
          <Input placeholder="Data" />
          <Button>
            <TextButton>ENVIAR</TextButton>
          </Button>
        </BoxContent>
      </Container>
    </ScrollView>
  );
}
