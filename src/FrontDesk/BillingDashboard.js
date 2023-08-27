import React, { useState } from 'react';
import './BillingDashboard.css';
import { AiOutlineSearch } from "react-icons/ai";

function BillingDashboard() {
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
          <label>Total sales</label>
          <p>{totalSales}</p>
        </div>
        <div className="card">
          <label>Total Bill</label>
          <p>{totalBill}</p>
        </div>
        <div className="card">
          <label>Total collect</label>
          <p>{totalCollect}</p>
        </div>
        <div className="card">
          <label>Collect by cash</label>
          <p>{collectByCash}</p>
        </div>
        <div className="card">
          <label>Collect by card</label>
          <p>{collectByCard}</p>
        </div>
        <div className="card">
          <label>Others</label>
          <p>{others}</p>
        </div>
      </div>
      <div className="card-container2">
        <div className="card2">
          <h4 className="card-heading">Statistics</h4>
          <div className="card-content">
            <div className="statistic">
              <label>Total Medicines</label>
              <p>120</p>
            </div>
            <div className="statistic">
              <label>Total Manufacturers</label>
              <p>15</p>
            </div>
            <div className="statistic">
              <label>Current Inventory cost</label>
              <p>₹25000</p>
            </div>
            <div className="statistic">
              <label>Current Inventory MRP</label>
              <p>₹30000</p>
            </div>
            <div className="statistic">
              <label>In stock Inventory Quantity</label>
              <p>700</p>
            </div>
            
            <div className="statistic">
              <label>Medicine out of stock</label>
              <p>5</p>
            </div>
          </div>
        </div>
        <div className="card2">
          <h4 className="card-heading">Latest Sales</h4>
          <div className="card-content">
            
            <div className="sales-pagination">
            <input type='text' placeholder='Search'/><AiOutlineSearch/>
            </div>
            <div className='table-container'>
            <table className="sales-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Time</th>
                  <th>Sales</th>
                  <th>Return</th>
                  <th>Paid</th>
                  <th>Balance</th>
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
        <div className="card2">
          <h4 className="card-heading">Fast Moving product</h4>
          <div className="card-content">
            
            <div className="sales-pagination">
            <input type='text' placeholder='Search'/><AiOutlineSearch/>
            </div>
            <table className="sales-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Sold Qty</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table><br/>
            <span>No data available in table</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingDashboard;
