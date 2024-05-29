import EmployeeModel from '../src/models/employee.js'; 
import PresentAbsentListModel from '../src/models/PresentAbsentListModel.js'

export const addEmployee = async (req, res) => {
  try {
    const { name } = req.body; 
    console.log(req.body);
    
    // Validate request data
    if (!name) {
      return res.status(400).json({ message: 'Name field is required' });
    }

    const newEmployee = new EmployeeModel({ name });
    const savedEmployee = await newEmployee.save();

    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}; 


export const getAllEmployees = async (req, res) => {         // send data to frontend
  try {
    const employees = await EmployeeModel.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}; 




