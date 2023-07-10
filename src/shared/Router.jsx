import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';
import NewPost from '../pages/NewPost';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="profile" element={<Profile />} />
        <Route path="detail" element={<Detail />} />
        <Route path="newpost" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
