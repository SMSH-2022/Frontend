import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {AiTwotoneLike, AiOutlineLike} from "react-icons/ai";
import { useLocation } from "react-router";
import axios from "axios";
import { API_URL } from "../config";

const Wrapper = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const Box = styled.div`
    background: rgba(255, 255, 255, 0.5);
    padding: 40px 80px;
    width: 70%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
`;

const Title = styled.div`
    background-color: rgba(255,255,255,0);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    border: 0;
`;

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


const Textfield = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
    border-radius: 16px;
    border: 0;
    resize: none;
    height: auto;
    width: 100%;
    margin-top: 20px;
`;

const Tag = styled(Button)`
    background-color: #F1F1F1;
    color: #767676;
    font-size: 12px;
    width: 80px;
    height: 20px;
    margin: 20px;
    margin-right: 0px;
`

const SubTitle = styled(Title)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 42px;
    margin-top: 20px;
    margin-left: 5px;

`
const Input = styled.textarea`
    border: 0;
    background-color: rgba(255,255,255,1);
    font-size: 16px;
    width: 100%;
    box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
    border-radius: 16px;
    height: 80px;
    resize: none;
    box-sizing : border-box;
    outline-style: none;
    padding: 20px;
`;

const Submit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    &:disabled{
        background-color: #767676;
        cursor: default;
    }
    background-color: #EE58BE;
    cursor: pointer;
    border-radius: 20px;
    color: #FFFFFF;
    border: 0;
    margin-top: 10px;
`;

const CommentBox = styled.div`
    background: rgba(255, 255, 255, 1);
    padding: 10px;
    border-radius: 5px;
`;

const Comment = styled.div`
    width: 100%;
    margin-top: 20px;
    height: auto;
`

const CommentName = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CommentContent = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 25px;
    padding: 10px;
    color: #767676;
`;

const Hr = styled.hr`
    width: 100%;
    border: 0.2px solid #D9D9D9;
`;

const CommentButton = styled(Button)`
    width: 80px;
    height: 20px;
    font-size: 12px;
    background-color: ${(props) => props.gennie === "x" ? "#EE58BE" : "#75C5EA"};
`;

const BestButton = styled(CommentButton)`
    color: ${(props) => props.gennie === "x" ? "#EE58BE" : "#75C5EA"};
    background-color: ${(props) => props.gennie === "x" ? "rgba(238, 88, 190, 0.27)" : "rgba(117, 197, 234, 0.27)"};
    font-size: 12px;
    font-weight: 600;
`

const Likes = styled.div`
    display: flex;
    justify-content: right;
    gap: 2px;
    color: #767676;
    cursor: pointer;
`

const postDummy = {
    id: 3,
    title: "얌마 차지철",
    user: "문상훈",
    gennie: "x",
    content: "일루와바",
    tags: ["밈", "빠더너스"],
}

const dummies = [ 
    { id: 1, name: "문상훈", gennie: "x",  content: "찌니꾸 사랑해~~~~", likes: 100, isLiked: true},
    { id: 2, name: "차지철", gennie: "mz",  content: "댓글2", likes: 75, isLiked: false},
];

function Post() {
    const postId = useLocation().pathname.substring(6); // 게시물 id
    const [post, setPost] = useState(postDummy);
    const [newComment, setNewComment] = useState();
    const [comments, setComments] = useState(dummies);

    useEffect(() => {
    //     axios.get(`${API_URL}/${postId}`)
    //     .then((res)=>{
    //         // 게시글 정보 가져오기
    //   });
    }, [])

    useEffect(() => {
        // 새 댓글 등록
        console.log(newComment);
    }, [newComment])

    const onClickLike = (value) => {
        const targetIndex = comments.findIndex(comment => comment.id === value.id);
        const newVal = comments;
        newVal[targetIndex].isLiked = !value.isLiked;
        if (newVal[targetIndex].isLiked === true) {
            newVal[targetIndex].likes += 1
        } else {
            newVal[targetIndex].likes -= 1
        }
        setComments([...newVal]);
    }

    return (
        <Wrapper>
            <Box>
                <div style={{display: "flex", marginLeft: "5px", marginBottom: "10px"}}>
                    <Title>{post.title}</Title>
                    <div style={{color: "#767676", alignSelf:"flex-end", margin: "5px 10px"}}>{post.user}</div>
                </div>
                <Button>{post.gennie}-gennie에게 궁금해요</Button>

                <Textfield>
                    <div style={{padding: "20px", minHeight: "200px"}}>{post.content}</div>
                    <span style={{display: "flex", flexDirection: "row"}}>
                    {
                        post.tags.map((tag) => 
                            <Tag key={tag}># {tag}</Tag>
                        )
                    }
                    </span>
                </Textfield>

                <SubTitle>댓글 작성</SubTitle>
                <form>
                    <Input onChange={(e) => setNewComment(e.target.value)} placeholder="댓글을 입력하세요"/>
                    <div style={{display: "flex", justifyContent: "right"}}>
                        <Submit disabled={newComment? false: true}>저장</Submit>
                    </div>
                </form>

                <SubTitle>댓글</SubTitle>
                <CommentBox>
                    {comments.map((comment) => (
                        <Comment key={comment.id}>
                            {comment !== comments[0] ? <Hr/> : null}
                            <CommentName>
                                {comment.name}
                                <CommentButton gennie={comment.gennie}>{comment.gennie}-gennies</CommentButton>
                                {
                                    comment === comments[0] ? 
                                    <BestButton gennie={comment.gennie}>베스트 댓글</BestButton>
                                    : null
                                }   
                                <Likes onClick={() => onClickLike(comment)}>
                                    {comment.isLiked ? <AiTwotoneLike/>:<AiOutlineLike/>}
                                    {comment.likes}
                                </Likes>
                            </CommentName>
                            <CommentContent>{comment.content}</CommentContent>
                        </Comment>
                    ))}
                </CommentBox>
            </Box>
        </Wrapper>
    );
  }
  
  export default Post;
  