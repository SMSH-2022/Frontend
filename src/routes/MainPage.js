import React from 'react';
import './MainPage.css';
import styled from 'styled-components';
import imgBubble from '../img/MainBackground.png'
import {AnimatePresence, motion, useMotionValue, useTransform} from 'framer-motion';

const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
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

const popupVariants = {
	start: {
		opacity: 0,
        y: 50,
	},
	end: {
		opacity: 1,
        y: 0,
	},
	delayChildren: 0.5,
	staggerChildren: 0.2
}

const StyledDiv = styled.div`
    font-family: Hind Vadodara;
    font-style: normal;
    line-height: 110%;
    letter-spacing: -0.01em;
`

const MainPage = () => {
    return (
        /* Body */
        <StyledBody>
            <motion.div 
                transition={{ type: "spring", x: {yoyo: Infinity}}}
                initial={{ x: 80, scale: 0 }} 
                animate={{ x: 50, scale: 1}}
            >
                <div style={{ fontSize: '200px', padding: '2rem'}}>
                    🏄‍♀️
                </div>
            </motion.div>
            <motion.div 
                className='intro'
                transition={{ type: "tween", duration: 1}}
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1}}
            >
                <img src={imgBubble} className='image'alt='dd'/>
                <StyledDiv style={{ fontWeight: "700", fontSize: "50px", color: 'white', paddingBottom: '20px', paddingLeft:'50px' }}>
                    안녕하세요!<br/> GENNIES입니다.
                </StyledDiv>
                <StyledDiv style={{ fontWeight: "600", fontSize: "30px", paddingBottom: '10px', paddingLeft:'50px' }}>
                    세대 간 차이로 인한 갈등,<br/> 많이 힘드셨죠?
                </StyledDiv>
                <div style={{ fontFamily: 'Hind Vadodara', fontStyle: 'normal', paddingLeft:'50px' }}>
                    GENNIES는 세대를 뜻하는 Generation을 줄인 말이에요.<br/>
                    여기, GENNIES에서 그 차이를 좁힐 수 있도록 도와드릴게요.</div>
            </motion.div>
            <motion.div 
                variants={popupVariants} initial="start" animate="end" transition={{duration: 1}}
                style={{ display: 'flex', flexDirection: 'column', margin: '5%', justifyContent: 'left', alignItems: 'left'}}
            >
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
            </motion.div> 
        </StyledBody>
            
    );
};

export default MainPage;