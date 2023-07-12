import { useQuery } from 'react-query';
import { getFeeds } from '../api/feeds';

const useSortedFeeds = (category) => {
  const { isLoading, isError, data } = useQuery('feeds', getFeeds);

  const filteredFeeds = data?.data?.filter(
    (item) => item.category === category
  );

  // 데이터를 최신 순으로 정렬
  const sortedData = filteredFeeds?.sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
    return dateB.getTime() - dateA.getTime();
  });

  return { isLoading, isError, sortedData };
};

export default useSortedFeeds;
