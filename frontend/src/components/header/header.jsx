import styled from 'styled-components';
import SideNav, {
    NavItem,
    NavIcon,
    NavText
} from '@trendmicro/react-sidenav';
import "@fontsource/titillium-web";

// SideNav
const StyledSideNav = styled(SideNav)`
    background-color: #2C2D32;
    border-right: 1px solid #ddd;
`;
StyledSideNav.defaultProps = SideNav.defaultProps;

// NavItem
const StyledNavItem = styled(NavItem)`
    &&&:hover {
        [class*="navtext--"] {
            color: #fac921;
        }
    }
    [class*="navtext--"] {
        font-family: "Titillium Web";
        font-weight: 600;
    }
`;
StyledNavItem.defaultProps = NavItem.defaultProps;

// NavIcon
const StyledNavIcon = styled(NavIcon)`
    color: #222;
`;
StyledNavIcon.defaultProps = NavIcon.defaultProps;

// NavText
const StyledNavText = styled(NavText)`
    color: #fff;
`;
StyledNavText.defaultProps = NavText.defaultProps;

export {
    StyledNavItem as NavItem,
    StyledNavIcon as NavIcon,
    StyledNavText as NavText
};
export default StyledSideNav;