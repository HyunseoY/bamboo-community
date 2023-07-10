import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <SignUpLayout>
      <SignUpBox>
        <h2>가입신청서</h2>
        <input />
        <input />
        <input />
        <input />
        <input />
        <button>가입하겠소</button>
        <span>-----------또는-----------</span>
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          ◁ 접속으로 돌아가겠네
        </button>
      </SignUpBox>
    </SignUpLayout>
  );
};

export default SignUp;

const SignUpLayout = styled.div``;

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
