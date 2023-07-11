import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { styled } from 'styled-components';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />

      <BodyAerea>
        <Sidebar />
        <FeedAerea>{children}</FeedAerea>
      </BodyAerea>
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

const BodyAerea = styled.div`
  display: flex;
  width: 1200px;
`;

const FeedAerea = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
