import styled from 'styled-components';

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid lightgrey;
  background-color: rgba(106, 147, 176, 0.1);
  max-width: 1200px;
  margin: 0 auto;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: white;
  padding-bottom: 40px;
  margin: 40px 80px 0 80px;
  border: 1px solid gray;
`;

export const StatsContainer = styled.ul`
  display: flex;
  margin-bottom: 80px;
`;

export const StatsItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  background-color: rgba(233, 229, 206, 0.5);
  gap: 10px;
`;
