import HomeIcon from '@mui/icons-material/Home';
import { Navigate, useNavigate } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from './header.jsx';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import withRouter from './withRouter';

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
        else if (selected === "logout") {
            sessionStorage.removeItem("token")
            localStorage.removeItem("token")
            navigate('/')
        }
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
    setSelected = (selected) => {  
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
        this.setSelected(selected)
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
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="settings">
                            <NavIcon>
                                <SettingsIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></SettingsIcon>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="settings">
                                Settings
                            </NavText>
                            <NavItem eventKey="settings/user">
                                <NavIcon>
                                    <PersonIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></PersonIcon>
                                </NavIcon>
                                <NavText style={{ paddingRight: 32 }} title="user">
                                    User
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="settings/jobs">
                                <NavIcon>
                                    <WorkIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></WorkIcon>
                                </NavIcon>
                                <NavText style={{ paddingRight: 32 }} title="jobs">
                                    Jobs
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="settings/competencies">
                                <NavIcon>
                                    <EngineeringIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></EngineeringIcon>
                                </NavIcon>
                                <NavText style={{ paddingRight: 32 }} title="competencies">
                                    Competencies
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="settings/contact">
                                <NavIcon>
                                    <ContactsIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></ContactsIcon>
                                </NavIcon>
                                <NavText style={{ paddingRight: 32 }} title="contact">
                                    Contact
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <Separator />
                        <NavItem eventKey="logout">
                            <NavIcon>
                                <i className="fa fa-fw fa-power-off" style={{ fontSize: '1.5em' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="SIGN OUT">
                                SIGN OUT
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

export default withRouter(header)