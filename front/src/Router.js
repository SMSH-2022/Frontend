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
        <Route exact path="/front" element={<MainPage/>} />
        <Route exact path="/front/board/:category" element={<PostList/>}/>
        <Route path="/front/upload" element={<Upload/>} />
        <Route path="/front/post/:postId" element={<Post/>} />
        <Route path="/front/inter" element={<Interpreter/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
