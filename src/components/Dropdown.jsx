import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Dropdown = () => {
  const navigate = useNavigate();

  return (
    <DropdownBox>
      <List
        onClick={() => {
          navigate('/profile');
        }}
      >
        마이페이지
      </List>
      <List>로그아웃</List>
    </DropdownBox>
  );
};

export default Dropdown;

const DropdownBox = styled.div`
  width: 150px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 65px;
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
