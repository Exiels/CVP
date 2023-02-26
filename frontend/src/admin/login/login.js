import {useState} from "react"
import { useNavigate } from "react-router-dom"
import './login.scss'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    let [remember, setRemember] = useState('false')
    const loginURL = "http://localhost:8080/user/login"
    let navigate = useNavigate()

    //post request to get token
    const handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                console.log(data)
                if (remember)
                    localStorage.setItem("token", data.token)
                sessionStorage.setItem("token", data.token)
                navigate('/admin/home')
            } else {
                setMessage("Error: " + data.message)
            }
        }).catch(err => {
            setMessage("Error: " + err)
        })
    }

    // update password value
    const changepassword = (event) => {
        setPassword(event.target.value)
    }

    // update username
    const changeusername = (event) => {
        setUsername(event.target.value)
    }

    const changeRemember = (event) => {
        setRemember(event.target.value)
    }

    return (
        <div className="loginPage">
            <div id={"loginDiv"}>
                <div id={"loginForm"}>
                    <form>
                        <div>
                            <input id="userInput" type={"text"} placeholder={"username"} onChange={changeusername} required/>
                        </div>
                        <div>
                            <input id="passInput" type={"password"} placeholder={"********"} onChange={changepassword} required/>
                        </div>
                    </form>
                </div>
                <div>
                    <label id="rememberLabel">
                        <input id="rememberCheckbox" type="checkbox" onChange={changeRemember} /> Remember me
                    </label>
                </div>
                <div>
                    <button onClick={handleSubmit} type={"submit"} id={"loginButton"}>Login</button>
                </div>
                <div>
                    <p id="errorMessage">{message}</p>
                </div>
            </div>
        </div>
    )
}
