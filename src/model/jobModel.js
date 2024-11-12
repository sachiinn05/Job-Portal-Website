// total jobs 
//create jobs
// find jobs
// update jobs
//delete the job
export const totalJobs = [
    {
        id:'1',
        companyName:'Paytm',
        designation:'Software Developer',
        location:'Delhi',
        salary:"10-15lpa",
        skills:['react.js','express','node.js','angularJs'],
        lastDate: "2023-10-30",
        requiredApplicants: 4,
        appliedApplicants:null,
        },
        {
        id:'2',
        companyName:'CMS',
        designation:'Software Developer',
        location:'Delhi',
        salary:"10-15lpa",
        skills:['react.js','express','node.js','html'],
        lastDate: "2023-10-30",
        requiredApplicants: 4,
        appliedApplicants:null,
        },
        {
        id:'3',
        companyName:'Microsoft',
        designation:'Software Developer',
        location:'Delhi',
        salary:"10-15lpa",
        skills:['react.js','express','node.js','html','css'],
        lastDate: "2023-10-30",
        requiredApplicants: 4,
        appliedApplicants:null,
        }
]
export const jobDetails = (id) =>{
    return totalJobs.find(job=> job.id == id);
}
export const updateJob = (user) =>{
    const index = totalJobs.findIndex(job=> job.id== user.id);
    user.skills=user.skills.split(',');
    totalJobs[index] = user;
    return user;
}
export const deleteJob =(id) =>{
    const index = totalJobs.findIndex(job=> job.id== id);
    totalJobs.splice(index,1);
    return totalJobs
}
export const newJob = (data) =>{
    let {companyName,designation,location,salary,skills,lastDate,requiredApplicants,appliedApplicants} = data;
    skills = skills.split(',');
    let id = totalJobs.length+1;
    totalJobs.push({id,companyName,designation,location,salary,skills,lastDate,requiredApplicants,appliedApplicants:null});
    return totalJobs
}
