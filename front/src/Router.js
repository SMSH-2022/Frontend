import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Interpreter from './routes/Interpreter';
import Post from './routes/Post';
import Upload from './routes/Upload';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/upload" element={<Upload/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/inter" element={<Interpreter/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
