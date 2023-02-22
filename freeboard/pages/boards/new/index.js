import styled from '@emotion/styled';

const EmotionPage = () => {
    //  js

    return (
        <Container>
            <Title>게시물 등록</Title>
            <WriterInfoContainer>
                <InputContainer>
                    <Label htmlFor="writer">작성자</Label>
                    <Input type="text" id="writer" name="writer" placeholder="이름을 적어주세요."/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="password">비밀번호</Label>
                    <Input type="text" id="password" name="password" placeholder="비밀번호를 입력하세요."/>
                </InputContainer>
            </WriterInfoContainer>
            <InputContainer>
                <Label htmlFor="title">제목</Label>
                <Input type="text" id="title" name="title" placeholder="제목을 작성하세요."/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="content">내용</Label>
                <TextArea type="text" id="content" name="content" placeholder="내용을 작성하세요."/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="address">주소</Label>
                <AddressContainer>
                    <AddressInput type="text" id="address" name="address" placeholder="07250"/>
                    <AddressButton>우편번호 검색</AddressButton>
                </AddressContainer>
                <Input type="text" id="address1" name="address1"/>
                <Input type="text" id="address2" name="address2"/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="youtube">유튜브</Label>
                <Input type="text" id="youtube" name="youtube" placeholder="링크를 복사해 주세요."/>
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
                <Button>등록하기</Button>
            </ButtonContainer>
        </Container>
    );
};

export default EmotionPage;

const Container = styled.div`
  width: 767px;
  margin-top: 250px;
  margin-bottom: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const WriterInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  //height: 30px;
  padding: 13px;
  margin-top: 10px;
  border: 1px solid #afafaf;
  font-size: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 400px;
  padding: 13px;
  margin-top: 10px;
  border: 1px solid #afafaf;
  font-size: 15px;
  resize: none;
`;

const AddressContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const AddressInput = styled.input`
  width: 60px;
  padding: 13px;
  border: 1px solid #afafaf;
`;

const AddressButton = styled.button`
  padding: 13px;
  margin-left: 15px;
  color: white;
  background-color: black;
  border: 1px solid black;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100%;
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
  width: 80px;
  height: 80px;
  margin-right: 15px;
  font-size: 14px;
  color: #525252;
  background-color: #b7b7b7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const RadioContainer = styled.div`
  width: 100%;
  margin-top: 25px;
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
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 15px;
  width: 180px;
  height: 45px;
  margin-bottom: 50px;
  background-color: #ffd603;
  border: none;
  cursor: pointer;
`;


