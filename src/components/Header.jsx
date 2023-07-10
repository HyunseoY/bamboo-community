import React, { useState } from 'react';
import bamboo_logo from '../assets/bamboo_logo.png';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Header = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  return (
    <HeaderContainer>
      <HeaderItems>
        <Logo
          src={bamboo_logo}
          alt="로고"
          onClick={() => {
            navigate('/');
          }}
        />
        <UserBox>
          <NickName
            onClick={() => {
              setView(!view);
            }}
          >
            반갑소, nickname !!
            {view ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            {view && <Dropdown />}
          </NickName>
        </UserBox>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(223, 230, 163, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const HeaderItems = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;

const UserBox = styled.div`
  display: flex;
  cursor: pointer;
`;

const NickName = styled.div`
  display: flex;
  align-items: center;
`;
