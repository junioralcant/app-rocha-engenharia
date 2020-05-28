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
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #208eeb;
  height: 100px;
  width: 96%;
  padding: 0px 25px;
  border-radius: 25px;
  margin-top: 12px;
`;

export const Content = styled.View`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

export const Data = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const TextHeader = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const TextDescription = styled.Text`
  color: #fff;
  font-size: 15px;
`;
