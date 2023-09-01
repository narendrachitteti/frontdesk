const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/Narendra', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

let lastAssignedId = 1;

const patientSchema = new mongoose.Schema({
    id:String,
    name: String,
    gender:String,
    age:Number,
    mobile:Number,
    bloodGroup:String,
    email:String,
    address:String,
    city:String,
    area:String,
    referredBy:String,
    channel:String,
});

const Patient = mongoose.model('Patient', patientSchema);

app.post('/addPatient', async (req, res) => {
  try {
    lastAssignedId++;
    const formattedNumber = lastAssignedId.toString().padStart(4, '0'); // Format the number with leading zeros
    const newPatient = new Patient({
      id: `JC${formattedNumber}`,
    name: req.body.name,
    gender:req.body.gender,
    age:req.body.age,
    mobile:req.body.mobile,
    bloodGroup:req.body.bloodGroup,
    email:req.body.email,
    address:req.body.address,
    city:req.body.city,
    area:req.body.area,
    referredBy:req.body.referredBy,
    channel:req.body.channel,
    });

    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add patient' });
  }
});

app.get('/getPatients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});