import { useState } from 'react';
import { styled } from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <FormBox
      onClick={() => {
        navigate('/newpost');
      }}
    >
      <FormBtn onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {hovered ? '글쓰러 가기 click!' : '임금님 귀는 당나귀 귀-!!'} &nbsp;{' '}
        <CreateIcon />
      </FormBtn>
    </FormBox>
  );
};

export default Form;

const FormBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormBtn = styled.span`
  width: 85%;
  margin: 40px 0 40px 0;
  background-color: #7fa102;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  transition: transform 100ms ease-in;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: #ffffff;

    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
