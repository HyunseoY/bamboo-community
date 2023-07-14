import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { deleteFeed } from '../api/feeds';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '../elem/Button';
import moment from 'moment';

const Feed = ({ feed }) => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false); // 삭제 여부 상태 추가

  const handleDelete = async (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 중지
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');

    if (confirmDelete) {
      try {
        await deleteFeed(feed.id);
        setIsDeleted(true); // 삭제 여부 상태 업데이트
        console.log('게시물이 삭제되었습니다.');
        // 삭제 후 필요한 추가 작업 수행 가능
      } catch (error) {
        console.error('게시물 삭제 오류:', error.message);
        // 오류 처리 및 사용자에게 오류 메시지 표시 가능
      }
    }
  };

  if (isDeleted) return null; // 삭제된 게시물은 렌더링하지 않음
  return (
    <FeedWrapper onClick={() => navigate(`/detail?${feed.id}`)}>
      <div>
        <Username>유저이름</Username>
        <PostTime>
          {moment(feed.timestamp).format('YYYY년 M월 D일 A h:mm')}
        </PostTime>
        <FeedContents>{feed.contents}</FeedContents>
        <FeedCategory>#{feed.category}</FeedCategory>
      </div>
      <Button
        bgcolor={'none'}
        color={'lightgray'}
        size={'small'}
        border={'none'}
        margin={'10px'}
        onClick={handleDelete}
      >
        <DeleteIcon />
      </Button>
    </FeedWrapper>
  );
};

export default Feed;

const FeedWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px 0px rgba(129, 129, 129, 0.25);
  background: #fff;
  font-size: 12px;
  padding: 30px;

  &:hover {
    cursor: pointer;
    border: 1px solid #dfe6a3;
    box-shadow: 0px 4px 4px 0px rgba(223, 230, 163, 0.25);
  }
`;

const Username = styled.p``;

const PostTime = styled.p``;

const FeedContents = styled.p`
  width: 100%;
  margin: 10px 0 10px 0;
  font-size: 15px;
  font-weight: bold;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FeedCategory = styled.p`
  color: #b7dce8;
`;
