import { totalJobs } from "../model/jobModel.js";
import { addNewUser, verifyUser, applicants } from "../model/userModel.js";

export const showLogin = (req, res) => {
  res.render("login", {
    error: null,
    userEmail: req.session.userEmail,
  });
};

export const authenticateUser = (req, res) => {
  const { email, password } = req.body;
  const data = verifyUser(email, password);
  console.log("Verification data:", data);
  if (data < 0) {
    return res.render("login", {
      error: "invalid credentials",
      userEmail: req.session.userEmail,
    });
  }
  req.session.userEmail = email;
  const jobs = totalJobs;
  res.render("job", {
    jobs,
    userEmail: req.session.userEmail,
  });
};

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  addNewUser(name, email, password);
  res.render("login", {
    error: null,
    userEmail: req.session.userEmail,
  });
};

export const showApplicant = (req, res) => {
  res.render("view-applicant", {
    users: applicants,
    userEmail: req.session.userEmail,
  });
};
export const logoutUser = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
};
