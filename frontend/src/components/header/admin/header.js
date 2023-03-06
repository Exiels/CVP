import HomeIcon from '@mui/icons-material/Home';
import { compose } from 'redux'
import { setLanguage } from 'react-multi-lang'
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import FlagIcon from '@mui/icons-material/Flag';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from './header.jsx';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import withRouter from './withRouter';
import withTranslate from './withTranslate.js';

const navWidthCollapsed = 64;
const navWidthExpanded = 280;

const Separator = styled.div`
    clear: both;
    position: relative;
    margin: .8rem 0;
    background-color: #ddd;
    height: 1px;
`;

const Main = styled.main`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${navWidthCollapsed}px;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    background: ${props => (props.expanded ? 'rgba(0, 0, 0, .6)' : 'inherit')};
    transition: background-color .35s cubic-bezier(.4, 0, .2, 1);
`;

class header extends PureComponent {
    
    state = {
        selected: 'home',
        expanded: false
    };

    lastUpdateTime = new Date().toISOString();

    onSelect = (selected) => {
        const { navigate } = this.props;
        this.setState({ selected: selected });
        if (selected === "home")
            navigate('/admin')
        else if (selected === "settings/user")
            navigate('/admin/settings/user')
        else if (selected === "settings/jobs")
            navigate('/admin/settings/jobs')
        else if (selected === "settings/competencies")
            navigate('/admin/settings/competencies')
        else if (selected === "settings/contact")
            navigate('/admin/settings/contact')
        else if (selected === "language/french")
            setLanguage('fr')
        else if (selected === "language/english")
            setLanguage('en')
        else if (selected === "logout") {
            sessionStorage.removeItem("token")
            localStorage.removeItem("token")
            navigate('/')
        }
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
    setSelected = () => {  
      if (window.location.pathname === '/admin')
        return("home")
      else if (window.location.pathname === '/admin/settings/user')
        return("settings/user")
      else if (window.location.pathname === '/admin/settings/jobs')
        return("settings/jobs")
      else if (window.location.pathname === '/admin/settings/competencies')
        return("settings/competencies")
      else if (window.location.pathname === '/admin/settings/contact')
        return("settings/contact")
    }
    
    render() {
        const { expanded, selected } = this.state;
        const { t } = this.props;
        return (
            <div>
                <SideNav
                    style={{ minWidth: expanded ? navWidthExpanded : navWidthCollapsed }}
                    onSelect={this.onSelect}
                    onToggle={this.onToggle}
                >
                    <Toggle />
                    <Nav
                        defaultSelected={this.setSelected()}
                    >
                        <NavItem eventKey="home">
                            <NavIcon>
                                <HomeIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></HomeIcon>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="home">
                                {t('header.home')}
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="settings">
                            <NavIcon>
                                <SettingsIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></SettingsIcon>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="settings">
                                {t('header.admin.settings')}
                            </NavText>
                            <NavItem eventKey="settings/user">
                                <NavIcon>
                                    <PersonIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></PersonIcon>
                                </NavIcon>
                                <NavText style={{ paddingRight: 32 }} title="user">
                                    {t('header.admin.user')}
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="settings/jobs">
                                <NavIcon>
                                    <WorkIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></WorkIcon>
                                </NavIcon>
                                <NavText style={{ paddingRight: 32 }} title="jobs">
                                    {t('header.jobs')}
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="settings/competencies">
                                <NavIcon>
                                    <EngineeringIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></EngineeringIcon>
                                </NavIcon>
                                <NavText style={{ paddingRight: 32 }} title="competencies">
                                    {t('header.competencies')}
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="settings/contact">
                                <NavIcon>
                                    <ContactsIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></ContactsIcon>
                                </NavIcon>
                                <NavText style={{ paddingRight: 32 }} title="contact">
                                    {t('header.contact')}
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <Separator />
                        <NavItem eventKey="language">
                            <NavIcon>
                                <FlagIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></FlagIcon>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="language">
                                {t('header.language.language')}
                            </NavText>
                            <NavItem eventKey="language/french">
                                <NavText style={{ paddingRight: 32 }} title="french">
                                    {t('header.language.french')}
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="language/english">
                                <NavText style={{ paddingRight: 32 }} title="english">
                                    {t('header.language.english')}
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <Separator />
                        <NavItem eventKey="logout">
                            <NavIcon>
                                <LogoutIcon style={{ fontSize: '1.75em', verticalAlign: 'middle'  }}></LogoutIcon>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="SIGN OUT">
                                {t('header.admin.sign-out')}
                            </NavText>
                        </NavItem>
                    </Nav>
                </SideNav>
                <Main expanded={expanded}>
                </Main>
            </div>
        );
    }
}

export default compose(withRouter, withTranslate)(header)