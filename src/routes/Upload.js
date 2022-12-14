import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { WithContext as ReactTags } from 'react-tag-input';
import './ReactTags.css';
import axios from "axios";
import { API_URL } from "../config";


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

    const handleValid = (data) => {
        //setPost(data);
        const postData = {
            title: data.title,
            body: data.content,
            author: "630b2050f0129e7d0ec36a83",
            createdAt: new Date(),
            updatedAt: new Date()
        };
        // ????????? ?????? ??? ????????? ????????? ???????????? ??????
        fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          }).then(async (res) => {
            const jsonRes = await res.json();
            console.log('?????? : ', jsonRes);
          }).catch((e) => console.log(e));
          //window.location.href = `/Frontend/post/${postId}`;
    }

    return (
        <Wrapper>
            <Box>
                <form onSubmit={handleSubmit(handleValid)}>
                    <Title {...register("title", { required: true })} type="text" placeholder="????????? ???????????????"/><br/>
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
                        placeholder="????????? ???????????????"
                    />
                    <Select {...register("generation")}>
                        <option value="x">X???????????? ????????????</option>
                        <option value="mz">MZ???????????? ????????????</option>
                        <option value="all">???????????? ????????????</option>
                    </Select><br/>
                    <Textfield  {...register("content", { required: true })} placeholder="?????? ????????????"/>
                    {Object.keys(errors).length > 0 && <div style={{color: 'red', margin: '5px'}}>?????? ??????????????? ?????????????????????</div>}
                    <Button type="submit" value="??????"/>
                </form>
            </Box>
        </Wrapper>
    );
  }
  
  export default Upload;
  