import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Interpreter from './routes/Interpreter';
import Post from './routes/Post';
import Upload from './routes/Upload';
import MainPage from './routes/MainPage';
import PostList from './routes/PostList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/board/:category" element={<PostList/>}/>
        <Route path="/upload" element={<Upload/>} />
        <Route path="/post/:postId" element={<Post/>} />
        <Route path="/inter" element={<Interpreter/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
