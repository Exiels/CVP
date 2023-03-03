import {useEffect, useLayoutEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header/admin/header"
import Table from 'react-bootstrap/Table';
import './competencies.scss'

export default function Jobs() {
    const [jobsList, setJobsList] = useState([]);
    const [jobName, setJobName] = useState('');
    const [jobLevel, setJobLevel] = useState('');
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

    async function getJobs() {
        const response = await fetch("http://localhost:8080/administration/jobs", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setJobsList(data.jobs);
    }

    async function addJob() {
        const token = sessionStorage.getItem("token");
        await fetch("http://localhost:8080/administration/jobs", {
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

    async function delJob(data) {
        const token = sessionStorage.getItem("token");
        await fetch("http://localhost:8080/administration/jobs", {
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
        getJobs()
    }, [])

    const changeJobName = (event) => {
        setJobName(event.target.value)
    }

    const changeJobLevel = (event) => {
        setJobLevel(event.target.value)
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <p>Admin Jobs page</p>
                <div id={"jobsDiv"}>
                    <div id="jobsAdderDiv">
                        <form>
                            <div>
                                <input id="jobsNameInput" type={"text"} placeholder={"jobsName"} onChange={changeJobName} required/>
                            </div>
                            <div>
                                <input id="jobsLevelInput" type={"text"} placeholder={"jobsLevel"} onChange={changeJobLevel} required/>
                            </div>
                            <div>
                                <button onClick={addJob}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div id="jobsList">
                        <Table id="accountTable">
                            <thead id="tableHead">
                            <tr id="topTable">
                                <th id="valHead1">Name</th>
                                <th id="valHead2">Level</th>
                            </tr>
                            </thead>
                            <tbody id="tableBody">
                                {
                                    jobsList.map((data, index) =>
                                        <tr key={index}>
                                            <td>{data.name}</td>
                                            <td>{data.level}</td>
                                            <td><button onClick={() => delJob(data)}>X</button></td>
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