import express from  "express"; 
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import employeeRoutes from './routes/employees.js'; 
import router from "./routes/routes.js";

const app = express();


// setting up middleware// 
app.use(express.json({ 
    extended: true,
})); 



app.use(cors()); 



app.use('/api/v1', router);      // harek ma yo route folder hunxa// 







// JSON // 
app.use(express.json());

export default app; 