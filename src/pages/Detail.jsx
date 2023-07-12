import React, { useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { colors } from '../shared/colors';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getFeeds, updateFeed } from '../api/feeds';
import Layout from '../components/Layout';
import Button from '../elem/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SaveIcon from '@material-ui/icons/Save';

const Detail = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const id = location.search.slice(1);
  console.log('id', id);

  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery('feeds', getFeeds);

  const selectedData = data?.data.find((item) => item.id === parseInt(id));
  console.log('상세', selectedData);

  const [isEditing, setIsEditing] = useState(false); // 편집 모드 상태
  const [editedContents, setEditedContents] = useState(
    selectedData?.contents || ''
  ); // 수정한 내용 상태

  const textareaRef = useRef(null);

  const mutation = useMutation((updatedFeed) => updateFeed(id, updatedFeed), {
    onSuccess: () => {
      queryClient.invalidateQueries('feeds'); // 데이터 갱신을 위해 캐시 무효화
      setIsEditing(false); // 수정 완료 후 편집 모드 해제
    },
  });

  const handleUpdate = () => {
    const updatedFeed = { ...selectedData, contents: editedContents }; // 수정할 내용 업데이트
    mutation.mutate(updatedFeed);
  };

  // 수정 시 자동으로 커서 위치
  useEffect(() => {
    if (isEditing) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  if (isLoading) return <h1>기다리시오...</h1>;
  if (isError) return <h1>문제가 있구려</h1>;
  return (
    <Layout>
      <PostWrapper>
        <Button
          margin={'20px'}
          border={'none'}
          size={'small'}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </Button>
        <PostBox>
          <PostInfo>
            <div>
              <p>유저이름</p>
              <p>{selectedData.timestamp}</p>
            </div>
            {isEditing ? (
              <Button
                bgcolor={'none'}
                color={'gray'}
                size={'small'}
                border={'none'}
                margin={'10px'}
                onClick={handleUpdate} // 수정 버튼 클릭 시 handleUpdate 함수 실행
              >
                <SaveIcon />
              </Button>
            ) : (
              <Button
                bgcolor={'none'}
                color={'gray'}
                size={'small'}
                border={'none'}
                margin={'10px'}
                onClick={() => setIsEditing(true)} // 수정 버튼 클릭 시 편집 모드 활성화
              >
                <BorderColorIcon />
              </Button>
            )}
          </PostInfo>

          {isEditing ? (
            <EditableContents
              ref={textareaRef}
              value={editedContents}
              onChange={(e) => setEditedContents(e.target.value)}
            />
          ) : (
            <FeedContents>{selectedData.contents}</FeedContents>
          )}
        </PostBox>
      </PostWrapper>
    </Layout>
  );
};

export default Detail;

const PostWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  overflow: scroll;

  /* 스크롤 바 디자인 */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤 바 색상 */
  &::-webkit-scrollbar-thumb {
    background: #dfe6a3;
    border-radius: 10px;
  }

  /* 스크롤 바 호버 효과 */
  &::-webkit-scrollbar-thumb:hover {
    background: #cfd541;
  }
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 30px 0 30px;
`;

const PostBox = styled.div`
  width: 90%;
  margin-left: 40px;
`;

const FeedContents = styled.p`
  width: 100%;
  margin: 20px 0 20px 0;
  font-size: 15px;
  font-weight: bold;
  white-space: normal;
  border-top: 1px solid ${colors.get('paleblue')};
  border-bottom: 1px solid ${colors.get('paleblue')};
  padding: 30px;
`;

const EditableContents = styled.textarea`
  width: 100%;
  height: 200%;
  margin: 20px 0 20px 0;
  font-size: 15px;
  white-space: normal;
  resize: none;
  outline: none;
  border: none;
  border-top: 1px solid ${colors.get('paleblue')};
  border-bottom: 1px solid ${colors.get('paleblue')};
  padding: 30px;
`;
