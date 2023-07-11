import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { join } from '../redux/modules/userSlice';
import { colors } from '../shared/colors';

const Register = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confPw, setConfPw] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <StyledContainer>
      <StContainer size={40}>가입신청서</StContainer>
      <StyledForm>
        <label>
          <StContainer size={20}>전자우편주소</StContainer>
        </label>
        <StInput
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <StContainer size={20}>비밀번호</StContainer>
        </label>
        <StInput
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <label>
          <StContainer size={20}>비밀번호 확인</StContainer>
        </label>
        <StInput
          type="password"
          value={confPw}
          onChange={(e) => setConfPw(e.target.value)}
        />
        <label>
          <StContainer size={20}>별명</StContainer>
        </label>
        <StInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StButton
          size="large"
          bgcolor={colors.get('green')}
          color="#fff"
          onClick={() => {
            if (pw !== confPw) {
              alert('비밀번호가 다릅니다. 확인해주세요!');
              return false;
            }

            dispatch(
              join({
                email,
                pw,
                name,
              })
            );

            alert('회원가입 완료!');
            navigate('/login');
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
