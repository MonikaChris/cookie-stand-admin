import Head from 'next/head';
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer'
import { useState } from 'react';
//import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function CookieStandAdmin() {
    //const { user } = useAuth();
    // const { createResource } = useResource();
    // const [stands, addStand] = useState([]);

    // console.log(`stands: ${JSON.stringify(stands)}`)
    
    // function createStand(info) {
    //     // const stand = {
    //     //     location: 'Calexico',
    //     //     hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    //     //     id: stands.length + 1
    //     // };
    //     // addStand([...stands, stand]);

    //     createResource(info);
    //     addStand([...stands, info]);
    //     console.log(`stands: ${JSON.stringify(stands)}`)
        
    // }

    const { resources, deleteResource } = useResource();

    console.log(`resources: ${JSON.stringify(resources)}`)
    
    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <main>
                <CreateForm />
                <ReportTable cookieStandList={resources || []} deleteStand={deleteResource}/>
            </main>
            <Footer standNum={resources ? resources.length : 0}/>

        </>

    );
}