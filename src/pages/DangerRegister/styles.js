import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  background-color: #eff3f6;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 50px;
  color: #208eeb;
`;

export const BoxContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 20px 0 20px;
`;

export const BoxPhoto = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 150px;
  height: 50px;
  padding: 10px 15px 10px 15px;
  border-radius: 30px;
  background-color: #fff;
  margin-bottom: 15px;
`;
export const IconPhoto = styled.Image`
  height: 24px;
  width: 24px;
`;

export const TextPhoto = styled.Text`
  color: #b8b8b8;
`;

export const Preview = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  align-self: center;
  border-radius: 4px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 55px;
  background-color: #fff;
  margin: 0 0 15px 0;
  border-radius: 30px;
  padding-left: 15px;
`;

export const Erro = styled.Text`
  align-self: center;
  text-align: center;
  color: #ff4d4d;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #208eeb;
  width: 100%;
  height: 55px;
  border-radius: 30px;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;

export const Loading = styled.View`
  width: 60px;
  height: 60px;
`;
