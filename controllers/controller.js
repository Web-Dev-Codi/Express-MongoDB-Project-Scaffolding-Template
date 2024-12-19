import User from "../models/model.js";

export const getAll = async (req, res, next) => {
  const allUsers = await User.find();

  if (!allUsers) {
    const error = new Error("Could not find products");
    error.status = 404;
    return next(error);
  }

  res.status(200).json({
    status: "success",
    results: allUserslength,
    data: allUsers,
  });
};
