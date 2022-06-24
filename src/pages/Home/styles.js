import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff3f6;
  height: 100%;
`;

export const BoxContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #208eeb;
  height: 90%;
  width: 90%;
  border-radius: 50px;
`;

export const InfoUser = styled.View`
  position: absolute;
  top: 40px;
  display: flex;
  /* flex-direction: row; */
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

export const UserIncon = styled.Image`
  width: 18px;
  height: 18px;
  margin: 0 10% 0 5px;
`;

export const Exit = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  margin-right: 10%;
`;

export const UploadTexte = styled.Text`
  color: #ffff00;
  font-weight: bold;
  font-size: 15px;
  margin-right: 5px;
`;

export const BoxOption = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 145px;
  width: 290px;
`;

export const Option = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1.5px solid #fff;
  border-radius: 20px;
  width: 130px;
  height: 120px;
`;

export const TextContent = styled.Text`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;

export const IconContent = styled.Image`
  height: 40px;
  width: 40px;
  margin-bottom: 10px;
`;

export const ButtonUpload = styled.TouchableOpacity`
  margin-right: 10%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
