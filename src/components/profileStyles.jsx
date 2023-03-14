import styled from 'styled-components';

export const Profile = styled.div`
  width: 450px;
  margin: auto;
  padding: 30px;
  margin-bottom: 77px;
  background-color: black;
  box-shadow: 0 10px 25px gray;
  border-radius: 5%;
`;

export const Avatar = styled.img`
  width: 200px;
  height: auto;
  margin: 0 auto 25px;
  display: block;
  border-radius: 50%;
  box-shadow: 0 5px 20px #5c5e5f;
  background: white;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

export const Name = styled.p`
  font-size: 28px;
  color: white;
  text-shadow: 0 2px 6px #000000;
`;

export const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  padding: 3px;
  gap: 1px;
  color: white;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 1px 3px 12px black;
`;
