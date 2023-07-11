import React from 'react';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import Form from '../../components/Form';

const Expose = () => {
  return (
    <Layout>
      <FeedBox>
        <Form />
        <StP>양심고백이든, 뭔 고백이든 다 질러버리시게</StP>
      </FeedBox>
    </Layout>
  );
};

export default Expose;

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
