import './app.scss';
import { Route, Routes } from 'react-router-dom';
import Home from "./user/home/home";
import Login from "./admin/login/login"

function app() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default app;

