import HomeIcon from '@mui/icons-material/Home';
import { compose } from 'redux'
import { setLanguage } from 'react-multi-lang'
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DescriptionIcon from '@mui/icons-material/Description';
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
            navigate('/')
        else if (selected === "projects")
            navigate('/projects')
        else if (selected === "jobs")
            navigate('/jobs')
        else if (selected === "competencies")
            navigate('/competencies')
        else if (selected === "contact")
            navigate('/contact')
        else if (selected === "language/french")
            setLanguage('fr')
        else if (selected === "language/english")
            setLanguage('en')
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
    setSelected = () => {  
      if (window.location.pathname === '/')
        return("home")
      else if (window.location.pathname === '/projects')
        return("projects")
      else if (window.location.pathname === '/jobs')
        return("jobs")
      else if (window.location.pathname === '/competencies')
        return("competencies");
      else if (window.location.pathname === '/contact')
        return("contact")
    }

    
    render() {
        this.setSelected()
        const { expanded, selected } = this.state;
        const { t } = this.props
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
                        <NavItem eventKey="projects">
                            <NavIcon>
                                <DescriptionIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></DescriptionIcon>                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="projects">
                                {t('header.projects')}
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="jobs">
                            <NavIcon>
                                <WorkIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></WorkIcon>                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="jobs">
                                {t('header.jobs')}
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="competencies">
                            <NavIcon>
                                <EngineeringIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></EngineeringIcon>                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="competencies">
                                {t('header.competencies')}
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="contact">
                            <NavIcon>
                                <ContactsIcon style={{ fontSize: '1.75em', verticalAlign: 'middle' }}></ContactsIcon>                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="contact">
                                {t('header.contact')}
                            </NavText>
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
                    </Nav>
                </SideNav>
                <Main expanded={expanded}>
                </Main>
            </div>
        );
    }
}

export default compose(withRouter, withTranslate)(header)