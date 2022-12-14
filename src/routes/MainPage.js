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
                    πββοΈ
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
                    μλνμΈμ!<br/> GENNIESμλλ€.
                </StyledDiv>
                <StyledDiv style={{ fontWeight: "600", fontSize: "30px", paddingBottom: '10px', paddingLeft:'50px' }}>
                    μΈλ κ° μ°¨μ΄λ‘ μΈν κ°λ±,<br/> λ§μ΄ νλμ¨μ£ ?
                </StyledDiv>
                <div style={{ fontFamily: 'Hind Vadodara', fontStyle: 'normal', paddingLeft:'50px' }}>
                    GENNIESλ μΈλλ₯Ό λ»νλ Generationμ μ€μΈ λ§μ΄μμ.<br/>
                    μ¬κΈ°, GENNIESμμ κ·Έ μ°¨μ΄λ₯Ό μ’ν μ μλλ‘ λμλλ¦΄κ²μ.</div>
            </motion.div>
            <motion.div 
                variants={popupVariants} initial="start" animate="end" transition={{duration: 1}}
                style={{ display: 'flex', flexDirection: 'column', margin: '5%', justifyContent: 'left', alignItems: 'left'}}
            >
                <StyledAnchor href='/board/tox'>
                    <div className='icon'>ππΌββοΈ</div>
                    <div className='menu'>X-gennieμκ²<br/>μ§λ¬ΈνκΈ°</div>
                </StyledAnchor>
                <StyledAnchor href='/board/tomz'>
                    <div className='icon'>ππΌββοΈ</div>
                    <div className='menu'>MZ-gennieμκ²<br/>μ§λ¬ΈνκΈ°</div>
                </StyledAnchor>
                <StyledAnchor href='/board/all'>
                    <div className='icon'>π¨βπ©βπ§</div>
                    <div className='menu'>λͺ¨λμκ²<br/>μ§λ¬ΈνκΈ°</div>
                </StyledAnchor> 
            </motion.div> 
        </StyledBody>
            
    );
};

export default MainPage;