import styled from '@emotion/styled';
import {useEffect, useState} from "react";

const EmotionPage = () => {
    const [user, setUser] = useState({
        writer: '',
        password: '',
        title: '',
        content: '',
        address: '',
    });
    const [errorMessage, setErrorMessage] = useState({
        writer: '',
        password: '',
        title: '',
        content: '',
        address: '',
    })

    const onChangeInput = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        })

        if (name === 'writer' && value === '') {
            setErrorMessage({
                ...errorMessage,
                writer: '작성자를 입력해 주세요.',
            });
        }
        if (name === 'password' && value === '') {
            setErrorMessage({
                ...errorMessage,
                password: '비밀번호를 입력해 주세요.',
            });
        }
        if (name === 'title' && value === '') {
            setErrorMessage({
                ...errorMessage,
                title: '제목을 입력해 주세요.',
            });
        }
        if (name === 'content' && value === '') {
            setErrorMessage({
                ...errorMessage,
                content: '내용을 입력해 주세요.',
            });
        }
        if (name === 'address' && value === '') {
            setErrorMessage({
                ...errorMessage,
                address: '주소를 입력해 주세요.',
            });
        }

    }

    const onSubmit = () => {
        if (!(user.writer && user.password && user.title && user.content && user.address)) {
            console.log('error');
        } else {
            alert('등록되었습니다.');
            setUser({
                writer: '',
                password: '',
                title: '',
                content: '',
                address: '',
            });
        }
    }

    // const handleCheckValidation = () => {
    //
    // };
    //
    // useEffect(() => {
    //     handleCheckValidation();
    // }, [user.writer, user.password, user.content, user.content, user.address]);

    return (
        <Container>
            <Title>게시물 등록</Title>
            <WriterInfoContainer>
                <InputContainer>
                    <Label htmlFor="writer">작성자</Label>
                    <WriterInfoInput
                        type="text"
                        id="writer"
                        name="writer"
                        placeholder="이름을 적어주세요."
                        value={user.writer}
                        onChange={onChangeInput}
                    />
                    <ErrorMessage>{errorMessage.writer}</ErrorMessage>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="password">비밀번호</Label>
                    <WriterInfoInput
                        type="text"
                        id="password"
                        name="password"
                        placeholder="비밀번호를 입력하세요."
                        value={user.password}
                        onChange={onChangeInput}
                    />
                    <ErrorMessage>{errorMessage.password}</ErrorMessage>
                </InputContainer>
            </WriterInfoContainer>
            <InputContainer>
                <Label htmlFor="title">제목</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="제목을 작성하세요."
                    value={user.title}
                    onChange={onChangeInput}
                />
                <ErrorMessage>{errorMessage.title}</ErrorMessage>
            </InputContainer>
            <ContentContainer>
                <Label htmlFor="content">내용</Label>
                <TextArea
                    type="text"
                    id="content"
                    name="content"
                    placeholder="내용을 작성하세요."
                    value={user.content}
                    onChange={onChangeInput}
                />
                <ErrorMessage>{errorMessage.content}</ErrorMessage>
            </ContentContainer>
            <AddressContainer>
                <Label htmlFor="address">주소</Label>
                <ZipcodeContainer>
                    <AddressInput
                        type="text"
                        id="address"
                        name="address"
                        placeholder="07250"
                        value={user.address}
                        onChange={onChangeInput}
                    />
                    <AddressButton>우편번호 검색</AddressButton>
                </ZipcodeContainer>
                <Input
                    type="text"
                    id="address1"
                    name="address1"
                />
                <Input
                    type="text"
                    id="address2"
                    name="address2"
                />
                <ErrorMessage>{errorMessage.address}</ErrorMessage>
            </AddressContainer>
            <InputContainer>
                <Label htmlFor="youtube">유튜브</Label>
                <Input
                    type="text"
                    id="youtube"
                    name="youtube"
                    placeholder="링크를 복사해 주세요."
                    onChange={onChangeInput}
                />
            </InputContainer>
            <ImageContainer>
                <Label htmlFor="image">사진 첨부</Label>
                <ImageBox>
                    <Image>Upload</Image>
                    <Image>Upload</Image>
                    <Image>Upload</Image>
                </ImageBox>
            </ImageContainer>
            <RadioContainer>
                <Label htmlFor="radio">메인 설정</Label>
                <RadioGroup>
                    <RadioContent>
                        <InputRadio type="radio" id="radio" name="radioYoutube" value="유튜브"/>
                        <Label htmlFor="radioYoutube">유튜브</Label>
                    </RadioContent>
                    <RadioContent>
                        <InputRadio type="radio" id="radioImage" value="사진"/>
                        <Label htmlFor="radioImage">사진</Label>
                    </RadioContent>
                </RadioGroup>
            </RadioContainer>
            <ButtonContainer>
                <Button onClick={onSubmit}>등록하기</Button>
            </ButtonContainer>
        </Container>
    );
};

export default EmotionPage;

const Container = styled.div`
  width: 1200px;
  height: 1847px;
  padding: 0 102px;
  margin: 0;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 60px;
  padding: 0;
  font-weight: 700;
  font-size: 36px;
`;

const WriterInfoContainer = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const WriterInfoInput = styled.input`
  width: 486px;
  height: 52px;
  padding: 14px 16px;
  margin: 16px 0 0 0;
  box-sizing: border-box;
  border: 1px solid #BDBDBD;
  font-size: 15px;
`;

const InputContainer = styled.div`
  width: 996px;
  height: 100px;
  margin-top: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Label = styled.label`
  height: 15px;
  font-size: 15px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 996px;
  height: 52px;
  padding: 13px;
  margin-top: 10px;
  box-sizing: border-box;
  border: 1px solid #afafaf;
  font-size: 15px;
`;

const ErrorMessage = styled.div`
  height: 18px;
  margin-top: 4px;
  padding-left: 2px;
  color: #ff6363;
  font-size: 12px;
`;

const ContentContainer = styled.div`
  width: 996px;
  height: 480px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TextArea = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 13px;
  margin-top: 10px;
  box-sizing: border-box;
  border: 1px solid #afafaf;
  font-size: 16px;
  font-weight: 400;
  resize: none;
`;

const AddressContainer = styled.div`
  width: 996px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ZipcodeContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const AddressInput = styled.input`
  width: 77px;
  height: 52px;
  padding: 14px 16px;
  box-sizing: border-box;
  border: 1px solid #afafaf;
`;

const AddressButton = styled.button`
  padding: 14px 16px;
  margin-left: 16px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  background-color: black;
  border: 1px solid black;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 996px;
  margin-top: 25px;
`;

const ImageBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Image = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 15px;
  font-size: 14px;
  color: #4F4F4F;
  background-color: #BDBDBD;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const RadioContainer = styled.div`
  width: 996px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const RadioGroup = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const RadioContent = styled.div`
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputRadio = styled.input`
  width: 17px;
  height: 17px;
  padding: 0;
  margin: 0 5px 0 0;
  accent-color: #ffd603;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: black;
  width: 179px;
  height: 52px;
  background-color: #FFD600;
  border: none;
  cursor: pointer;
`;


