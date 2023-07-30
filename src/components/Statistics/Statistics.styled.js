import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(106, 147, 176, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  height: 300px;
`;

export const StatisticsH2 = styled.h2`
  width: 300px;
  line-height: 80px;
  text-align: center;
  background-color: white;
  text-transform: uppercase;
`;

export const StatisticsUl = styled.ul`
  display: flex;
  width: 300px;
`;

export const StatisticsLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 60px;
  line-height: 30px;
  text-align: center;
  background-color: ${props => props.color};
  color: white;
`;
