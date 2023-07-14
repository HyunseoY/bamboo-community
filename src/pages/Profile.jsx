import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { styled } from 'styled-components';
import Button from '../elem/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SaveIcon from '@material-ui/icons/Save';

const Profile = () => {
  const user = useSelector((state) => state.userSlice.userInfo);
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState('');

  const textareaRef = useRef(null);
  // 수정 시 자동으로 커서 위치
  useEffect(() => {
    if (editing) {
      textareaRef.current.focus();
    }
  }, [editing]);

  return (
    <Layout>
      <ProfileContainer>
        <ProfileBox>
          <div>
            {editing ? (
              <>
                <p>{user}</p>
                <UserInt
                  ref={textareaRef}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </>
            ) : (
              <>
                <p>{user}</p>
                <p>{bio}</p>
              </>
            )}
          </div>
          <Button
            bgcolor={'none'}
            color={'gray'}
            size={'small'}
            border={'none'}
            margin={'10px'}
            onClick={() => setEditing(!editing)}
          >
            {editing ? <SaveIcon /> : <BorderColorIcon />}
          </Button>
        </ProfileBox>
      </ProfileContainer>
      <MyFeed>피드</MyFeed>
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
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
  border-bottom: 1px solid #b7dce8;
  margin: 15px;
`;

const MyFeed = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const UserInt = styled.textarea`
  height: 25px;
  border: none;
  resize: none;
`;
