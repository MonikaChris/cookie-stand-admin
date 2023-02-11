export default function CreateForm({ createStandHandler }) {
    return (
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
                      <input name="minCustomers" className="flex-auto pl-1"/>
                    </div>

                    <div className="flex-col text-center">
                      <p>Maximum Customers</p>
                      <p>Per Hour</p>
                      <input name="maxCustomers" className="flex-auto pl-1"/>
                    </div>

                    <div className="flex-col text-center">
                      <p>Average Cookies</p>
                      <p>per Sale</p>
                      <input name="avgCookies" className="flex-auto pl-1"/>
                    </div>

                    <div>
                      <button className="px-12 py-8 text-black bg-green-500">Create</button>
                    </div>
                  </div>
                </form>
    );
}