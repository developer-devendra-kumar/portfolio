import styled from "styled-components";
import { theme } from "../../theme/app-theme";

const StyledAboutContainer = styled.div`
  width: 100%;
  color: ${theme.colors.white};
  margin: auto;
  @media ${theme.screens.LargeScreen} {
    width: 1000px;
    margin: auto;
    padding: 0px 20px;
  }
  @media ${theme.screens.mediumScreen} {
    width: 500px;
    margin: auto;
    padding: 0px 15px;
  }
`;
const StyledTitleText = styled.div`
  color: ${theme.colors.lightestslate};
  font-size: 2rem;
  font-weight: ${theme.fonts.weight.semiBold};
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ::after {
    content: "";
    width: 70%;
    height: 1px;
    margin-left: 10px;
    background: ${theme.colors.lightestnavy};
  }
`;
const StyledDescriptionText = styled.div`
  color: ${theme.colors.slate};
  font-size: 1rem;
  font-weight: ${theme.fonts.weight.regular};
  margin-top: 15px;
  margin-bottom: 15px;
  letter-spacing: 1px;
  width: 100%;
  @media ${theme.screens.LargeScreen} {
    width: 600px;
  }
  @media ${theme.screens.mediumScreen} {
    width: 500px;
  }
`;
const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`;
const StyledListItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${theme.fonts.fontFamily.primary};
  font-size: 1rem;
  ::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${theme.colors.green};
    font-size: 1rem;
    line-height: 12px;
  }
`;
interface IntroProps {}
export const About = (props: IntroProps) => {
  return (
    <StyledAboutContainer>
      <StyledTitleText id="about">About</StyledTitleText>
      <StyledDescriptionText>
        <div>
          Hello! My name is Devendra and I enjoy creating things that live on
          the internet. My interest in web development started back in 2016 when
          I see website development during my trainig — that training taught me
          a lot about HTML + CSS! and JavaScript.
        </div>
        <br />
        <div>
          Fast-forward to today, and I’ve had the privilege of working at an
          banking company, a start-up having websites about heath related and
          e-commerce system in it.
        </div>
        <br />
        <div>I’ve been working with recently :</div>
        <StyledList>
          <StyledListItem>Angular</StyledListItem>
          <StyledListItem>JavaScript (ES6+)</StyledListItem>
          <StyledListItem>TypeScript</StyledListItem>
          <StyledListItem>Node.js</StyledListItem>
          <StyledListItem>React</StyledListItem>
        </StyledList>
        <br />
        <br />
      </StyledDescriptionText>
    </StyledAboutContainer>
  );
};
