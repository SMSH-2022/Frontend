import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Interpreter from './routes/Interpreter';
import Post from './routes/Post';
import Upload from './routes/Upload';
import MainPage from './routes/MainPage';
import PostList from './routes/PostList';

function Router() {
  return (
    <BrowserRouter basename=''>
      <Routes>
        <Route exact path="/Frontend" element={<MainPage/>} />
        <Route exact path="/Frontend/board/:category" element={<PostList/>}/>
        <Route path="/Frontend/upload" element={<Upload/>} />
        <Route path="/Frontend/post/:postId" element={<Post/>} />
        <Route path="/Frontend/inter" element={<Interpreter/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
