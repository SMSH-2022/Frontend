import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';
import { Link, useParams } from 'react-router-dom';
import {FcSearch} from 'react-icons/fc';
import axios from 'axios';
import { API_URL } from '../config';

const StyledBody = styled.div`
    /* background: radial-gradient(95.15% 88.15% at 50% 17.78%, #8ED7DA 0%, #62BEE8 100%);
    backdrop-filter: blur(4px); */
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin-top: 40px;
`

const StyledList = styled.div`
    width: 80%;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`

const WriteButton = styled.button`
    margin-right: 5%;
    margin-top: 3%;
    margin-bottom: 3%;
    justify-self: right center;
    padding: 0.3rem 1.8rem 0.3rem 1.8rem;  /* top right bottom left */
    border-radius: 10px;
    background-color: #62BEE8;
    color: #FFFFFF;
    font-weight: bold;
    border: 0;
    outline: 0;
    :hover{
        cursor: pointer;
        background-color: #75C5EA;
    }
`

const StyledLink = styled.a`
    border-radius: 16px;
    background: ${(props) => (props.isSelected ? "#62BEE8" : "#FFFFFF")};
    box-shadow: ${(props) => (props.isSelected ? "inset 0px 15px 15px rgba(0, 0, 0, 0.25)" : "0px 30px 60px rgba(32, 56, 85, 0.15)")};
    margin: 0.5rem 1.5rem 0.5rem 1.5rem;
    border: 0;
    outline: 0;
    padding: 1.3rem 2rem 1.3rem 2rem;  /* top right bottom left */
    text-decoration: none;
    color: ${(props) => (props.isSelected ? "#FFFFFF" : "black")};
    :hover{
        cursor: pointer;
        background: #CDE7F3;
    }
    transition: all 0.1s;
`;

const SearchBar = styled.input`
    height: 31px;
    margin: 0;
    font-size: 12px;
    border: 0;
    min-width: 50%;
    background-color: white;
    outline-style: none;
    padding: 20px;
    box-sizing : border-box;
    border-radius: 10px;
`;

const data = {
    tomz: [
        {
            id: 1,
            title: 'mz에게 첫 글',
            user: '문당훈',
            gennie: 'x',
            hashtags: ['mz에게', '라르크앙시엘'],
            comments: 4
        },

        {
            id: 2,
            title: 'mz에게 두번째 글',
            user: '차지철',
            gennie: 'x',
            hashtags: ['mz에게', '히토시'],
            comments: 5
        }
    ],
    tox: [
        {
            id: 3,
            title: 'x에게 첫 글',
            user: '김진혁',
            gennie: 'x',
            hashtags: ['x에게', '털보', '터래기'],
            comments: 4
        }
    ],
    all: [
        {
            id: 4,
            title: '모두에게 첫 글',
            user: '빠더너스',
            gennie: 'x',
            hashtags: ['모두에게', '복학생'],
            comments: 4
        }
    ]
};

const PostList = () => {
    const { category } = useParams();
    const [board, setBoard] = useState(category);  // 게시판 종류
    const [posts, setPosts] = useState(board[category]);  // 해당 게시판 글 목록
    const [keyword, setKeyword] = useState();

    /* data request */
    const getPosts = (endpoint) => {
        axios.get(`${API_URL}/posts`, {params:{}, withCredentials: true})
        .then((response) => {
            console.log(response.data);
            setBoard(response.data[category]);
        })
        .catch((e) => console.log(e));
    }

    useEffect(() => {
        setBoard(category);
    //     const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    //     getPosts(endpoint);
    }, [category]);

    const onClickSearch = () => {
        setPosts(() => {return Object.values(posts).filter((post) => post.title.includes(keyword))});
    }

    return (
        <StyledBody>
            <StyledList>
                <div style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', width: '100%', textAlign: 'right', background: '#F3FBFB', borderColor: '#C4C4C4', borderStyle: 'solid', borderWidth: '0 0 1px 0' }}>
                    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
                        <SearchBar placeholder='검색어를 입력하세요' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                        <FcSearch onClick={onClickSearch} style={{width: '25px', height: '25px', cursor: 'pointer', padding: '5px', marginLeft: '5px'}}/>
                    </div>
                    <WriteButton onClick={() => window.location.href = '/upload'}>글쓰기</WriteButton>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', margin: '5% 10% 3% 10%', justifyContent: 'center'}}>
                    <StyledLink isSelected={category === "tox" ? true : false} href="/board/tox">
                        <span style={{ fontSize: 'x-large' }}>🙋🏼‍♂️ </span>
                        <span style={{ fontSize: 'medium', fontWeight: 'bold'}}>X-gennie한테 질문하기</span>
                    </StyledLink>
                    <StyledLink isSelected={category === "tomz" ? true : false} href="/board/tomz">
                        <span style={{ fontSize: 'x-large' }}>🙋🏻‍♀️‍️ </span>
                        <span style={{ fontSize: 'medium', fontWeight: 'bold'}}>MZ-gennie한테 질문하기</span>
                    </StyledLink>
                    <StyledLink isSelected={category === "all" ? true : false} href="/board/all">
                        <span style={{ fontSize: 'x-large' }}>👨‍👩‍👧 </span>
                        <span style={{ fontSize: 'medium', fontWeight: 'bold'}}>모두에게 질문하기</span>
                    </StyledLink>
                </div>
                <hr style={{ backgroundColor : '#D9D9D9', border: '0', width: '90%', height: '2px' }}/>   
 
                { posts &&  posts.slice(0).reverse().map(post => { console.log("postlist", post); return (<PostItem key={post.id} post={post}/>)})}
            </StyledList>
        </StyledBody>
    );
};

export default PostList;