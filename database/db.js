import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@personal.ogmnej9.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoose connect successful");
  } catch (error) {
    console.log("Error while connecting database!", error);
  }
};

export default Connection;
