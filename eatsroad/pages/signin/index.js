import styled from '@emotion/styled';

const SignInPage = () => {
    // js

    return (
        <>
            <Container>
                <Image>
                    {/*<MainImage src="/img-bg@3x.png"/>*/}
                    <Header>
                        <MainIconContainer>
                            <MainIcon src="/mainIcon.png"/>
                            <Rectangle src="/Rectangle 1.png"/>
                        </MainIconContainer>
                        <Title>잇츠로드</Title>
                    </Header>
                    <SignInContainer>
                        <InputContainer>
                            <Input type="email"/>
                            <ClearIcon src="/clear.png"/>
                            <ErrorMessage>이메일 주소를 다시 확인해주세요.</ErrorMessage>
                        </InputContainer>
                        <InputContainer>
                            <Input type="password"/>
                            <ClearIcon src="/clear.png"/>
                            <ErrorMessage>8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.</ErrorMessage>
                        </InputContainer>
                        <SigninButton>로그인</SigninButton>
                        <SignOption>
                            <SignOptionItem>이메일 찾기</SignOptionItem>
                            <SignOptionItem>비밀번호 찾기</SignOptionItem>
                            <SignOptionItem>회원가입 찾기</SignOptionItem>
                        </SignOption>
                        <KakaoButton>카카오톡으로 로그인</KakaoButton>
                    </SignInContainer>
                </Image>
            </Container>
        </>
    );
}

export default SignInPage;

const Container = styled.div`
  width: 640px;
  height: 1096px;
  background-color: rgba(37, 37, 37, 0.7);
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/img-bg@3x.png");
  object-fit: contain;
`;

const Header = styled.div`
  padding-top: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled.img`

`;

const MainIconContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainIcon = styled.img`
  z-index: 2;
`;

const Rectangle = styled.img`
  z-index: 1;
`;

const Title = styled.h1`
  width: 221px;
  height: 87px;
  font-size: 60px;
  margin: 35px 0 0 0;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 540px;
  height: 70px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ClearIcon = styled.img`
  position: relative;
  top: -26px;
  left: 515px;
`;

const Input = styled.input`
  width: 530px;
  height: 40px;
  border-bottom: 1px solid #7D7D7D;
  background: none;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
`;

const ErrorMessage = styled.div`
  //margin-top: 5px;
  font-weight: 400;
  font-size: 16px;
  color: #FF1B6D;
`;

const SigninButton = styled.button`
  width: 540px;
  height: 76px;
  margin-top: 20px;
  border-radius: 38px;
  border: none;
  background-color: rgba(255, 27, 109, 0.6);
  color: #ffffff;
  font-weight: 700;
  font-size: 26px;
`;

const SignOption = styled.ul`
  width: 100%;
  margin: 38px 0 58px 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const SignOptionItem = styled.li`
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  list-style: none;
`;

const KakaoButton = styled.button`
  width: 540px;
  height: 76px;
  border-radius: 38px;
  border: 2px solid #FAE100;
  background: none;
  color: #FAE100;
  font-weight: 700;
  font-size: 26px;
`;

