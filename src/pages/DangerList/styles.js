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

export const BoxList = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const BoxContent = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #208eeb;
  height: 200px;
  width: 100%;
  border-radius: 100px;
  margin-top: 12px;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: red;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Background = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Data = styled.Text`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 16px;
`;

export const TextHeader = styled.Text`
  position: absolute;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const BoxDescription = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  padding: 10px;
  background-color: #208eeb;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const TextDescription = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 15px;
`;
