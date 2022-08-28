import React from 'react';
import { FaRegComment } from 'react-icons/fa';
import styled from 'styled-components';

const StyledItem = styled.div`
    height: 90px; 
    margin: 1% 10% 1% 10%;
    border-radius: 14px;
    :hover{
        cursor: pointer;
        box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
    }
    transition: all 0.3s;
`
const StyledInfo = styled.div`
    color: #94969B;
    size: 15;
    display: flex;
    justify-content: right;
    align-items: center;
    position: absolute;
    right: 300px;
    padding-bottom: 40px;
`

const PostItem = ({post}) => {
    const { title, hashtag, comments } = post;

    return (
        <div>
            <StyledItem>
                <h3 style={{ paddingLeft: '15px', paddingTop: '8px'}}>{title}</h3>
                <StyledInfo>
                    <FaRegComment style={{padding: '5px'}}/>
                    <div>{comments}</div> 
                </StyledInfo>
                <div style={{ color: '#767676', paddingLeft: '15px', paddingBottom: '15px' }}>{hashtag && `#${hashtag}`}</div>
            </StyledItem>
            <hr style={{ backgroundColor : '#D9D9D9', border: '0', width: '85%', height: '2px', marginTop: '5px' }}/>
        </div>        
    );
};

export default PostItem;