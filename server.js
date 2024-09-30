const express = require('express')
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv')

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
    //Testing connection is not successful
    if(err) {
        return console.log("Error connecting to the database: ", err)
    }

  // Testing connection is successful
    console.log("Successfully connected to MySQL: ", db.threadId)
})

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Question 1 goes here

app.get('',(req,res) => {
  const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
  db.query(getPatients, (err,data) =>{
    // if I have an error
    if(err){
      return res.status(400).send("Failed to fetch patients information" )
    }
    // res.status(200).render('data', { data })
    res.status(200).send(data)
           
  })
})

// Question 2 goes here

app.get('',(req,res) => {
  const getProviders = "SELECT first_name, last_name, provider_specialty FROM providers"
  db.query(getProviders, (err,data) =>{
    // if I have an error
    if(err){
      return res.status(400).send("Failed to fetch providers information" )
    }
    // res.status(200).render('data', { data })
    res.status(200).send(data)
           
  })
})

// Question 3 goes here

app.get('',(req,res) => {
  const getPatients = "SELECT first_name FROM patients"
  db.query(getPatients, (err,data) =>{
    // if I have an error
    if(err){
      return res.status(400).send("Failed to fetch patients information" )
    }
    // res.status(200).render('data', { data })
    res.status(200).send(data)
           
  })
})

// Question 4 goes here

app.get('',(req,res) => {
  const getProviders = "SELECT provider_specialty FROM providers"
  db.query(getProviders, (err,data) =>{
    // if I have an error
    if(err){
      return res.status(400).send("Failed to fetch providers information" )
    }
    // res.status(200).render('data', { data })
    res.status(200).send(data)
           
  })
})

// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})