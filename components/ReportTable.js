import { hours } from '../data';

export default function ReportTable(props) {
    const { cookieStandList } = props
    const hour_idx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    let total_of_totals = 0
    
    function getRowTotal(arr) {
        let total_sum = 0;
        for (let num of arr) {
            total_sum += num
        }
        // Updates total total for final table entry
        total_of_totals += total_sum
        return total_sum;
    }

    function getColTotal(idx) {
        let total_sum = 0;
        for (let stand of cookieStandList) {
            total_sum += stand.hourly_sales[idx]
        }
        return total_sum
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
                            <td>{getRowTotal(stand.hourly_sales)}</td>
                        </tr>)
                    ))}

                    <tr>
                        <td>Totals</td>
                        {hour_idx.map(idx => (
                            <td key={idx}>{getColTotal(idx)}</td>
                        ))}
                        <td>{total_of_totals}</td>
                    </tr>


                    
                </tbody>
            </table>
        );
    };
}