import { totalJobs } from "./jobModel.js";

let recruiter = [];

export const addNewUser = (name, email, password) => {
  let id = recruiter.length + 1;
  return recruiter.push({ id, name, email, password });
};

export const verifyUser = (email, password) => {
  return recruiter.findIndex(
    (user) => user.email == email && user.password == password
  );
};

export const applicants = [];

export const applyJob = (id, name, email, contact, resume) => {
  const jobs = totalJobs;
  const index = totalJobs.find((job) => job.id == id);
  index.appliedApplicants = index.appliedApplicants + 1;
  const newId = applicants.length + 1;
  return applicants.push({ id: newId, name, email, contact, resume });
};
