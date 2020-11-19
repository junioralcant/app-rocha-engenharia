import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff3f6;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const BoxContent = styled.View`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 96%;
  padding: 10px 25px;
  border-radius: 25px;
  margin-top: 12px;
`;

export const Box = styled.View`
  background: #2b84cf;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Content = styled.View`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Cpf = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const TextHeader = styled.Text`
  font-size: 19px;
  color: #fff;
  font-weight: bold;
`;

export const TextDescription = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
