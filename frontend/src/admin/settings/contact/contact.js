import {useEffect, useLayoutEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header/admin/header"
import './contact.scss'

export default function Contact() {
    const [contactFirstName, setContactFirstName] = useState('');
    const [contactLastName, setContactLastName] = useState('');
    const [contactAddress, setContactAddress] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
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

    async function getContact() {
        const response = await fetch("http://localhost:8080/administration/contact", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setContactFirstName(data.contact.firstName);
        setContactLastName(data.contact.lastName);
        setContactAddress(data.contact.address);
        setContactPhone(data.contact.phone);
        setContactEmail(data.contact.email);
    }

    async function patchContact() {
        const token = sessionStorage.getItem("token");
        await fetch("http://localhost:8080/administration/contact", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify({
                firstName: contactFirstName,
                lastName: contactLastName,
                address: contactAddress,
                phone: contactPhone,
                email: contactEmail
            })
        })
    }

    useEffect(() => {
        getContact()
    }, [])

    const changeContactFirstName = (event) => {
        setContactFirstName(event.target.value)
    }

    const changeContactLastName = (event) => {
        setContactLastName(event.target.value)
    }

    const changeContactAddress = (event) => {
        setContactAddress(event.target.value)
    }

    const changeContactPhone = (event) => {
        setContactPhone(event.target.value)
    }

    const changeContactEmail = (event) => {
        setContactEmail(event.target.value)
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <p>Admin Contact page</p>
                <div id={"jobsDiv"}>
                    <div id="jobsAdderDiv">
                        <form>
                            <div>
                                <label for="jobStartDateInput">First Name: </label>
                                <input id="contactFirstNameInput" type={"text"} placeholder={"contactFirstName"} value={contactFirstName} onChange={changeContactFirstName} required/>
                            </div>
                            <div>
                                <label for="jobStartDateInput">Last Name: </label>
                                <input id="contactLastNameInput" type={"text"} placeholder={"contactLastName"} value={contactLastName} onChange={changeContactLastName} required/>
                            </div>
                            <div>
                                <label for="jobStartDateInput">Address: </label>
                                <input id="contactAddressInput" type={"text"} placeholder={"contactAddress"} value={contactAddress} onChange={changeContactAddress} required/>
                            </div>
                            <div>
                                <label for="jobStartDateInput">Phone: </label>
                                <input id="contactPhoneInput" type={"text"} placeholder={"contactPhone"} value={contactPhone} onChange={changeContactPhone} required/>
                            </div>
                            <div>
                                <label for="jobStartDateInput">Email: </label>
                                <input id="contactEmailInput" type={"text"} placeholder={"contactEmail"} value={contactEmail} onChange={changeContactEmail} required/>
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