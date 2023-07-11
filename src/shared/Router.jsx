import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';
import NewPost from '../pages/NewPost';
import Complaint from '../pages/category/Complaint';
import Counsel from '../pages/category/Counsel';
import Expose from '../pages/category/Expose';
import Info from '../pages/category/Info';
import Secret from '../pages/category/Secret';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="detail" element={<Detail />} />
        <Route path="newpost" element={<NewPost />} />

        <Route path="complaint" element={<Complaint />} />
        <Route path="counsel" element={<Counsel />} />
        <Route path="expose" element={<Expose />} />
        <Route path="info" element={<Info />} />
        <Route path="secret" element={<Secret />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
