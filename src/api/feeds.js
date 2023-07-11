import axios from 'axios';

// 조회
const getFeeds = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BAMBOO_API_URL}/feeds`
  );
  return response;
};

// 추가
// 수정
// 삭제

export { getFeeds };
