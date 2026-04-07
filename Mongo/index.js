// Import mongoose
const mongoose = require("mongoose");

// Function to connect database
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongooseDemo"); 
  console.log("✅ Connected to MongoDB");
}

// Run connection and catch error
main().catch(err => console.error("❌ Error:", err));


// Define a schema (structure/rules for documents in collection)
const studentSchema = new mongoose.Schema({
    name: String,     // 'name' must be a string
    age: Number,      // 'age' must be a number
    enrolled: Boolean // 'enrolled' must be true/false
  });

  // Create a Model (represents "students" collection in DB)
const Student = mongoose.model("Student", studentSchema);
async function createStudent() {
    const student = new Student({
      name: "Priyesh",
      age: 19,
      enrolled: true
    });
  
    const result = await student.save(); // Save to DB
    console.log("✅ Student Saved:", result);
  }
  
  // Call the function
  createStudent();
  