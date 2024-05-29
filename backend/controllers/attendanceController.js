import PresentAbsentListModel from "../src/models/PresentAbsentListModel.js";
import mongoose from "mongoose";

export const updateAttendance = async (req, res) => {
  let id = req.params.id;
  let { status } = req.body;

  if (typeof id == "string" && typeof status == "boolean") {
    var isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      res.send("Invalid id");
    }
    try {
      const attendance = new PresentAbsentListModel({
        employeeId: id,
        attendance: status,
      });

      const data = await attendance.save();

      res.status(200).json(data);
    } catch (error) {
      console.error("Error updating attendance:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(400).json({ message: "Invalid data" });
  }
};
