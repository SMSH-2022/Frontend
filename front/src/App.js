import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Post from './routes/Post';
import Router from './Router';
import Upload from './routes/Upload';
import TopBar from './components/TopBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: radial-gradient(95.15% 88.15% at 50% 17.78%, #8ED7DA 0%, #62BEE8 100%);
  backdrop-filter: blur(4px);
  width: 100%;
  height: auto;
  margin: 0 auto;
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
