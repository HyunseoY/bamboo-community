import React, { useState } from 'react';
import Layout from '../components/Layout';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Select from '../elem/Select';
import { colors } from '../shared/colors';
import { addFeed } from '../api/feeds';
import { useSelector } from 'react-redux';
import Button from '../elem/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const NewPost = () => {
  const navigate = useNavigate();
  const [contents, setContents] = useState('');

  const date = new Date();

  const selected = useSelector((state) => state.selectItem);
  console.log('선택', selected);

  const handleSubmit = async () => {
    // 작성 내용과 선택한 아이템을 서버로 전송하여 데이터베이스에 저장
    const newFeed = {
      category: selected,
      contents,
      writerId: 1, // 작성자 ID 설정
      timestamp: date,
      isDeleted: false,
    };
    console.log(newFeed);
    try {
      await addFeed(newFeed);
      console.log('게시물이 등록되었습니다.');
      // 등록 후 필요한 추가 작업 수행 가능
    } catch (error) {
      console.error('게시물 등록 오류:', error.message);
      // 오류 처리 및 사용자에게 오류 메시지 표시 가능
    }

    navigate(-1); // 등록 후 이전 페이지로 이동
  };

  return (
    <Layout>
      <PostBox>
        <Button
          margin={'20px'}
          border={'none'}
          size={'small'}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </Button>
        <Select />
        <Postarea
          placeholder="여기에 글을 쓰시오"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <ButtonContainer>
          <Button
            margin={'20px'}
            border={'none'}
            bgcolor={colors.get('green')}
            color={colors.get('white')}
            onClick={handleSubmit}
          >
            등록
          </Button>
        </ButtonContainer>
      </PostBox>
    </Layout>
  );
};

export default NewPost;

const PostBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
`;

const Postarea = styled.textarea`
  width: 90%;
  height: 40%;
  margin-bottom: 20px;
  resize: none;
  outline: none;
  border: none;
  border-top: 1px solid ${colors.get('paleblue')};
  border-bottom: 1px solid ${colors.get('paleblue')};
  padding: 20px;
  margin-left: 30px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`;
