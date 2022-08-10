import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff3f6;
`;

export const Image = styled.Image``;

export const BookBox = styled.Image`
  max-height: 300px;
  max-width: 40%;
  position: absolute;
  margin-top: -10px;
  left: -115px;
`;

export const BannerLogo = styled.Image`
  margin-top: 20px;
  max-height: 40px;
  max-width: 30%;
`;

export const TextBanner = styled.Text`
  position: absolute;
  top: 36%;
  left: 31%;
  padding: 4px;
  border-radius: 5px;
  align-self: center;
  font-size: 19px;
  color: #208eeb;
  font-weight: bold;
`;

export const Form = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 210px;
`;

export const BoxInput = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 20px 0 20px;
  margin: 0 0 55px 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 55px;
  /* background-color: #fff; */
  border-radius: 10px;
  padding-left: 15px;
  border: 1px #15a6e4;
`;

export const BoxLabel = styled.View`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;
  /* background: red; */
`;

export const Label = styled.Text`
  color: #777777;
  font-size: 16px;
`;

export const ForgotPassword = styled.Text`
  color: #208eeb;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 35px;
`;

export const Erro = styled.Text`
  z-index: 1;
  position: absolute;
  bottom: 290px;
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
  background-color: #0e4f85;
  width: 90%;
  height: 55px;
  border-radius: 10px;
  margin-top: -8%;
  margin-bottom: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;

export const Loading = styled.View`
  width: 90%;
  height: 55px;
  margin-top: -8%;
  margin-bottom: 5px;
`;
