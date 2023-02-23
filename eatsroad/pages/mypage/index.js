import styled from '@emotion/styled';

const MyPage = () => {
    // js

    return (
        <>
            <Container>
                <Header>
                    <Title>마이</Title>
                    <ImageContainer>
                        <Image src="/userImage.png"/>
                        <UserName>
                            임정아
                            <ArrowContainer>
                                <Arrow>></Arrow>
                            </ArrowContainer>
                        </UserName>
                    </ImageContainer>
                </Header>
                <Menu>
                    <MenuList>
                        <MenuItem>공지사항</MenuItem>
                        <MenuItem>이벤트</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Q&A</MenuItem>
                    </MenuList>
                </Menu>
                <Line></Line>
                <BoardContainer>
                    <QuestionContainer>
                        <QuestionBox>
                            <Label>Q.01</Label>
                            <Question>리뷰 작성은 어떻게 하나요?</Question>
                        </QuestionBox>
                        <ViewMoreIconBox>
                            <ViewMoreIcon>></ViewMoreIcon>
                        </ViewMoreIconBox>
                    </QuestionContainer>
                    <QuestionContainer>
                        <QuestionBox>
                            <Label>Q.02</Label>
                            <Question>리뷰 수정/삭제는 어떻게 하나요?</Question>
                        </QuestionBox>
                        <ViewMoreIconBox>
                            <ViewMoreIcon>></ViewMoreIcon>
                        </ViewMoreIconBox>
                    </QuestionContainer>
                    <QuestionContainer>
                        <QuestionBox>
                            <Label>Q.03</Label>
                            <Question>아이디/비밀번호를 잊어버렸어요</Question>
                        </QuestionBox>
                        <ViewMoreIconBox>
                            <ViewMoreIcon>></ViewMoreIcon>
                        </ViewMoreIconBox>
                    </QuestionContainer>
                    <QuestionContainer>
                        <QuestionBox>
                            <Label>Q.04</Label>
                            <Question>회원탈퇴를 하고싶어요.</Question>
                        </QuestionBox>
                        <ViewMoreIconBox>
                            <ViewMoreIcon>></ViewMoreIcon>
                        </ViewMoreIconBox>
                    </QuestionContainer>
                    <QuestionContainer>
                        <QuestionBox>
                            <Label>Q.05</Label>
                            <Question>출발지 설정은 어떻게 하나요?</Question>
                        </QuestionBox>
                        <ViewMoreIconBox>
                            <ViewMoreIcon>></ViewMoreIcon>
                        </ViewMoreIconBox>
                    </QuestionContainer>
                    <QuestionContainer>
                        <QuestionBox>
                            <Label>Q.06</Label>
                            <Question>비밀번호를 변경하고 싶어요</Question>
                        </QuestionBox>
                        <ViewMoreIconBox>
                            <ViewMoreIcon>></ViewMoreIcon>
                        </ViewMoreIconBox>
                    </QuestionContainer>
                </BoardContainer>
                <NavBar>
                    <IconContainer>
                        <IconBox>
                            <Icon src="/userImage.png"/>
                            <IconText>홈</IconText>
                        </IconBox>
                        <IconBox>
                            <Icon src="/userImage.png"/>
                            <IconText>잇츠로드</IconText>
                        </IconBox>
                        <IconBox>
                            <Icon src="/userImage.png"/>
                            <IconText>마이찜</IconText>
                        </IconBox>
                        <IconBox>
                            <Icon src="/userImage.png"/>
                            <IconText>마이</IconText>
                        </IconBox>
                    </IconContainer>
                </NavBar>
            </Container>
        </>
    );
}

export default MyPage;

const Container = styled.div`
  width: 640px;
  height: 1096px;
`;

const Header = styled.div`
  margin-top: 101px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 49px;
`;

const Title = styled.h2`
  width: 212px;
  font-size: 40px;
  margin: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 19px;
  margin-right: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ArrowContainer = styled.div`
  width: 28px;
  height: 28px;
  margin-left: 4px;
`;

const Arrow = styled.div`
  width: 12px;
  height: 12px;
  color: #CACACA;
`;

const Menu = styled.div`
  margin-top: 39px;
`;

const MenuList = styled.ul`
  padding: 0 121px 0 49px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.li`
  color: #CACACA;
  font-weight: Bold;
  font-size: 30px;
  line-height: 43px;
  list-style: none;

  &:hover {
    color: #FF1B6D;
  }
`;

const Line = styled.div`
  width: 640px;
  margin-top: 58px;
  border: 1px solid #CACACA;
`;

const BoardContainer = styled.div`
  width: 640px;
  height: 695px;
`;

const QuestionContainer = styled.div`
  height: 65px;
  padding: 25px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Label = styled.div`
  width: 43px;
  height: 26px;
  font-weight: 400;
  font-size: 18px;
  color: #ADADAD;
`;

const Question = styled.div`
  margin-top: 5px;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
`;

const ViewMoreIconBox = styled.div`
  width: 60px;
  height: 61px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ViewMoreIcon = styled.div`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
  color: #CACACA;
  border: 2px;
  font-size: 30px;
`;

const NavBar = styled.div`
  width: 640px;
  height: 96px;
  margin-top: 30px;
  border-top: 1px solid #DCDCDC;
`;

const IconContainer = styled.div`
  width: 640px;
  height: 96px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const IconText = styled.div`
  width: 81px;
  height: 48px;
  margin-top: 9px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23.17px;
  text-align: center;

  &:hover {
    color: #FF1B6D
  }
`;
