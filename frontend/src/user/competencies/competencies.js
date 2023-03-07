import { useTranslation } from 'react-multi-lang'
import {useState, useLayoutEffect} from "react"
import Header from "../../components/header/user/header"
import Background from "../../components/background/background"
import './competencies.scss'

export default function Competencies() {
    const [competenciesList, setCompetenciesList] = useState([]);
    const t = useTranslation()

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
        <div id={"competencies"}>
            <div>
                <Background />
            </div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <h1>{t('user.competencies.title')}</h1>
                <div id="competenciesListDiv">
                    {
                        competenciesList.map((data, index) =>
                            <div id={"data"}>
                                <p>{t('user.competencies.competence')} N°{index}</p>
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