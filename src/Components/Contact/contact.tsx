import styled from "styled-components";
import { theme } from "../../theme/app-theme";
import { PrimaryButton } from "../Buttons/primary-button";

const StyledAboutContainer = styled.div`
  width: 100%;
  color: ${theme.colors.white};
  margin: auto;
  @media ${theme.screens.LargeScreen} {
    width: 1000px;
    padding: 0px 20px;
    margin-bottom: 20px;
  }
  @media ${theme.screens.mediumScreen} {
    width: 500px;
    padding: 0px 15px;
  }
`;
const StyledTitleText = styled.div`
  color: ${theme.colors.lightestslate};
  font-size: 2rem;
  font-weight: ${theme.fonts.weight.semiBold};
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ::after {
    content: "";
    width: 70%;
    height: 1px;
    margin-left: 10px;
    background: ${theme.colors.lightestnavy};
    @media ${theme.screens.mediumScreen} {
      width: 60%;
    }
    @media ${theme.screens.smallScreen} {
      width: 50%;
    }
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

const StyledOrganizationName = styled.div`
  color: ${theme.colors.green};
  font-size: 1.25rem;
  font-weight: ${theme.fonts.weight.semiBold};
  margin-top: 20px;
`;

const StyledOrganizationWorkTime = styled.div`
  color: ${theme.colors.lightestslate};
  font-size: 1rem;
  font-weight: ${theme.fonts.weight.regular};
  margin-top: 5px;
  margin-bottom: 5px;
`;

const StyledOrganizationWorkDesc = styled.div`
  margin-top: 5px;
`;
const StyledIconHolder = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;
const StyledIcon = styled.div`
  width: 32px;
  height: auto;
`;

const StyledA = styled.a`
  text-decoration: unset;
`;

interface ContactProps {}
export const Contact = (props: ContactProps) => {
  return (
    <StyledAboutContainer>
      <StyledTitleText>Contact</StyledTitleText>
      <StyledDescriptionText>
        <StyledOrganizationName id="contact">
          Devendra kumar
        </StyledOrganizationName>
        <StyledOrganizationWorkTime>
          Front End Developer
        </StyledOrganizationWorkTime>
        <StyledOrganizationWorkDesc>
          <StyledIconHolder>
            <StyledIcon className="material-symbols-rounded">
              location_on
            </StyledIcon>
            Meerut, India
          </StyledIconHolder>
          <StyledIconHolder>
            <StyledIcon className="material-symbols-rounded">call</StyledIcon>
            7409243605
          </StyledIconHolder>
          <StyledIconHolder>
            <StyledIcon className="material-symbols-rounded">mail</StyledIcon>
            ankuryadav796@gmail.com
          </StyledIconHolder>
        </StyledOrganizationWorkDesc>
      </StyledDescriptionText>
      <StyledA href="mailto:ankuryadav796@gmail.com">
        <PrimaryButton text="Get in touch" marginTop="15px" />
      </StyledA>
    </StyledAboutContainer>
  );
};
