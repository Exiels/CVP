import { useTranslation } from 'react-multi-lang'
import Header from "../../components/header/user/header"
import Background from "../../components/background/background"
import './home.scss'

export default function Home() {
    const t = useTranslation()
    return (
        <div>
            <div>
                <Background />
            </div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <p>{t('user.home.title')}</p>
            </div>
        </div>
    )
}