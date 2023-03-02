import styled from 'styled-components';
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
} from '@trendmicro/react-sidenav';
import "@fontsource/titillium-web"

// SideNav
const StyledSideNav = styled(SideNav)`
    background-color: #2C2D32;
    border-right: 1px solid #ddd;
`;
StyledSideNav.defaultProps = SideNav.defaultProps;

// Toggle
const StyledToggle = styled(Toggle)`
    background-color: #2C2D32;
`;
StyledToggle.defaultProps = Toggle.defaultProps;

// Nav
const StyledNav = styled(Nav)`  
    [class*="sidenav--"] {
        [class*="sidenav-subnav--"] {
            > [class*="sidenav-subnavitem--"][class*="selected--"] {
                > [class*="navitem--"] {
                    color: #fac921;
                }
            }
        }
    }
    &&[class*="expanded--"] {
        [class*="sidenav-subnav--"] {
            > [class*="sidenav-subnavitem--"],
            > [class*="sidenav-subnavitem--"]:hover {
                > [class*="navitem--"] {
                    color: #eee;
                }
            }
            > [class*="sidenav-subnavitem--"]:hover {
                > [class*="navitem--"] {
                    background-color: #eee;
                }
            }
            > [class*="sidenav-subnavitem--"][class*="selected--"] {
                > [class*="navitem--"] {
                    color: #fac921;
                }
                > [class*="navitem--"]::before {
                    border-left: 2px solid #fac921;
                }
            }
        }
    }
    && > [class*="sidenav-navitem--"] {
        > [class*="navitem--"] {
            background-color: inherit;
            color: #222;
        }
    }
    && > [class*="sidenav-navitem--"]:hover {
        > [class*="navitem--"] {
            background-color: #eee;
        }
    }
    && > [class*="sidenav-navitem--"],
    && > [class*="sidenav-navitem--"]:hover {
        > [class*="navitem--"] {
            [class*="navicon--"] {
                &, > * {
                    color: #666;
                }
            }
            [class*="sidenav-nav-text--"] {
                &, > * {
                    color: #222;
                }
            }
        }
    }
    && > [class*="sidenav-navitem--"][class*="highlighted--"],
    && > [class*="sidenav-navitem--"][class*="highlighted--"]:hover {
        > [class*="navitem--"] {
            [class*="navicon--"],
            [class*="navtext--"] {
                &, > * {
                    color: #fac921;
                }
            }
            [class*="sidenav-nav-text--"] {
                font-weight: 900;
            }
        }
    }
`;
StyledNav.defaultProps = Nav.defaultProps;

// NavItem
const StyledNavItem = styled(NavItem)`
    * {
        font-family: "Titillium Web";
        font-weight: 800;
    }
    &&&:hover {
        [class*="navtext--"] {
            color: #fac921;
            font-family: "Titillium Web";
        }
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
    color: #fac921;
`;
StyledNavText.defaultProps = NavText.defaultProps;

export {
    StyledToggle as Toggle,
    StyledNav as Nav,
    StyledNavItem as NavItem,
    StyledNavIcon as NavIcon,
    StyledNavText as NavText
};
export default StyledSideNav;