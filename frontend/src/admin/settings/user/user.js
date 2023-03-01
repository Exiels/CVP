import {useState} from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header/admin/header"
import './user.scss'

export default function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <p>Admin User page</p>
            </div>
        </div>
    )
}