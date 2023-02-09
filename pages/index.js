import Head from 'next/head';

export default function Home() {
    

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <header className="flex items-center justify-between p-4 bg-green-500 text-black-50">
                <h1 className="text-4xl">Cookie Stand Admin</h1>
            </header>
            <main>
                <form className="w-3/4 p-8 mx-auto my-10 bg-green-300 rounded h-60">
                    
                    <div className="flex-col">
                    <h1 className="pb-4 text-2xl text-center">Create Cookie Stand</h1>

                    <label className="px-2"for="location">Location</label>
                    <input name="location" className="w-5/6"/>
                    </div>

                  <div className="flex justify-between mt-8">
                    
                    <div className="flex-col text-center">
                      <p>Minimum Customers</p>
                      <p>per Hour</p>
                      <input name="min-customers" className="flex-auto pl-1"/>
                    </div>

                    <div className="flex-col text-center">
                      <p>Maximum Customers</p>
                      <p>Per Hour</p>
                      <input name="max-customers" className="flex-auto pl-1"/>
                    </div>

                    <div className="flex-col text-center">
                      <p>Average Cookies</p>
                      <p>per Sale</p>
                      <input name="avg-sales" className="flex-auto pl-1"/>
                    </div>

                    <div>
                      <button className="px-12 py-8 text-black bg-green-500">Create</button>
                    </div>
                  </div>
                </form>
                <p className="text-center">Report Table Coming Soon...</p>
            </main>
            <footer className="fixed bottom-0 w-full p-4 mt-8 bg-green-500">
                <p className="">©2023</p>
            </footer>
        </div>);

}