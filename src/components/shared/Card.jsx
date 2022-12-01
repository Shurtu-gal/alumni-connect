import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  max-width: 500px;
  height: 600 px;
  box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.3), 0 0 10px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-secondary);
  border-radius: 2em;
  overflow: hidden;

  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.4), 0 0 16px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Profile = styled.img`
  width: 100%;
  object-fit: contain;
  margin-bottom: 1em;
`;

const Content = styled.div`
  flex: 1;
  padding: 0 2em;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.p`
  width: 100%;
  font-size: 1.2em;
  font-weight: bold;
  text-align: right;
  margin-right: 3em;
  margin-bottom: 1.5em;
`;

const Connect = styled.button`
  padding: 1em 2em;
  border-radius: 100px;
  width: 150px;
  text-align: center;
  margin-bottom: 1em;
`;

const Card = (props) => {
  return (
    <Wrapper key={props.id}>
      <Profile src={props.src} alt={props.alt} />
      <Content>{props.desc}</Content>
      <Name> - {props.name}</Name>
      {props.isConnect && <Connect>Connect</Connect>}
    </Wrapper>
  );
};

export default Card;
