import {useEffect, useLayoutEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-multi-lang'
import Header from "../../../components/header/admin/header"
import Background from "../../../components/background/background"
import Table from 'react-bootstrap/Table';
import './competencies.scss'

export default function Home() {
    const [competencesList, setCompetencesList] = useState([]);
    const [competenceName, setCompetenceName] = useState('');
    const [competenceLevel, setCompetenceLevel] = useState('');
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

    async function getCompetencies() {
        const response = await fetch("http://localhost:8080/administration/competencies", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setCompetencesList(data.competencies);
    }

    async function addCompetencies() {
        const token = sessionStorage.getItem("token");
        await fetch("http://localhost:8080/administration/competencies", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify({
                name: competenceName,
                level: competenceLevel
            })
        })
    }

    async function delCompetence(data) {
        console.log(data.ID)
        const token = sessionStorage.getItem("token");
        await fetch("http://localhost:8080/administration/competencies", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify({
                id: data._id
            })
        })
        window.location.reload(false);
    }

    useEffect(() => {
        getCompetencies()
    }, [])

    const changeCompetenceName = (event) => {
        setCompetenceName(event.target.value)
    }

    const changeCompetenceLevel = (event) => {
        setCompetenceLevel(event.target.value)
    }

    return (
        <div id={"adminCompetencies"}>
            <div>
                <Background />
            </div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <h1>{t('admin.competencies.title')}</h1>
                <div id={"competenciesDiv"}>
                    <div id="competenciesAdderDiv">
                        <form>
                            <div>
                                <input id="competenceNameInput" type={"text"} placeholder={"competenceName"} onChange={changeCompetenceName} required/>
                            </div>
                            <div>
                                <input id="competenceLevelInput" type={"text"} placeholder={"competenceLevel"} onChange={changeCompetenceLevel} required/>
                            </div>
                            <div>
                                <button onClick={addCompetencies}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div id="competenciesList">
                        <Table id="accountTable">
                            <thead id="tableHead">
                            <tr id="topTable">
                                <th id="valHead1">Name</th>
                                <th id="valHead2">Level</th>
                            </tr>
                            </thead>
                            <tbody id="tableBody">
                                {
                                    competencesList.map((data, index) =>
                                        <tr key={index}>
                                            <td>{data.name}</td>
                                            <td>{data.level}</td>
                                            <td><button onClick={() => delCompetence(data)}>X</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}