import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { tryCatch } from "./error.js";

export const adminOnly = tryCatch(async (req, res, next) => {
  const { id } = req.query;

  if (!id) return next(new ErrorHandler("Please Login First", 401));

  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("ID is not valid", 401));
  if (user.role !== "admin")
    return next( new ErrorHandler("You are not admin only an admin can view that information", 403));

  next();
});
