import { hours } from '../data';

export default function ReportTable(props) {
    const { cookieStandList } = props
    
    function getTotal(arr) {
        let total_sum = 0;
        for (let num of arr) {
            total_sum += num
        }
        return total_sum;
    }
    
    if (cookieStandList.length === 0) {
        return (
            <h2 className="w-1/2 mx-auto my-8 text-4xl text-center">No Cookie Stands Available</h2>
        );
    } else {
        return (
            <table className="w-1/2 mx-auto my-4 border">
                <thead>
                    <tr>
                        <th className="border border-black">Location</th>
                        {hours.map(item => (
                            <th key={item}>{item}</th>
                        ))}
                        <th className="border border-black">Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {cookieStandList.map(stand => (
                        (<tr key={stand.id}>
                            <td>{stand.location}</td>
                            {stand.hourly_sales.map( hour => (
                                <td key={hour}>{hour}</td>
                            ))}
                            <td>{getTotal(stand.hourly_sales)}</td>
                        </tr>)
                    ))}
                    
                </tbody>
            </table>
        );
    };
}