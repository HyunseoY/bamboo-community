import { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bamboo_logo from '../assets/bamboo_logo.png';
import Dropdown from '../elem/Dropdown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Header = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const userList = useSelector(function (state) {
    return state.userSlice;
  });

  console.log('userList', userList);

  const loginUser = userList.find((user) => user.isLogin === true);

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
            {/* 반갑소, {loginUser.userName} !! */}
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
  padding: 0 20px 0 20px;
`;

const HeaderItems = styled.div`
  width: 80%;
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
  font-size: 15px;
`;
