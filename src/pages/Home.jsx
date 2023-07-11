import React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import { styled } from 'styled-components';

const Home = () => {
  return (
    <Layout>
      <FeedBox>
        <Form />
        <StP>최근에는 어떤 일들이 있었는지 아는가</StP>
      </FeedBox>
    </Layout>
  );
};

export default Home;

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
