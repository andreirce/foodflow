import { Header } from "../../components/header/header";
import { HomeContent } from "../../components/homeContent/homeContent";

export function Home() {


    return (

        <>
            <Header />
            <main id="content">
                <HomeContent/>

            </main>
        </>
    )
}