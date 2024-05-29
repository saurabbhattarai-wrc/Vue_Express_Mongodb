import mongoose from 'mongoose';

const presentAbsentListSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  attendance: {
    type: Boolean,
    required: true,
  },
//   date: {
//     type: Date,
//     default: Date.now,
//   }, 
// Collection: 'Present_Absentlist',
});

const PresentAbsentListModel = mongoose.model('Present_Absentlist', presentAbsentListSchema);

export default PresentAbsentListModel;
