import React from 'react';
import { styled } from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HearingIcon from '@material-ui/icons/Hearing';
import MicIcon from '@material-ui/icons/Mic';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <SideItem
        onClick={() => {
          navigate('/');
        }}
      >
        <HomeIcon />
        &nbsp; HOME
      </SideItem>

      <SideItem
        onClick={() => {
          navigate('/complaint');
        }}
      >
        <ChatBubbleIcon />
        &nbsp; 속풀이
      </SideItem>

      <SideItem
        onClick={() => {
          navigate('/info');
        }}
      >
        <InfoIcon />
        &nbsp; 꿀정보
      </SideItem>

      <SideItem
        onClick={() => {
          navigate('/expose');
        }}
      >
        <MicIcon />
        &nbsp; 고백
      </SideItem>

      <SideItem
        onClick={() => {
          navigate('/secret');
        }}
      >
        <HearingIcon />
        &nbsp; 비밀
      </SideItem>

      <SideItem
        onClick={() => {
          navigate('/counsel');
        }}
      >
        <ForumIcon />
        &nbsp; 상담
      </SideItem>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  border-right: 1px solid #d9d9d9;
  background: #fff;
`;

const SideItem = styled.div`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 15px;

  &:hover {
    cursor: pointer;
    background-color: #b7dce8;
    color: #ffffff;
    font-weight: bold;
  }
`;
