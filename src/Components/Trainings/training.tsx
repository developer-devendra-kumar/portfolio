import styled from "styled-components";
import { theme } from "../../theme/app-theme";

const StyledAboutContainer = styled.div`
  width: 100%;
  color: ${theme.colors.white};
  margin: auto;
  @media ${theme.screens.LargeScreen} {
    width: 1000px;
    padding: 0px 20px;
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
`;

const StyledOrganizationWorkDesc = styled.div`
  margin-top: 5px;
`;

interface TrainingProps {}
export const Trainings = (props: TrainingProps) => {
  return (
    <>
      <StyledAboutContainer>
        <StyledTitleText>Trainings</StyledTitleText>
        <StyledDescriptionText>
          <StyledOrganizationName>
            Training at Sunrise, Meerut
          </StyledOrganizationName>
          <StyledOrganizationWorkTime>
            July 2017 September 2017
          </StyledOrganizationWorkTime>
          <StyledOrganizationWorkDesc>
            I had worked in advance java and made projects. like E-comm, website
            and online voting system. In this training i got a better
            understanding of websites and database.
          </StyledOrganizationWorkDesc>
          <StyledOrganizationName>
            Training at Sunrise, Meerut
          </StyledOrganizationName>
          <StyledOrganizationWorkTime>
            May 2017 - June 2017
          </StyledOrganizationWorkTime>
          <StyledOrganizationWorkDesc>
            I did training from SUNRISE in core java and made projects like
            snake and ladder (game) and Library management system (database
            based application). Got better understanding of software
            development.
          </StyledOrganizationWorkDesc>
          <StyledOrganizationName>
            Training at Netcamp, Ghaziabad
          </StyledOrganizationName>
          <StyledOrganizationWorkTime>
            May 2016 - June 2016
          </StyledOrganizationWorkTime>
          <StyledOrganizationWorkDesc>
            Worked on web projects and Linux. Got a better understanding of
            websites and Linux machine.
          </StyledOrganizationWorkDesc>
        </StyledDescriptionText>
      </StyledAboutContainer>

      <StyledAboutContainer>
        <StyledTitleText>Education</StyledTitleText>
        <StyledDescriptionText>
          <StyledOrganizationName>
            Babu Banarasi Das Institute Of Technology, Ghaziabad
          </StyledOrganizationName>
          <StyledOrganizationWorkTime>
            July 2014-May 2018
          </StyledOrganizationWorkTime>
          <StyledOrganizationWorkDesc>
            Bachelor Of Technology in computer science and engineering
          </StyledOrganizationWorkDesc>
        </StyledDescriptionText>
      </StyledAboutContainer>
    </>
  );
};
