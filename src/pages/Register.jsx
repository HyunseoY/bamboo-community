import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/user';
import { colors } from '../shared/colors';

const Register = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confPw, setConfPw] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, password } = e.target.elements;

    try {
      // 회원가입 API 호출
      await registerUser(id, password);
      setId('');
      setPassword('');
      alert('회원가입 완료!');
      console.log('회원가입이 성공적으로 완료되었습니다.');
      // 회원가입 성공 후 추가적인 작업 수행 가능
      navigate('/login');
    } catch (error) {
      console.error('회원가입 오류:', error.message);
      // 오류 처리 및 사용자에게 오류 메시지 표시 가능
    }
  };

  return (
    <StyledContainer>
      <StContainer size={40}>가입신청서</StContainer>
      <StyledForm>
        <label>
          <StContainer size={20}>전자우편주소</StContainer>
        </label>
        <StInput
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label>
          <StContainer size={20}>비밀번호</StContainer>
        </label>
        <StInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <StContainer size={20}>비밀번호 확인</StContainer>
        </label>
        <StInput
          type="password"
          value={confPw}
          onChange={(e) => setConfPw(e.target.value)}
        />

        <StButton
          size="large"
          bgcolor={colors.get('green')}
          color="#fff"
          onClick={async () => {
            if (password !== confPw) {
              alert('비밀번호가 다릅니다. 확인해주세요!');
              return false;
            }

            await handleSubmit();
          }}
        >
          가입하겠소
        </StButton>
        <StButton
          type="button"
          size="large"
          bgcolor={colors.get('green')}
          color="#fff"
          onClick={() => {
            navigate('/login');
          }}
        >
          ◁ 접속으로 돌아가겠네
        </StButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default Register;

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
