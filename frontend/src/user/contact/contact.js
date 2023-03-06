import { useTranslation } from 'react-multi-lang'
import {useState, useLayoutEffect} from "react"
import Header from "../../components/header/user/header"
import './contact.scss'

export default function Contact() {
    const [contactFirstName, setContactFirstName] = useState('');
    const [contactLastName, setContactLastName] = useState('');
    const [contactAddress, setContactAddress] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const t = useTranslation()

    useLayoutEffect(() => {
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
        getContact()
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <p>{t('user.contact.title')}</p>
                <div id="contactDiv">
                    <p>{contactFirstName} {contactLastName}</p>
                    <p>Address: {contactAddress}</p>
                    <p>Phone Number: {contactPhone}</p>
                    <p>Email: {contactEmail}</p>
                </div>
            </div>
        </div>
    )
}