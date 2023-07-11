import React from 'react';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import Form from '../../components/Form';

const Complaint = () => {
  return (
    <Layout>
      <FeedBox>
        <Form />
        <StP>쌓아두어 무엇하나.. 속이나 풀고가게</StP>
      </FeedBox>
    </Layout>
  );
};

export default Complaint;

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
