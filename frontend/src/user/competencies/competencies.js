import {useState, useLayoutEffect} from "react"
import Header from "../../components/header/user/header"
import './competencies.scss'

export default function Competencies() {
    const [competenciesList, setCompetenciesList] = useState([]);

    useLayoutEffect(() => {
        async function getCompetencies() {
            try {
                const response = await fetch("http://localhost:8080/administration/competencies", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json();
                setCompetenciesList(data.competencies)
            } catch (error) {
                console.log(error)
            }
        }
        getCompetencies()
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <p>Competencies page</p>
                <div id="competenciesListDiv">
                    {
                        competenciesList.map((data, index) =>
                            <div id={"data_" + index}>
                                <p>Competence N°{index}</p>
                                <p id="name">{data.name}</p>
                                <p id="level" >{data.level}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}