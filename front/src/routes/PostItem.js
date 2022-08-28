import React, { useState } from 'react';
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
const Button =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    background: #EE58BE;
    border-radius: 20px;
    color: #FFFFFF;
    border: 0;
    margin: 5px;
`

const GenniesLabel = styled(Button)`
    width: 80px;
    height: 20px;
    font-size: 12px;
    background-color: ${(props) => props.gennie === "x" ? "#EE58BE" : "#75C5EA"};
`;

const PostItem = ({post}) => {
    const { title, user, gennie, hashtags, comments } = post;

    return (
        <div>
            <StyledItem onClick={() => window.location.href = `/post/${post.id}`}>
                <div style={{display: "flex", flexDirection: 'row', alignItems: 'center', marginLeft: "5px", marginBottom: "8px"}}>
                    <h3 style={{paddingLeft: '15px', paddingRight: '15px' }}>{title}</h3>
                    <div style={{ color: "#767676", fontSize: '15px' }}>{user}</div>
                    <GenniesLabel gennie={gennie}>{gennie}-gennie</GenniesLabel>
                </div>            
                <StyledInfo>
                    <FaRegComment style={{padding: '5px'}}/>
                    <div>{comments}</div> 
                </StyledInfo>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {hashtags && hashtags.map(hashtag => (
                        <div key={hashtag} style={{ color: '#767676', paddingLeft: '15px', paddingBottom: '15px', marginRight: '4px' }}>
                            #{hashtag}
                        </div>
                    ))} 
                </div>
                               
            </StyledItem>
            <hr style={{ backgroundColor : '#D9D9D9', border: '0', width: '85%', height: '2px', marginTop: '5px' }}/>
        </div>        
    );
};

export default PostItem;