import axios from 'axios';

const registerUser = async (id, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_MOCK_SERVER_URL}/register`,
      {
        id,
        password,
      }
    );
    return response.data; // 필요에 따라 응답 데이터를 반환할 수 있습니다.
  } catch (error) {
    throw new Error(`회원가입 오류: ${error.message}`);
  }
};

const loginUser = async (id, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_MOCK_SERVER_URL}/login`,
      {
        id,
        password,
      }
    );

    if (response.status === 201) {
      // 응답 상태 코드를 201로 수정
      const token = response.data.token;
      localStorage.setItem('accessToken', token); // JSON.stringify 제거
      return token;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw new Error(`로그인 오류: ${error.message}`);
  }
};

const authorizationUser = async () => {
  const token = await JSON.parse(localStorage.getItem('accessToken'));
  const response = await axios.get(
    `${process.env.REACT_APP_MOCK_SERVER_URL}/user`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
  return response.status;
};

export { registerUser, loginUser, authorizationUser };
