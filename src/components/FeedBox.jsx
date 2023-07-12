import React from 'react';
import Layout from './Layout';
import Form from './Form';
import { styled } from 'styled-components';
import { useQuery } from 'react-query';
import { getFeeds } from '../api/feeds';

const FeedBox = ({ children }) => {
  const { isLoading, isError, data } = useQuery('feeds', getFeeds);
  console.log(data);

  if (isLoading) return <h1>기다리시오...</h1>;
  if (isError) return <h1>문제가 있구려</h1>;
  return (
    <FeedWrapper>
      <Form />
      <FeedList>{children}</FeedList>
    </FeedWrapper>
  );
};

export default FeedBox;

const FeedWrapper = styled.div`
  background-color: #f2f2f0;
  height: 100vh;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeedList = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 스크롤 바 디자인 */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤 바 색상 */
  &::-webkit-scrollbar-thumb {
    background: #dfe6a3;
    border-radius: 10px;
  }

  /* 스크롤 바 호버 효과 */
  &::-webkit-scrollbar-thumb:hover {
    background: #cfd541;
  }
`;
