import express from 'express' 
import connectDB from '../backend/db/connectdb.js';
import app from './src/app.js';


const PORT = process.env.PORT || 3000; 
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017";
connectDB(DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}) 

