import mongoose from "mongoose";
mongoose.set('strictQuery',false); 

const employeeSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    // attendance: { 
    //     type: Boolean,
    //     required: true
    // }
}, { 
    collection:'AddEmployeeName'
});
const EmployeeModel = mongoose.model('AddEmployeeName', employeeSchema); // write collection name// 

export default EmployeeModel;    