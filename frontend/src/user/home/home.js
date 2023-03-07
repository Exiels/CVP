import { useTranslation } from 'react-multi-lang'
import Header from "../../components/header/user/header"
import Background from "../../components/background/background"
import "@fontsource/poppins";
import './home.scss'

export default function Home() {
    const t = useTranslation()
    return (
        <div id={"home"}>
            <div>
                <Background />
            </div>
            <div>
                <Header />
            </div>
            <div id={"mainDiv"}>
                <h1>{t('user.home.title')}</h1>
            </div>
        </div>
    )
}