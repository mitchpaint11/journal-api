const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mitchpaint11:mitchpaint11@cluster0.ayzondq.mongodb.net/journal?retryWrites=true&w=majority"
  )
  .then(() =>
    console.log(
      mongoose.connection.readyState == 1
        ? "Mongoose connected!"
        : "Mongoose failed"
    )
  )
  .catch((err) => console.log(err));

module.exports = mongoose;
