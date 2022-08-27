import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    background: rgba(255, 255, 255, 0.5);
    padding: 80px;
    width: 70%;
    height: 60vh;
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
`;

const Input = styled.input`
    border: 0;
    background-color: rgba(255,255,255,0);
    font-size: 16px;
    width: 100%;
    margin-top: 10px;
`;

const Select = styled.select`
    border: 0;
    width:  50%;
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
    height: 100%;
    width: 100%;
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
    margin-top: 10px;
`

function Upload() {
    const [post, setPost] = useState();
    const {register,  formState: { errors }, handleSubmit, setValue } = useForm();

    useEffect(() => {
        fetch(``, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      }).then(async (res) => {
        const jsonRes = await res.json();
        console.log('응답 : ', jsonRes);
      });
    }, [post])

    const handleValid = (data) => {
        setPost(data);
    }

    return (
        <Wrapper>
            <Box>
                <form onSubmit={handleSubmit(handleValid)}>
                    <Title {...register("title", { required: true })} type="text" placeholder="제목을 입력하세요"/>
                    {errors.title && alert("제목을 입력해주세요")}
                    <Input {...register("category", { required: true })} type="text" placeholder="주제를 입력하세요" />
                    {errors.category && alert("주제를 입력해주세요")}
                    <Select {...register("generation")}>
                        <option value="x">X세대에게 질문하기</option>
                        <option value="mz">MZ세대에게 질문하기</option>
                        <option value="all">모두에게 질문하기</option>
                    </Select><br/>
                    <Textfield  {...register("content", { required: true })} placeholder="내용 입력하기"/>
                    {errors.content && alert("내용을 입력해주세요")}
                    <Button type="submit" value="저장"/>
                </form>
            </Box>
        </Wrapper>
    );
  }
  
  export default Upload;
  