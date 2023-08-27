import React, { useState } from 'react';
import './AllBills.css';

function AllBills() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [totalSales, setTotalSales] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [totalCollect, setTotalCollect] = useState(0);
  const [collectByCash, setCollectByCash] = useState(0);
  const [collectByCard, setCollectByCard] = useState(0);
  const [others, setOthers] = useState(0);

  const handleGoClick = () => {
    
    setTotalSales(15000);
    setTotalBill(12000);
    setTotalCollect(14000);
    setCollectByCash(9000);
    setCollectByCard(5000);
    setOthers(1000);
  };

  return (
    <div className="App">
        <h3 className='date2'>Date Range</h3>
      <div className="date-container">
        
        <label>From: </label>
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        <label>To:</label>
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        <button onClick={handleGoClick}>Go</button>
      </div>
      <hr/>
      <div className="card-container">
        <div className="card">
          <label>Total Billed</label>
          <p>{totalSales}</p>
        </div>
        <div className="card">
          <label>Collected By Cash</label>
          <p>{totalBill}</p>
        </div>
        <div className="card">
          <label>Collected by Card</label>
          <p>{totalCollect}</p>
        </div>
        <div className="card">
          <label>Collect by Others</label>
          <p>{collectByCash}</p>
        </div>
        <div className="card">
          <label>Return by Cash</label>
          <p>{collectByCard}</p>
        </div>
        <div className="card">
          <label>Return by Card</label>
          <p>{others}</p>
        </div>
        <div className="card">
          <label>Return by others</label>
          <p>{others}</p>
        </div>
      </div>
      <div className="card-container2">
        <div className="card2">
          <h4 className="card-heading">Latest Sales</h4>
          <div className="card-content">
            
            <div className="sales-pagination">
            <input type='text' placeholder='Search'/>
            </div>
            <div className='table-container'>
            <table className="sales-table">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Total Amount</th>
                  <th>Paid Amount</th>
                  <th>Balance</th>
                  <th>Collection</th>
                  <th>Print</th>
                  <th>Return</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
            </div>
            <br/>
            <span>No data available in table</span>
            </div>
        
        </div>
    
      </div>
    </div>
  );
}

export default AllBills;
