import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { WithContext as ReactTags } from 'react-tag-input';
import './ReactTags.css';
import axios from "axios";


const Wrapper = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

const Box = styled.div`
    background: rgba(255, 255, 255, 0.5);
    padding: 80px;
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding-bottom: 0px;
`;

const Title = styled.input`
    background-color: rgba(255,255,255,0);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    border: 0;
    outline-style: none;
`;

const Input = styled.input`
    border: 0;
    background-color: rgba(255,255,255,0);
    font-size: 16px;
    width: 200px;
    margin-top: 10px;
`;

const Select = styled.select`
    border: 0;
    width:  200px;
    height: 30px;
    margin: 10px 0px;
    border-radius: 4px;
    padding:4px;
`

const Textfield = styled.textarea`
    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
    border-radius: 16px;
    border: 0;
    resize: none;
    box-sizing : border-box;
    padding: 20px;
    min-height: 300px;
    width: 100%;
    outline-style: none;
`;

const Button =styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background: #EE58BE;
    border-radius: 10px;
    color: #FFFFFF;
    border: 0;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 40px;
`

function Upload() {
    const [post, setPost] = useState();
    const [tags, setTags] = React.useState([]);
    const {register,  formState: { errors }, handleSubmit, setValue } = useForm();

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
      };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
      };

    useEffect(() => {
        // 게시물 등록 후 등록된 게시물 페이지로 이동
        // axios.post('', {params:{}, withCredentials: true})
        // .then((response) => {
        //     // const postId = resonse.json().id
        // })
        // .catch((e) => console.log(e));
        const postId = 3;
        window.location.href = `/post/${postId}`;
    }, [post])

    const handleValid = (data) => {
        setPost(data);
    }

    return (
        <Wrapper>
            <Box>
                <form onSubmit={handleSubmit(handleValid)}>
                    <Title {...register("title", { required: true })} type="text" placeholder="제목을 입력하세요"/><br/>
                    <ReactTags
                        classNames={{
                            tags: 'ReactTags__tags',
                            tagInput: 'ReactTags__tagInput',
                            tagInputField: 'ReactTags__tagInputField',
                            selected: 'ReactTags__selected',
                            tag: 'ReactTags__tag',
                            remove: 'ReactTags__remove',
                          }}
                        tags={tags}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        inputFieldPosition="inline"
                        placeholder="주제를 입력하세요"
                    />
                    <Select {...register("generation")}>
                        <option value="x">X세대에게 질문하기</option>
                        <option value="mz">MZ세대에게 질문하기</option>
                        <option value="all">모두에게 질문하기</option>
                    </Select><br/>
                    <Textfield  {...register("content", { required: true })} placeholder="내용 입력하기"/>
                    {Object.keys(errors).length > 0 && <div style={{color: 'red', margin: '5px'}}>❗️ 필수항목이 누락되었습니다</div>}
                    <Button type="submit" value="저장"/>
                </form>
            </Box>
        </Wrapper>
    );
  }
  
  export default Upload;
  