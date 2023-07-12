import React from 'react';
import { styled } from 'styled-components';
import Feed from '../../components/Feed';
import Layout from '../../components/Layout';
import FeedBox from '../../components/FeedBox';
import useSortedFeeds from '../../hooks/useSortedFeeds';

const Expose = () => {
  const { isLoading, isError, sortedData } = useSortedFeeds('고백');

  if (isLoading) return <h1>기다리시오...</h1>;
  if (isError) return <h1>문제가 있구려</h1>;

  return (
    <Layout>
      <FeedBox>
        <StP>🎋양심 고백이든, 뭐든 다 질러보시게🎋</StP>
        {sortedData?.map((item) => {
          return <Feed key={item.id} feed={item} />;
        })}
      </FeedBox>
    </Layout>
  );
};

export default Expose;

const StP = styled.div`
  width: 85%;
  font-size: 15px;
  background-color: white;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;
