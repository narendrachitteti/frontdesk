import React from 'react';
import './App.css';
import PatientBilling from './FrontDesk/PatientBilling';
import Barcode from './FrontDesk/PatientDetails';
import PatientDetails from './FrontDesk/PatientDetails';

import PurchaseOrder from './PurchaseOrders';
import PharmacyBilling from './PharmacyBilling';

function App() {
  return (
    <div >
    <PharmacyBilling/>
    </div>
  );
}

export default App;
