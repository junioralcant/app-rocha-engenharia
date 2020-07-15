import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff3f6;
`;

export const BoxBanner = styled.ImageBackground``;

export const Image = styled.Image`
  max-height: 350px;
  max-width: 100%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 200px;
  background: #208eeb;
`;

export const TextBanner = styled.Text`
  position: absolute;
  top: 50%;
  padding: 4px;
  border-radius: 5px;
  align-self: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const BoxInput = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 20px 0 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 55px;
  background-color: #fff;
  margin: 0 0 15px 0;
  border-radius: 30px;
  padding-left: 15px;
`;

export const ForgotPassword = styled.Text`
  color: #208eeb;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 35px;
`;

export const Erro = styled.Text`
  align-self: center;
  text-align: center;
  color: #ff4d4d;
  font-weight: bold;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #208eeb;
  width: 90%;
  height: 55px;
  border-radius: 30px;
  margin-top: 5%;
  margin-bottom: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;

export const Loading = styled.View`
  width: 60px;
  height: 60px;
`;
