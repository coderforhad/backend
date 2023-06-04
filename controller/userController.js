import User from "../userSchema/userSchema.js"

export const addUser = async (request, response) => {
    // response.send('book route testing!')
  const user = request.body;
  console.log(user);
  const newUser = new User(user);
  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
