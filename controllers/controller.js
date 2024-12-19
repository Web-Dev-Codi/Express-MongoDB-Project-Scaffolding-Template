import User from "../models/model.js";

export const getAll = async (req, res, next) => {
  const allUsers = await User.find();

  if (!allUsers) {
    const error = new Error("Could not find Users");
    error.status = 404;
    return next(error);
  }

  res.status(200).json({
    status: "success",
    results: allUsers.length,
    data: allUsers,
  });
};

export const getSingleUser = async (req, res, next) => {
  const { id } = req.params;
  const findUser = await User.findById(id);

  if (!findUser) {
    const error = new Error(`Could not find user ID ${id}`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json({
    status: "success",
    data: findUser,
  });
};

export const postSingleUser = async (req, res, next) => {
  const user = req.body;
  const newUser = await User.create(user);

  if (!newUser) {
    const error = new Error("unable to create new User");
    error.status = 404;
    return next(error);
  }

  res.status(200).json({
    status: "success",
    data: newUser,
  });
};
