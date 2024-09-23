import { Donation } from "../../components/donations/donation";
import { Header } from "../../components/header/header";
import { HomeContent } from "../../components/homeContent/homeContent";

export function Home() {


    return (

        <>
            <Header />
            <main id="content">
                <HomeContent/>
                <Donation/>

            </main>
        </>
    )
}