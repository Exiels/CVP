import {useLayoutEffect} from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header/admin/header"
import './jobs.scss'

export default function Home() {
    let navigate = useNavigate()

    useLayoutEffect(() => {
        async function checkLogin() {
            try {
                const token = sessionStorage.getItem("token");
                await fetch("http://localhost:8080/user/checkLogin", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': token
                    }
                }).then((response) => {
                    console.log(response.status)
                    if (response.status !== 200) {
                        console.log("redirect")
                        navigate('/')
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        checkLogin()
    }, [])

    
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <p>Admin jobs page</p>
            </div>
        </div>
    )
}