import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function CreateForm({ createStand }) {
    const { user } = useAuth();
    const { createResource } = useResource();
    
    function handleSubmit(e){
        e.preventDefault();
        const info = {
          location: e.target.location.value,
          minimum_customers_per_hour: parseInt(e.target.minCustomers.value),
          maximum_customers_per_hour: parseInt(e.target.maxCustomers.value),
          average_cookies_per_sale: parseFloat(e.target.avgCookies.value),
          owner: user.id,
      };
        createResource(info);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="w-3/4 p-8 mx-auto my-10 bg-green-300 rounded h-60">
                    
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