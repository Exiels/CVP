import { useTranslation } from 'react-multi-lang'
import {useEffect, useLayoutEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header/admin/header"
import Background from "../../../components/background/background"
import './user.scss'

export default function User() {
    const [userUsername, setUserUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    let navigate = useNavigate()
    const t = useTranslation()

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

    async function getContact() {
        const response = await fetch("http://localhost:8080/administration/user", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setUserUsername(data.user.username);
    }

    async function patchContact() {
        const token = sessionStorage.getItem("token");
        await fetch("http://localhost:8080/administration/user", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify({
                username: userUsername,
                password: userPassword
            })
        })
    }

    useEffect(() => {
        getContact()
    }, [])

    const changeUserUsername = (event) => {
        setUserUsername(event.target.value)
    }

    const changerUserPassword = (event) => {
        setUserPassword(event.target.value)
    }

    return (
        <div id={"adminUser"}>
            <div>
                <Background />
            </div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <h1>{t('admin.user.title')}</h1>
                <div id={"jobsDiv"}>
                    <div id="jobsAdderDiv">
                        <form>
                            <div>
                                <label for="userUsernameInput">Username: </label>
                                <input id="userUsernameInput" type={"text"} placeholder={"userUsername"} value={userUsername} onChange={changeUserUsername} required/>
                            </div>
                            <div>
                                <label for="userPasswordInput">Password: </label>
                                <input id="userPasswordInput" type={"password"} placeholder={"userPassword"} value={userPassword} onChange={changerUserPassword} required/>
                            </div>
                            <div>
                                <button onClick={patchContact}>
                                    Modify
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}