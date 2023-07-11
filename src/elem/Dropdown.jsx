import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../redux/modules/userSlice';

const Dropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector(function (state) {
    return state.userSlice;
  });

  const loginUser = userList.find((user) => user.isLogin === true) || {};

  return (
    <DropdownBox>
      <List
        onClick={() => {
          navigate('/profile');
        }}
      >
        마이페이지
      </List>
      <List
        onClick={() => {
          const isConfirmed = window.confirm('로그아웃 되었습니다');
          if (isConfirmed) {
            dispatch(logout(loginUser.id));
            navigate('/login');
          }
        }}
      >
        로그아웃
      </List>
    </DropdownBox>
  );
};

export default Dropdown;

const DropdownBox = styled.div`
  width: 110px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  border-radius: 10px;
  overflow: hidden;

  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const List = styled.li`
  padding: 10px;

  &:hover {
    cursor: pointer;
    color: #b7dce8;
    font-weight: bold;
  }
`;
