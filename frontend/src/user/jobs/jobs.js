import {useState, useLayoutEffect} from "react"
import Header from "../../components/header/user/header"
import './jobs.scss'

export default function Jobs() {
    const [jobsList, setJobsList] = useState([]);

    useLayoutEffect(() => {
        async function getJobs() {
            try {
                const response = await fetch("http://localhost:8080/administration/jobs", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json();
                setJobsList(data.jobs)
            } catch (error) {
                console.log(error)
            }
        }
        getJobs()
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <p>Jobs page</p>
                <div id="jobsListDiv">
                    {
                        jobsList.map((data, index) =>
                            <div id={"data_" + index}>
                                <p>Job N°{index}</p>
                                <h3 id="position" >{data.position}</h3>
                                <p id="startDate">{data.startDate}</p>
                                <p id="endDate" >{data.endDate}</p>
                                <p id="position" >{data.position}</p>
                                <p id="company" >{data.company}</p>
                                <p id="address" >{data.address}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}