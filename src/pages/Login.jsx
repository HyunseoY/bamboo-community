import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/modules/userSlice';
import { colors } from '../shared/colors';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [pw, setPw] = useState();

  return (
    <StyledContainer>
      <StContainer size={40}>접속</StContainer>
      <StyledForm>
        <label>
          <StContainer size={20}>전자우편주소</StContainer>
        </label>
        <StInput
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>
          <StContainer size={20}>비밀번호</StContainer>
        </label>
        <StInput
          type="password"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <StButton
          size="large"
          bgcolor={colors.get('green')}
          color={colors.get('white')}
          onClick={() => {
            // (1) 로그인 완료

            alert(email);
            alert(pw);

            dispatch(
              login({
                email: email,
                pw: pw,
              })
            );

            // (2) 페이지 이동
            navigate('/');
          }}
        >
          접속하겠네
        </StButton>
        <StButton
          type="button"
          size="large"
          bgcolor={colors.get('green')}
          color={colors.get('white')}
          onClick={() => {
            navigate('/register');
          }}
        >
          계정이 없소만
        </StButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default Login;

const StyledContainer = styled.section`
  height: 79vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  padding: 0 12px;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StButton = styled.button`
  flex-shrink: 0;
  border: 1px solid #eee;
  background-color: #fff;
  color: #fff;
  height: 46px;
  border-radius: 8px;
  background-color: ${({ bgcolor, disabled }) => (disabled ? '#ddd' : bgcolor)};
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          width: 100%;
        `;
      case 'medium':
        return css`
          width: 80px;
        `;
      case 'small':
        return css`
          width: 30px;
          height: 30px !important;
        `;
      default:
        return css`
          width: 120px;
        `;
    }
  }}
`;

const StInput = styled.input`
  box-sizing: border-box;
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #eee;
`;

const StContainer = styled.div`
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => color};
  font-weight: ${({ fw }) => fw};
`;
