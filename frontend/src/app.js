import './app.scss';
import { Route, Routes } from 'react-router-dom';
import Home from "./user/home/home";
import Competencies from "./user/competencies/competencies";
import Contact from "./user/contact/contact";
import Jobs from "./user/jobs/jobs";
import Projects from "./user/projects/projects";

import Login from "./admin/login/login"
import AdminHome from "./admin/home/home"
import AdminSettingCompetencies from "./admin/settings/competencies/competencies"
import AdminSettingContact from "./admin/settings/contact/contact"
import AdminSettingJobs from "./admin/settings/jobs/jobs"
import AdminSettinguser from "./admin/settings/user/user"

function app() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/competencies" element={<Competencies/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/projects" element={<Projects/>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/admin" element={<AdminHome/>}/>
            <Route path="/admin/settings/competencies" element={<AdminSettingCompetencies/>}/>
            <Route path="/admin/settings/contact" element={<AdminSettingContact/>}/>
            <Route path="/admin/settings/jobs" element={<AdminSettingJobs/>}/>
            <Route path="/admin/settings/user" element={<AdminSettinguser/>}/>
        </Routes>
    );
}

export default app;
