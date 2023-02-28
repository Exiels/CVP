import {useState} from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/header"
import './home.scss'

export default function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <p>Home page</p>
            </div>
        </div>
    )
}