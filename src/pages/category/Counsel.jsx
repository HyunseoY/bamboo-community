import React from 'react';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import Form from '../../components/Form';

const Counsel = () => {
  return (
    <Layout>
      <FeedBox>
        <Form />
        <StP>남에게 털어 놓으면 득이 될 때도 있는걸세</StP>
      </FeedBox>
    </Layout>
  );
};

export default Counsel;

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
