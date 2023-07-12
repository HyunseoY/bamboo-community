import axios from 'axios';

// 조회
const getFeeds = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/feeds`);
  return response;
};

// 추가
const addFeed = async (newFeed) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/feeds`, newFeed);
};

// 수정
const updateFeed = async (feedId, updatedFeed) => {
  await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/feeds/${feedId}`,
    updatedFeed
  );
};

// 삭제
const deleteFeed = async (feedId) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/feeds/${feedId}`);
};

export { getFeeds, addFeed, updateFeed, deleteFeed };
