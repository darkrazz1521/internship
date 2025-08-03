const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  role: String,
  skills: String,
  resume: String,
  status: String
})

const Applicant = mongoose.model('Applicant', applicantSchema)

app.post('/api/applicants', async (req, res) => {
  const applicant = new Applicant(req.body)
  await applicant.save()
  res.json({ success: true })
})

app.get('/api/applicants', async (req, res) => {
  const applicants = await Applicant.find()
  res.json(applicants)
})

app.patch('/api/applicants/:id', async (req, res) => {
  const { status } = req.body
  await Applicant.findByIdAndUpdate(req.params.id, { status })
  res.json({ success: true })
})

app.listen(5000, () => console.log('Server running on port 5000'))
