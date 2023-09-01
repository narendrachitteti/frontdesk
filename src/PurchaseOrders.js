// import React from 'react';
// import{BiSearch} from'react-icons/bi';
// import{GrEdit} from'react-icons/gr'; 
// import{MdDelete} from'react-icons/md';
// import './PurchaseOrder.css'
// const Search = () => {
// }


// function PurchaseOrder() {
//     const  table1=[
//         {
//             id:1,
//             OrderNumber:' 10000',
//             Stockist:'transfer',
//             Date:"28-08-2023",
//             status:'',
//             Edit:'',
//             Delete:''

//         }
//     ]
//   return (
//     <div className='PurchaseOrder-main' style={{backgroundColor:'#ececec'}} >
//     <h2>Purchase Order</h2>
//     <hr style={{backgroundColor:'black',padding:'1px'}}/>
//     <div className='searchBox-main'>
//     <div className=' search-box-tnx' style={{background:'white'}}>
   
//         <input type="text" placeholder='search'  style={{color:'#ececec'}} />
//         <button><BiSearch/></button> 
//     </div>
   
//     <div class="dropdown-table">
//     <table className='table-dropdown'>
//         <thead>
//             <tr>
//                 <th> Order Number  </th>
//                 <th> Stockist</th>
//                 <th> Date</th>
//                 <th> status</th>
//                 <th>Edit</th>
//                 <th>Delete</th>
//             </tr>
//         </thead>
//         <tbody>
//             {table1.map((row)=>(
//                 <tr key={row.id}>
//                     <td>{row.OrderNumber}</td>
//                     <td>{row.Stockist}</td>
//                     <td>{row.Date}</td>
//                     <td>{row.status}
//                      <select>
//                      <option></option>
//                         <option> ongoing</option>
//                         <option>pending</option>
//                         <option> successful</option>
//                         </select></td>
//                     <td>{row.Edit} <GrEdit/></td>
//                     <td>{row.Delete} < MdDelete/></td>
//                     </tr>
//            ) )}
//         </tbody>
//     </table>
//     </div>
//     </div>
//     </div>
  
//   );
// }

// export default PurchaseOrder;
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import './PurchaseOrder.css';

function PurchaseOrder() {
    const [tableData, setTableData] = useState([]);
    const [newOrder, setNewOrder] = useState({
        OrderNumber: '',
        Stockist: '',
        Date: '',
        status: '',
    });

    const fetchData = async () => {
        try {
            const response = await fetch('/api/purchaseOrders');
            const data = await response.json();
            setTableData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const postData = async () => {
        try {
            const response = await fetch('/api/purchaseOrders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newOrder),
            });
            const newData = await response.json();
            setTableData([...tableData, newData]);
            setNewOrder({
                OrderNumber: '',
                Stockist: '',
                Date: '',
                status: '',
            });
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='PurchaseOrder-main' style={{ backgroundColor: '#ececec' }} >
            <h2>Purchase Order</h2>
            <hr style={{ backgroundColor: 'black', padding: '1px' }} />

            <div className='searchBox-main'>
                <div className='search-box-tnx' style={{ background: 'white' }}>
                    <input type="text" placeholder='search' style={{ color: '#ececec' }} />
                    <button><BiSearch /></button>
                </div>

                <div className="dropdown-table">
                    <table className='table-dropdown'>
                        <thead>
                            <tr>
                                <th> Order Number </th>
                                <th> Stockist</th>
                                <th> Date</th>
                                <th> status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row) => (
                                <tr key={row._id}>
                                    <td>{row.OrderNumber}</td>
                                    <td>{row.Stockist}</td>
                                    <td>{row.Date}</td>
                                    <td>
                                        <select value={row.status}>
                                            <option value="">Select Status</option>
                                            <option value="ongoing">Ongoing</option>
                                            <option value="pending">Pending</option>
                                            <option value="successful">Successful</option>
                                        </select>
                                    </td>
                                    <td><GrEdit /></td>
                                    <td><MdDelete /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='new-order-form'>
                <h3>Add New Order</h3>
                <input
                    type="text"
                    placeholder="Order Number"
                    value={newOrder.OrderNumber}
                    onChange={(e) => setNewOrder({ ...newOrder, OrderNumber: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Stockist"
                    value={newOrder.Stockist}
                    onChange={(e) => setNewOrder({ ...newOrder, Stockist: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Date"
                    value={newOrder.Date}
                    onChange={(e) => setNewOrder({ ...newOrder, Date: e.target.value })}
                />
                <select
                    value={newOrder.status}
                    onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
                >
                    <option value="">Select Status</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="pending">Pending</option>
                    <option value="successful">Successful</option>
                </select>
                <button onClick={postData}>Add Order</button>
            </div>
        </div>
    );
}

export default PurchaseOrder;
