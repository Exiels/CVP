import {useState, useLayoutEffect} from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/admin/header"
import CheckLogin from "../../components/login/loginCheck"
import './home.scss'

export default function Home() {
    let navigate = useNavigate()

    useLayoutEffect(() => {
        if (CheckLogin() !== true) {
            navigate("/")
            return;
        }
    })
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <p>Admin Home page</p>
            </div>
        </div>
    )
}