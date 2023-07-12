import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '../shared/colors';
import { useMutation } from 'react-query';
import { loginUser } from '../api/user';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const loginMutation = useMutation(loginUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 로그인 API 호출
      const response = await loginMutation.mutateAsync({
        id,
        password,
      });

      console.log('로그인 성공!');
      console.log('토큰:', response.token);
      // 로그인 성공 후 추가적인 작업 수행 가능

      navigate('/'); // 로그인 성공 시 이동할 페이지 경로
    } catch (error) {
      console.error('로그인 오류:', error.message);
      // 오류 처리 및 사용자에게 오류 메시지 표시 가능
    }
  };

  return (
    <StyledContainer>
      <StContainer size={40}>접속</StContainer>
      <StyledForm>
        <label>
          <StContainer size={20}>전자우편주소</StContainer>
        </label>
        <StInput
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label>
          <StContainer size={20}>비밀번호</StContainer>
        </label>
        <StInput
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <StButton
          size="large"
          bgcolor={colors.get('green')}
          color={colors.get('white')}
          onClick={handleSubmit}
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
