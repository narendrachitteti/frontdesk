import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Barcode from 'react-barcode';
 import './patientDetails.css';

function generateUniqueId() {
  return Math.floor(100000 + Math.random() * 900000);
}

function PatientDetails() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [channel, setChannel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = generateUniqueId();

    try {
      const response = await axios.post('http://localhost:5000/addPatient', {
        id,
        name,
        gender,
        age,
        mobile,
        bloodGroup,
        email,
        address,
        city,
        area,
        referredBy,
        channel,
      });
      console.log(response.data);
      window.alert('Patient added successfully');
      fetchPatients();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getPatients');
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBarcodeScan = (barcodeValue) => {
    const patient = patients.find((patient) => patient.id === barcodeValue);
    if (patient) {
    setSelectedPatient(patient);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="form-container12">
      <h1>Hospital Reception System</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Gender:</label> 
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
        <label>Age:</label> 
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label>Mobile:</label>
        <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        <label htmlFor="BlooGroup">Blood Group:</label>
        <select id="Blood Group" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
  <option value="">Select Blood Group</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
</select>                   
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        <label>Area:</label>
        <input type="text" value={area} onChange={(e) => setArea(e.target.value)} required />
        <label>ReferredBy:</label>
        <input type="text" value={referredBy} onChange={(e) => setReferredBy(e.target.value)} required />
        <label>Channel:</label>
        <input type="text" value={channel} onChange={(e) => setChannel(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>

      <div className="patient-list">
        <h2>Patient List</h2>
        <ul>
          {patients.map((patient) => (
            <li key={patient._id}>
              <div className="patient-details">
                <strong className='barcode-tnx-rty'>ID:</strong> {patient.id}<br />
                <strong>Name:</strong> {patient.name}<br />
                <strong>Gender:</strong> {patient.gender}<br />
                <strong>Age:</strong> {patient.age}<br />
                <strong>Mobile:</strong> {patient.mobile}<br />
              </div>
              
              <Barcode value={patient.id} onScan={() => handleBarcodeScan(patient.id)} />   
            </li>
          ))}
        </ul>
      </div>

      {selectedPatient && (
        <div className="selected-patient-form">
          <h2>Selected Patients</h2>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{selectedPatient.name}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{selectedPatient.age}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{selectedPatient.gender}</td>
              </tr>
              <tr>
                <td>Mobile:</td>
                <td>{selectedPatient.mobile}</td>
              </tr>
              <tr>
                <td>existingId:</td>
                <td>{selectedPatient.existingId}</td>
              </tr>
              <tr>
                <td>Blood Group:</td>
                <td>{selectedPatient.bloodGroup}</td>
              </tr>
              <tr>
                <td>email:</td>
                <td>{selectedPatient.email}</td>
              </tr>
              <tr>
                <td>Adress:</td>
                <td>{selectedPatient.address}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td>{selectedPatient.city}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>{selectedPatient.area}</td>
              </tr>
              <tr>
                <td>Referred By:</td>
                <td>{selectedPatient.referredBy}</td>
              </tr>
              <tr>
                <td>Channel:</td>
                <td>{selectedPatient.channel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PatientDetails;
