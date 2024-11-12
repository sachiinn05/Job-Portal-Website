import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import cookieParser from "cookie-parser";
import session from "express-session";
import { fileURLToPath } from "url";
import {
  authenticateUser,
  logoutUser,
  registerUser,
  showApplicant,
  showLogin,
} from "./src/controller/userController.js";
import {
  addApplicant,
  homePage,
  postJob,
  postNewJob,
  searchJobs,
  showDeleteJob,
  showJobDetails,
  showJobs,
  showRegister,
  showUpdate,
  UpdateJob,
} from "./src/controller/jobController.js";
import { uploadFile } from "./src/middlewares/file.upload.js";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const app = express();

app.use(express.static(path.join(dirName, "public")));
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "abcftyu",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.get("/", homePage);
app.get("/job", showJobs);
app.get("/login", showLogin);
app.get("/job-details/:id", showJobDetails);
app.get("/register", showRegister);
app.get("/view-applicant/:id", showApplicant);
app.get("/update/:id", showUpdate);
app.get("/delete/:id", showDeleteJob);
app.get("/logout", logoutUser);
app.get("/postJob", postJob);
app.get("/search", searchJobs);
app.post("/job-details/:id", uploadFile.single("resume"), addApplicant);
app.post("/register", registerUser);
app.post("/login", authenticateUser);
app.post("/update/:id", UpdateJob);
app.post("/postJob", postNewJob);

//handling 404 error
app.use((req, res, next) => {
  res.status(404).render("404", {
    userEmail: req.session.userEmail || null,
  });
});



app.listen(8080, () => {
  console.log("server is listening in port 8080");
});
