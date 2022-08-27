import React from 'react';
import './MainPage.css';
import styled from 'styled-components';
import imgBubble from '../img/MainBackground.png'

const StyledBody = styled.div`
    background: radial-gradient(95.15% 88.15% at 50% 17.78%, #8ED7DA 0%, #62BEE8 100%);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    display: 'flex';
    flex-direction: 'row';
`

const StyledAnchor = styled.a`
    text-decoration: none;
    color: none;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    text-align: center;
    align-items: center;
`

const MainPage = () => {
    return (
        /* Body */
        <StyledBody>
            <div style={{ fontSize: '200px', padding: '2rem'}}>
                🏄‍♀️
            </div>
            <div className='intro'>
                <img src={imgBubble} className='image'alt='dd'/>
                <div style={{ fontFamily: 'Hind Vadodara', fontStyle: 'normal', fontWeight: "700", fontSize: "50px", lineHeight: "110%", letterSpacing: "-0.01em", color: 'white', paddingBottom: '20px', paddingLeft:'50px' }}>
                    안녕하세요!<br/> Gennies입니다.
                </div>
                <div style={{ fontFamily: 'Hind Vadodara', fontStyle: "normal", fontWeight: "600", fontSize: "30px", lineHeight: "110%", letterSpacing: "-0.01em", paddingBottom: '10px', paddingLeft:'50px' }}>
                    세대 간 대화 갈등,<br/> 많이 힘드셨죠?
                </div>
                <div style={{ paddingLeft:'50px' }}>서비스설명 - 정보를 제공 받아보세요.</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '5%', justifyContent: 'left', alignItems: 'left'}}>
                <StyledAnchor href='/board/tox'>
                    <div className='icon'>🙋🏼‍♂️</div>
                    <div className='menu'>X-gennie에게<br/>질문하기</div>
                </StyledAnchor>
                <StyledAnchor href='/board/tomz'>
                    <div className='icon'>🙋🏼‍♀️</div>
                    <div className='menu'>MZ-gennie에게<br/>질문하기</div>
                </StyledAnchor>
                <StyledAnchor href='/board/all'>
                    <div className='icon'>👨‍👩‍👧</div>
                    <div className='menu'>모두에게<br/>질문하기</div>
                </StyledAnchor>           
            </div>
        </StyledBody>
            
    );
};

export default MainPage;