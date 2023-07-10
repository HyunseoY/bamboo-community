import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginLayout>
      <LoginBox>
        <h2>접속</h2>
        <input />
        <input />
        <button>접속하겠네</button>
        <span>-----------또는-----------</span>
        <button
          onClick={() => {
            navigate('/signup');
          }}
        >
          계정이 없소만
        </button>
      </LoginBox>
    </LoginLayout>
  );
};

export default Login;

const LoginLayout = styled.div``;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
