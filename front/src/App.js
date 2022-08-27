import React from "react";
import MainPage from "./routes/MainPage";
import PostList from "./routes/PostList";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage/>} />
      <Route exact path="/board/:category" element={<PostList/>}/>
    </Routes>
    </BrowserRouter>
    
    // <MainPage/>
  );
}

export default App;
