import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '../shared/colors';
import { loginUser } from '../api/user';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/modules/userSlice';
import jwtDecode from 'jwt-decode';
import bamboo_forest from '../assets/bamboo_forest.svg';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 로그인 API 호출
      const response = await loginUser(id, password);
      console.log('응답', response);
      const decodedToken = jwtDecode(response); // 토큰 디코딩
      const userId = decodedToken.id; // 로그인한 유저의 ID
      setId('');
      setPassword('');
      alert('로그인 완료!');
      console.log('로그인이 성공적으로 완료되었습니다.');
      // 로그인 성공 후 추가적인 작업 수행 가능
      navigate('/');
      dispatch(loginSuccess(userId));
    } catch (error) {
      console.error('로그인 오류:', error.message);
      // 오류 처리 및 사용자에게 오류 메시지 표시 가능
    }
  };

  return (
    <Wrapper>
      <StyledContainerLeft>
        <ForestLogo src={bamboo_forest} alt="" />
        마음에 담아두면 병나요!
      </StyledContainerLeft>

      <StyledContainerRight>
        <StContainer size={40}>접속</StContainer>
        <StyledForm onSubmit={handleSubmit}>
          <label>
            <StContainer size={20}>별명</StContainer>
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
            type="submit"
            size="large"
            bgcolor={colors.get('green')}
            color={colors.get('white')}
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
      </StyledContainerRight>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
`;

const StyledContainerLeft = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const ForestLogo = styled.img`
  width: 50%;
`;

const StyledContainerRight = styled.section`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: #ffffffc5;
  padding: 0 12px;
`;

const StyledForm = styled.form`
  width: 50%;
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
