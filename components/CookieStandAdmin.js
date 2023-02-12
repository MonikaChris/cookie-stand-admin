import Head from 'next/head';
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer'
import { useState } from 'react';

export default function CookieStandAdmin() {
    const [stands, addStand] = useState([]);
    
    function createStand() {
        console.log(`state: ${state}`)
        const stand = {
            location: 'Calexico',
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
            id: stands.length + 1
        };
        
        addStand([...stands, stand]);
    }
    
    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <main>
                <CreateForm createStand={createStand}/>
                <ReportTable cookieStandList={stands}/>
            </main>
            <Footer />

        </>

    );
}