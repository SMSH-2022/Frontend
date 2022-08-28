import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import imgArr from "../images/arrow.png";
import imgSpeak from "../images/speak.png";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 90vh;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 70%;
    gap: 20px;
`;

const Box = styled.div`
background: rgba(240, 240, 240, 0.9);
border: 1.5px solid #517599;
border-radius: 15px;
width: 500px;
height: 300px;
`;

const Button = styled.div`
    background: #5C80A4;
    border-radius: 20px;
    color: white;
    height: 30px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

const Submit = styled.input`
    background: #5C80A4;
    border-radius: 10px;
    color: white;
    height: 50px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
`

const Image = styled.img`
    width: 30px;
`;

const Input = styled.textarea`
    resize: none;
    width: 100%;
    min-height: 200px;
    background-color: rgba(1, 1, 1, 0);
    box-sizing : border-box;
    padding: 20px;
    border: 0;
    font-size: 16px;
    border-top: 1px solid #517599;
    border-bottom: 1px solid #517599;
    margin-bottom: -5px;
    outline-style: none;
`;

const Title = styled.div`
    font-family: 'Hind Vadodara';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: -0.01em;
    color: rgba(250, 250, 250, 0.91);
    margin-top: 50px
`;

const Subtitle = styled.div`
    font-family: 'Hind Vadodara';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.66);
    margin-top: 10px;
`;

const mzDummies = {
    "열받다" : "킹받다",
    "찹찹찹찹" : "찹스테이크"
};

function Interpreter() {
    const [source, setSource] = useState();
    const [result, setResult] = useState();
    const {register,  formState: { errors }, handleSubmit, setValue } = useForm();

    const onValid = (data) => {
        if(Object.keys(mzDummies).includes(data.source)) {
            setResult(mzDummies[data.source])
        }
    };

    return(
        <Wrapper>
            <Header>
                <Image src={imgSpeak} style={{width: "180px"}}/>
                <div>
                    <Title>MZ세대는 어떤 말을 쓸까요?</Title>
                    <Subtitle>평소 궁금했던 MZ세대의 언어, <br/> X세대 언어를 MZ로 바꿔드릴게요</Subtitle>
                </div>
            </Header>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "50px"}}>
                <Box>
                    <Button>X의 언어</Button>
                    <form onSubmit={handleSubmit(onValid)}>
                    <Input {...register("source", { required: true })}/>
                        {errors.source && alert("번역할 단어 또는 문장을 입력해주세요")}
                        <div style={{display: "flex", justifyContent: "right"}}>
                            <Submit type="submit" value="번역하기"/>
                        </div>
                    </form>
                </Box>
                <Image src={imgArr}/>
                <Box>
                    <Button>MZ의 언어</Button>
                    <form>
                        <Input readOnly={true} value={result}/>
                    </form>
                </Box>
            </div>
        </Wrapper>
    )
}

export default Interpreter;