import Layout from '../components/Layout';
import { styled } from 'styled-components';
import { useQuery } from 'react-query';
import { getFeeds } from '../api/feeds';
import Feed from '../components/Feed';
import FeedBox from '../components/FeedBox';

const Home = () => {
  const { isLoading, isError, data } = useQuery('feeds', getFeeds);
  console.log(data);

  // 데이터를 최신 순으로 정렬
  const sortedData = data?.data?.sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
    return dateB.getTime() - dateA.getTime();
  });

  if (isLoading) return <h1>기다리시오...</h1>;
  if (isError) return <h1>문제가 있구려</h1>;
  return (
    <Layout>
      <FeedBox>
        <StP>🎋최근에는 어떤 일들이 있었는지 아는가🎋</StP>
        {sortedData?.map((item) => {
          return <Feed key={item.id} feed={item} />;
        })}
      </FeedBox>
    </Layout>
  );
};

export default Home;

const StP = styled.div`
  width: 85%;
  font-size: 15px;
  background-color: white;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;
