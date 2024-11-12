import { sendConfirmationEmail } from "../middlewares/email-middleware.js";
import {
  jobDetails,
  totalJobs,
  updateJob,
  deleteJob,
  newJob,
} from "../model/jobModel.js";
import { applyJob } from "../model/userModel.js";

export const homePage = (req, res) => {
  res.render("index", {
    userEmail: req.session.userEmail,
  });
};

export const showJobs = (req, res) => {
  const jobs = totalJobs;
  res.render("job", {
    jobs,
    userEmail: req.session.userEmail,
  });
};

export const showJobDetails = (req, res) => {
  const id = req.params.id;
  const details = jobDetails(id);
  res.render("jobdetails", {
    details,
    userEmail: req.session.userEmail,
  });
};

export const addApplicant = (req, res) => {
  const { id, name, email, contact } = req.body;
  const makeResume = "resume/" + req.file.filename;

  // Apply for the job
  applyJob(id, name, email, contact, makeResume);

  // Retrieve job details (company name and designation) using the job ID
  const job = jobDetails(id);

  // Send confirmation email to the user
  sendConfirmationEmail(email, job.companyName, job.designation)
    .then(() => {
      const jobs = totalJobs;
      // Render the job page after the email is successfully sent
      res.render("job", {
        jobs,
        userEmail: req.session.userEmail,
        successMessage: `Confirmation email has been sent to ${email}.`,
      });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      const jobs = totalJobs;
      // If email sending fails, show an error message
      res.render("job", {
        jobs,
        userEmail: req.session.userEmail,
        errorMessage:
          "Application received, but there was an issue sending the confirmation email.",
      });
    });
};

export const showRegister = (req, res) => {
  res.render("register", {
    userEmail: req.session.userEmail,
  });
};

export const showUpdate = (req, res) => {
  const id = req.params.id;
  const data = jobDetails(id);
  res.render("updatejob", {
    userData: data,
    userEmail: req.session.userEmail,
  });
};

export const UpdateJob = (req, res) => {
  const data = updateJob(req.body);
  const { id } = data;
  const details = jobDetails(id);
  res.render("jobdetails", {
    details,
    userEmail: req.session.userEmail,
  });
};

export const showDeleteJob = (req, res) => {
  const id = req.params.id;
  const data = deleteJob(id);
  const jobs = totalJobs;
  res.render("job", {
    jobs,
    userEmail: req.session.userEmail,
  });
};

export const postJob = (req, res) => {
  res.render("createJob", {
    userEmail: req.session.userEmail,
  });
};

export const postNewJob = (req, res) => {
  newJob(req.body);
  const jobs = totalJobs;
  res.render("job", {
    jobs,
    userEmail: req.session.userEmail,
  });
};

export const searchJobs = (req, res) => {
  const searchQuery = req.query.query; // Get the search query from the request

  if (!searchQuery) {
    // If no search query, return all jobs
    return res.render("job", { jobs: totalJobs });
  }

  // Filter jobs based on search query
  const filteredJobs = totalJobs.filter((job) => {
    return (
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  // Render the jobs view with filtered results
  res.render("job", { jobs: filteredJobs });
};
