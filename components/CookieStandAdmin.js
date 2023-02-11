import Head from 'next/head';
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer'
import { useState } from 'react';

export default function CookieStandAdmin() {
    // const [cookieStand, createCookieStand] = useState('');

    // function createStandHandler(e) {
    //     e.preventDefault();
    //     console.log(`target: ${e.target.location.value}`)
    //     const new_stand = {"location": e.target.location.value, "minCustomers": e.target.minCustomers.value, "maxCustomers": e.target.maxCustomers.value, "avgCookies": e.target.avgCookies.value};
    //     createCookieStand(JSON.stringify(new_stand));
    // }
    
    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <main>
                <CreateForm />
                <ReportTable />
            </main>
            <Footer />

        </>

    );
}