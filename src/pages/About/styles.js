import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff3f6;
  height: 100%;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 40%;
`;

export const Image = styled.Image`
  max-height: 200px;
  max-width: 80%;
  margin-top: -5%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #208eeb;
  position: absolute;
  left: 60%;
  bottom: 58%;
`;

export const BoxContent = styled.View`
  display: flex;
  top: 10%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 90%;
  padding: 10px;
  border-radius: 30px;
`;

export const TextInfo = styled.Text`
  font-size: 17px;
  width: 90%;
  margin-bottom: 20px;
  text-align: center;
  color: #208eeb;
  font-weight: bold;
`;
