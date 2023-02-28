import React from 'react';
import HomeIcon from '@mui/icons-material/Home';import { useNavigate } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DescriptionIcon from '@mui/icons-material/Description';
import "@fontsource/titillium-web";
import SideNav, { NavItem, NavIcon, NavText } from './header.jsx';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Header = (props) =>{
    const state = {
      selected: 'home'
    };
    
    function setSelected() {  
      if (window.location.pathname == '/home')
        state.selected = 'home'
      else if (window.location.pathname == '/projects')
        state.selected = 'projects'
      else if (window.location.pathname == '/jobs')
        state.selected = 'jobs'
      else if (window.location.pathname == '/competencies')
        state.selected = 'competencies'
      else if (window.location.pathname == '/contact')
        state.selected = 'contact'
    }

    let navigate = useNavigate();
    setSelected();
    return(
        <SideNav
            onSelect={(selected) => {
              state.selected = selected
                if (selected == "home")
                  navigate('/')
                else if (selected == "projects")
                  navigate('/projects')
                else if (selected == "jobs")
                  navigate('/jobs')
                else if (selected == "competencies")
                  navigate('/competencies')
                else if (selected == "contact")
                  navigate('/contact')
            }}>
            <SideNav.Toggle />
            <SideNav.Nav selected={state.selected}>
                <NavItem eventKey="home">
                    <NavIcon>
                        <HomeIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></HomeIcon>
                    </NavIcon>
                    <NavText style={{ fontFamily: "Titillium Web", fontWeight: 600, paddingRight: 32 }}>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="projects">
                    <NavIcon>
                        <DescriptionIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></DescriptionIcon>
                    </NavIcon>
                    <NavText>
                        Projects
                    </NavText>
                </NavItem>
                <NavItem eventKey="jobs">
                    <NavIcon>
                      <WorkIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></WorkIcon>
                    </NavIcon>
                    <NavText style={{ fontFamily: "Titillium Web", fontWeight: 600, paddingRight: 32 }}>
                        Jobs
                    </NavText>
                </NavItem>
                <NavItem eventKey="competencies">
                    <NavIcon>
                      <EngineeringIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></EngineeringIcon>
                    </NavIcon>
                    <NavText style={{ fontFamily: "Titillium Web", fontWeight: 600, paddingRight: 32 }}>
                        Competencies
                    </NavText>
                </NavItem>
                <NavItem eventKey="contact">
                    <NavIcon>
                        <ContactsIcon style={{ fontSize: '1.75em' }}></ContactsIcon>
                    </NavIcon>
                    <NavText style={{ fontFamily: "Titillium Web", fontWeight: 600, paddingRight: 32 }}>
                        Contact
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

export default Header;