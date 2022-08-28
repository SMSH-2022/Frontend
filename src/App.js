import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Post from './routes/Post';
import Router from './Router';
import Upload from './routes/Upload';
import TopBar from './components/TopBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 40px;
`;

function App() {
  return (
    <Wrapper>
      <TopBar/>
      <Router />
    </Wrapper>
  );
}

export default App;
