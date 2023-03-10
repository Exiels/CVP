import {useEffect, useLayoutEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header/admin/header"
import Table from 'react-bootstrap/Table';
import './jobs.scss'

export default function Jobs() {
    const [jobsList, setJobsList] = useState([]);
    const [jobStartDate, setJobStartDate] = useState('');
    const [jobEndDate, setJobEndDate] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [jobCompany, setJobCompany] = useState('');
    const [jobAddress, setJobAddress] = useState('');
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
                startDate: jobStartDate,
                endDate: jobEndDate,
                position: jobPosition,
                company: jobCompany,
                address: jobAddress
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

    const changeJobStartDate = (event) => {
        setJobStartDate(event.target.value)
    }

    const changeJobEndDate = (event) => {
        setJobEndDate(event.target.value)
    }

    const changeJobPosition = (event) => {
        setJobPosition(event.target.value)
    }

    const changeJobCompany = (event) => {
        setJobCompany(event.target.value)
    }

    const changeJobAddress = (event) => {
        setJobAddress(event.target.value)
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
                                <label for="jobStartDateInput">Start date: </label>
                                <input id="jobStartDateInput" type={"date"} placeholder={"jobStartDate"} onChange={changeJobStartDate} required/>
                            </div>
                            <div>
                                <label for="jobEndDateInput">End date: </label>
                                <input id="jobEndDateInput" type={"date"} placeholder={"jobEndDate"} onChange={changeJobEndDate} required/>
                            </div>
                            <div>
                                <input id="jobPositionInput" type={"text"} placeholder={"jobPosition"} onChange={changeJobPosition} required/>
                            </div>
                            <div>
                                <input id="jobCompanyInput" type={"text"} placeholder={"jobCompany"} onChange={changeJobCompany} required/>
                            </div>
                            <div>
                                <input id="jobAddressInput" type={"text"} placeholder={"jobAddress"} onChange={changeJobAddress} required/>
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
                                <th id="valHead1">StartDate</th>
                                <th id="valHead2">EndDate</th>
                                <th id="valHead3">Position</th>
                                <th id="valHead4">Company</th>
                                <th id="valHead5">Address</th>
                            </tr>
                            </thead>
                            <tbody id="tableBody">
                                {
                                    jobsList.map((data, index) =>
                                        <tr key={index}>
                                            <td>{data.startDate}</td>
                                            <td>{data.endDate}</td>
                                            <td>{data.position}</td>
                                            <td>{data.company}</td>
                                            <td>{data.address}</td>
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