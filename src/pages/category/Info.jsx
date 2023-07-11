import React from 'react';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import Form from '../../components/Form';

const Info = () => {
  return (
    <Layout>
      <FeedBox>
        <Form />
        <StP>거 꿀은 나눠먹어야 맛있는거 아니겠나</StP>
      </FeedBox>
    </Layout>
  );
};

export default Info;

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
