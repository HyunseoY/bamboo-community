import axios from 'axios';

const registerUser = async (id, password) => {
  await axios.post(`${process.env.REACT_APP_MOCK_SERVER_URL}/register`, {
    id,
    password,
  });
};

const loginUser = async (id, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_MOCK_SERVER_URL}/login`,
    {
      id,
      password,
    }
  );
  localStorage.setItem('accessToken', JSON.stringify(response.data.token));
  return response.data.token;
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
