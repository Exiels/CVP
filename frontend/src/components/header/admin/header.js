import HomeIcon from '@mui/icons-material/Home';
import { Navigate, useNavigate } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DescriptionIcon from '@mui/icons-material/Description';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from './header.jsx';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import withRouter from './withRouter';

const navWidthCollapsed = 64;
const navWidthExpanded = 280;

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
            navigate('/')
        else if (selected === "projects")
            navigate('/projects')
        else if (selected === "jobs")
            navigate('/jobs')
        else if (selected === "competencies")
            navigate('/competencies')
        else if (selected === "contact")
            navigate('/contact')
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
    setSelected = (selected) => {  
      if (window.location.pathname === '/home')
        selected = 'home'
      else if (window.location.pathname === '/projects')
        selected = 'projects'
      else if (window.location.pathname === '/jobs')
        selected = 'jobs'
      else if (window.location.pathname === '/competencies')
        selected = 'competencies'
      else if (window.location.pathname === '/contact')
        selected = 'contact'
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
                        defaultSelected={selected}
                    >
                        <NavItem eventKey="home">
                            <NavIcon>
                                <HomeIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></HomeIcon>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="home">
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="projects">
                            <NavIcon>
                                <DescriptionIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></DescriptionIcon>                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="projects">
                                Projects
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="jobs">
                            <NavIcon>
                                <WorkIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></WorkIcon>                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="jobs">
                                Jobs
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="competencies">
                            <NavIcon>
                                <EngineeringIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></EngineeringIcon>                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="competencies">
                                Competencies
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="contact">
                            <NavIcon>
                                <ContactsIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></ContactsIcon>                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="contact">
                                Contact
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