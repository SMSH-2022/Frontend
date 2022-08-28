import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import imgLogo from '../images/logo.png';
import Router from '../Router';
import Interpreter from '../routes/Interpreter';

const Box = styled.div`
  background: rgba(255, 255, 255, 0.23);
  width: 100%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Menus = styled.div`
  display: flex;
  margin-left: 50px;
  gap: 25px;
  color: white;
`;

const Menu = styled.a`
  color: white;
  text-decoration: none;
  &:hover{
    font-weight: 600;
    cursor: pointer;
  }
`;

const Button  = styled(Menu)`
  color: #767676;
  position: absolute;
  right: 120px;
`

function TopBar() {
    return (
      <Box>
        <Logo src={imgLogo} onClick={() => window.location.href = '/'}/>
        <Menus>
          <Menu href='/Frontend/board/tox'>게시글</Menu>
          <Menu href='/Frontend/inter'>MZ용어 번역기</Menu>
          <Menu>개발자 소개</Menu>
        </Menus>
        <Button>로그인</Button>
      </Box>
    );
  }
  
  export default TopBar;
  