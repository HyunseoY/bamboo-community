import React from 'react';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import Form from '../../components/Form';

const Secret = () => {
  return (
    <Layout>
      <FeedBox>
        <Form />
        <StP>나만 알고 있을테니 살짝 말해보시게</StP>
      </FeedBox>
    </Layout>
  );
};

export default Secret;

const FeedBox = styled.div`
  background-color: #f2f2f0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StP = styled.div`
  font-size: 15px;
`;
