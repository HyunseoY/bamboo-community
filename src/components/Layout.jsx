import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { styled } from 'styled-components';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />

      <BodyArea>
        <Sidebar />
        <FeedArea>{children}</FeedArea>
      </BodyArea>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyArea = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const FeedArea = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
