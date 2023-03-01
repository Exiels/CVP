import {useState} from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header/admin/header"
import './competencies.scss'

export default function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <p>Admin Competencies page</p>
            </div>
        </div>
    )
}