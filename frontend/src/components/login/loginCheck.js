import { useNavigate } from "react-router-dom"

export default function CheckLogin() {
    const checkLoginURL = "http://localhost:8080/user/checkLogin"

    const token = sessionStorage.getItem("token");
    const checkLoginBackend = async () => {
        await fetch(checkLoginURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        })
        .then((response) => {
            if (response.status !== 200)
                return false;
        })
    }
    checkLoginBackend();
}