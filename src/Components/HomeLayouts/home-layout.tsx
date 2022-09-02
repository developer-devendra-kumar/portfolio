import styled from "styled-components";
import { theme } from "../../theme/app-theme";

const StyledHomeLayout = styled.div`
width: calc(100% - 30px);
height:100%;
background-color: ${theme.colors.navy};
color: ${theme.colors.white};
padding: 10px 15px;
`;
interface HomeLayoutProps {
    children: any;
}
export const HomeLayout = (props: HomeLayoutProps) => {
  return <StyledHomeLayout>{props.children}</StyledHomeLayout>;
};
