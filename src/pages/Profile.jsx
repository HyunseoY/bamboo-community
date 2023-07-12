import React from 'react';
import Layout from '../components/Layout';
import { styled } from 'styled-components';

const Profile = () => {
  return (
    <Layout>
      <ProfileContainer>
        <ProfileBox>
          <img src="" alt="프로필사진" />
          <div>
            <p>닉네임</p>
            <p>이메일</p>
            <p>자기소개</p>
          </div>
          <button>프로필 편집</button>
        </ProfileBox>
      </ProfileContainer>
    </Layout>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-bottom: 1px solid #b7dce8;
  margin: 15px;
`;
