import Header from "../../components/header/user/header"
import './projects.scss'

export default function Home() {
    const [projectsList, setProjectsList] = useState([]);

    useLayoutEffect(() => {
        async function getProjects() {
            try {
                const response = await fetch("http://localhost:8080/admin/github", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json();
                setProjectsList(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProjects()
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <p>Projects page</p>
                <div id="projectListDiv">
                    {
                        projectsList.map((data, index) =>
                            <div id={"data_" + index}>
                                <a href={data.html_url} title={data.name} id="title"></a>
                                <p id="description">data.description</p>
                                <p id="language" >data.language</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}