import {useLayoutEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-multi-lang'
import Header from "../../components/header/admin/header"
import Background from "../../components/background/background"
import './home.scss'

export default function Home() {
    const t = useTranslation()
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
                <Background />
            </div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <p>{t('admin.home.title')}</p>
            </div>
        </div>
    )
}