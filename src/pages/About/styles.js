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
  background-color: #208eeb;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #fff;
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
  margin-bottom: 20px;
  text-align: center;
`;
