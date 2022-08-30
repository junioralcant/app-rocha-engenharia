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
  color: #208eeb;
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
  height: 270px;
  width: 100%;
  border-radius: 10px;
  margin-top: 12px;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Background = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Analyzed = styled.Text`
  position: absolute;
  top: 35px;
  right: 8px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  background: #fcba03;
  padding: 1px 5px;
  border-radius: 3px;
`;

export const Disapproved = styled.Text`
  position: absolute;
  top: 35px;
  right: 8px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  background: #f32424;
  padding: 1px 5px;
  border-radius: 3px;
`;

export const Resolved = styled.Text`
  position: absolute;
  top: 65px;
  right: 8px;
  color: #fff;
  background: ${({type}) =>
    (type === 'approved' && '#5fd068') ||
    (type === 'analysis' && '#ffc447') ||
    (type === 'disapproved' && '#f32424')};
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 13px;
`;

export const Resolve = styled.TouchableOpacity`
  position: absolute;
  top: 65px;
  right: 8px;
  background: #208eeb;
  padding: 1px 5px;
  border-radius: 3px;
`;

export const TextResolve = styled.Text`
  color: #fff;
  font-size: 13px;
`;

export const Data = styled.Text`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Draw = styled.Text`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const TextHeader = styled.Text`
  position: absolute;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 0 3px;
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
  font-size: 13px;
`;

export const TextDisapproved = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 15px;
  background: #f32424;
  padding: 1px 5px;
  border-radius: 3px;
`;

export const Modal = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
`;

export const Loading = styled.View`
  /* margin-top: 40%; */
  width: 60px;
  height: 60px;
`;
