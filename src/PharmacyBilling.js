
// import React, { useState } from 'react';
// import './PharmacyBilling.css';

// function PharmacyBilling() {
//   const [fromDate, setFromDate] = useState('');
//   const [medicineName, setMedicineName] = useState('');
//   const [batch, setBatch] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [sales, setSales] = useState([]);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cash');
//   const [gst, setGst] = useState(0);
//   const [netAmount, setNetAmount] = useState(0);
//   const [roundOff, setRoundOff] = useState(0);
//   const [billAmount, setBillAmount] = useState(0);
//   const [paidAmount, setPaidAmount] = useState(0);
//   const [reference, setReference] = useState('');

//   const handleAddClick = () => {
//     const newSale = {
//       medicineName,
//       batch,
//       price,
//       quantity,
//       discount,
//     };

//     setSales([...sales, newSale]);
//     setMedicineName('');
//     setBatch('');
//     setPrice('');
//     setQuantity('');
//     setDiscount('');
//   };
//   const handleSaveClick = () => {
    
//   };

//   const handleSaveAndPrintClick = () => {
    
//   };

//   return (
//     <div className="Pharma">
//       <h3 className='date23'>Pharmacy Billing</h3>
//       <div>
//         <div className='bill123'>
//           <label>Bill Date:</label>
//           <input className='billdate' type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
//           <button>Clear Bill</button>
//           <button>Print prev bill</button>
//         </div><br/>
//         <div className="card-container22">
//           <div className="card22">
//             <label>Patient name *</label>
//             <input type='text' />
//             <label>Gender</label>
//             <select>
//               <option>Select gender</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Others</option>
//             </select>
//             <label>Phone</label>
//             <input type='number' />
//             <label>Email</label>
//             <input type='email' />
//             <label>Referred Doctor</label>
//             <input type='text' />
//           </div>
//         </div>
//       </div><br/><br/>
//       <div className="card-container23">
//         <div className="card23">
//           <div className="input-group">
            
//             <input
//               type='text'
//               placeholder='Medicine Name'
//               value={medicineName}
//               onChange={(e) => setMedicineName(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
            
//             <select value={batch} onChange={(e) => setBatch(e.target.value)}>
//               <option>....</option>
//               <option>PHM132</option>
//               <option>PHM767</option>
//               <option>PHM908</option>
//               <option>PHM543</option>
//             </select>
//           </div>
//           <div className="input-group">
            
//             <input
//               type='text'
//               placeholder='Price'
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
            
//             <input
//               type='text'
//               placeholder='Quantity'
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
            
//             <input
//               type='text'
//               placeholder='total'
//               value={discount}
//               onChange={(e) => setDiscount(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
            
//             <input
//               type='text'
//               placeholder='Discount'
//               value={discount}
//               onChange={(e) => setDiscount(e.target.value)}
//             />
//           </div>
//           <div className="input-group"> 
//             <input
//               type='text'
//               placeholder='Amount'
//               value={discount}
//               onChange={(e) => setDiscount(e.target.value)}
//             />
//           </div>
//           <button className='button43' onClick={handleAddClick}>Add</button>
//         </div>
//         <table className="sales-table23">
//           <thead>
//             <tr>
//               <th>Medicine Name</th>
//               <th>Batch</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//               <th>Disc.%</th>
//               <th>Amount</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sales.map((sale, index) => (
//               <tr key={index}>
//                 <td>{sale.medicineName}</td>
//                 <td>{sale.batch}</td>
//                 <td>{sale.price}</td>
//                 <td>{sale.quantity}</td>
//                 <td>{sale.total}</td>
//                 <td>{sale.discount}</td>
//                 <td>{sale.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="form-container">
//         <div className="form-section">
//           <label>Discount %</label>
//           <input
//             type="text"
//             placeholder="Discount"
//             value={discount}
//             onChange={(e) => setDiscount(e.target.value)}
//           />
//           <label>GST</label>
//           <input
//             type="text"
//             value={gst}
//             onChange={(e) => setGst(e.target.value)}
//           />
//           <label>Net</label>
//           <input
//             type="text"
//             value={netAmount}
//             onChange={(e) => setNetAmount(e.target.value)}
//           />
//           <label>Round Off</label>
//           <input
//             type="text"
//             value={roundOff}
//             onChange={(e) => setRoundOff(e.target.value)}
//           />
//           <label>Bill Amount</label>
//           <input
//             type="text"
//             value={billAmount}
//             onChange={(e) => setBillAmount(e.target.value)}
//           />
//           <label>Paid Amount</label>
//           <input
//             type="text"
//             value={paidAmount}
//             onChange={(e) => setPaidAmount(e.target.value)}
//           />
//           <label>Payment Method</label>
//           <select
//             value={selectedPaymentMethod}
//             onChange={(e) => setSelectedPaymentMethod(e.target.value)}
//           >
//             <option value="cash">Cash</option>
//             <option value="wallet">Wallet</option>
//             <option value="online">Online</option>
//           </select>
//           <label>Reference</label>
//           <input
//             type="text"
//             value={reference}
//             onChange={(e) => setReference(e.target.value)}
//           />
//           <button onClick={handleSaveClick}>Save</button><br/>
//           <button onClick={handleSaveAndPrintClick}>Save & Print</button>
//         </div>
//         </div>
//         </div>
//   );
// }

// export default PharmacyBilling;
// PharmacyBilling.js

import React, { useState } from 'react';
import './PharmacyBilling.css';

function PharmacyBilling() {
  const [fromDate, setFromDate] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [batch, setBatch] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [discount, setDiscount] = useState('');
  const [sales, setSales] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cash');
  const [gst, setGst] = useState(0);
  const [netAmount, setNetAmount] = useState(0);
  const [roundOff, setRoundOff] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [reference, setReference] = useState('');

  const handleAddClick = () => {
    const newSale = {
      medicineName,
      batch,
      price,
      quantity,
      discount,
    };

    setSales([...sales, newSale]);
    setMedicineName('');
    setBatch('');
    setPrice('');
    setQuantity('');
    setDiscount('');
  };
  
  const handleSaveClick = () => {
    
  };

  const handleSaveAndPrintClick = () => {
    
  };

  return (
    <div className="PharmacyBilling">
      <h3>Pharmacy Billing</h3>
      <div className="bill-container">
        <div className="bill-details">
          <label>Bill Date:</label>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </div>
        <div className="bill-buttons">
          <button>Clear Bill</button>
          <button>Print prev bill</button>
        </div>
      </div>
      <div className="patient-info">
        <div className="card">
          <label>Patient name *</label>
          <input type='text' />
          <label>Gender</label>
          <select>
            <option>Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
          <label>Phone</label>
          <input type='number' />
          <label>Email</label>
          <input type='email' />
          <label>Referred Doctor</label>
          <input type='text' />
        </div>
      </div>
      <div className="main-form">
        <div className="input-form">
          <div className="input-group">
            <label>Medicine Name</label>
            <input
              type='text'
              placeholder='Medicine Name'
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Batch</label>
            <select value={batch} onChange={(e) => setBatch(e.target.value)}>
              <option>....</option>
              <option>PHM132</option>
              <option>PHM767</option>
              <option>PHM908</option>
              <option>PHM543</option>
            </select>
          </div>
          <div className="input-group">
            <label>Price</label>
            <input
              type='text'
              placeholder='Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Quantity</label>
            <input
              type='text'
              placeholder='Quantity'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Total</label>
            <input
              type='text'
              placeholder='total'
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Discount</label>
            <input
              type='text'
              placeholder='Discount'
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Amount</label>
            <input
              type='text'
              placeholder='Amount'
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <button className='add-button' onClick={handleAddClick}>Add</button>
        </div>
        <table className="sales-table">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Batch</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Discount</th>
              <th>Amount</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index}>
                <td>{sale.medicineName}</td>
                <td>{sale.batch}</td>
                <td>{sale.price}</td>
                <td>{sale.quantity}</td>
                <td>{sale.total}</td>
                <td>{sale.discount}</td>
                <td>{sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="additional-form">
        <div className="additional-form-section">
          <label>Discount %</label>
          <input
            type="text"
            placeholder="Discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <label>GST</label>
          <input
            type="text"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
          />
          <label>Net</label>
          <input
            type="text"
            value={netAmount}
            onChange={(e) => setNetAmount(e.target.value)}
          />
          <label>Round Off</label>
          <input
            type="text"
            value={roundOff}
            onChange={(e) => setRoundOff(e.target.value)}
          />
          <label>Bill Amount</label>
          <input
            type="text"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
          <label>Paid Amount</label>
          <input
            type="text"
            value={paidAmount}
            onChange={(e) => setPaidAmount(e.target.value)}
          />
          <label>Payment Method</label>
          <select
            value={selectedPaymentMethod}
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
          >
            <option value="cash">Cash</option>
            <option value="wallet">Wallet</option>
            <option value="online">Online</option>
          </select>
          <label>Reference</label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleSaveAndPrintClick}>Save & Print</button>
        </div>
      </div>
    </div>
  );
}

export default PharmacyBilling;
