import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import styled from 'styled-components';

const StyledInfo = styled.div`
    color: #94969B;
    size: 15;
    display: flex;
    justify-content: right;
    align-items: center;
    position: absolute;
    right:300px;
`

const PostItem = ({post}) => {
    const { title, hashtag, comments } = post;
    //const [title, setTitle] = useState(post.title);
    //const [hashtag, setHashtag] = useState(post.hashtag);

    // useEffect(() => {
    //     console.log("title", title);
    //     console.log("hashtag", hashtag);
    // }, [title, hashtag])

    // useEffect(() => {
    //     console.log("PostItem", post.post);
    //     setTitle(post.title);
    //     setHashtag(post.hashtag);
    // }, [post])

    return (
        <div>
            <div style={{ width: "100%", height: "80px", margin: '2% 10% 2% 10%', padding: '0.5rem', cursor: 'pointer', hover: ''}}>
                <h3>{title}</h3>
                <StyledInfo>
                    <FaRegComment style={{padding: '5px'}}/>
                    <div>{comments}</div> 
                </StyledInfo>
                <div style={{ color: '#767676' }}>{hashtag && `#${hashtag}`}</div>
            </div>
                        
            <hr style={{ backgroundColor : '#D9D9D9', border: '0', width: '85%', height: '2px', marginTop: '5px' }}/>
        </div>        
    );
};

export default PostItem;