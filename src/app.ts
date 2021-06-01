const fetchedUserData = {
  id: 'u1',
  name: 'Ivan',
  job: {
    title: 'Developer',
    company: 'ProvidentCRM'
  }
};

// We would in this way in Javascript
// console.log(fetchedUserData.job && fetchedUserData.job.title);

// This is on Typescript (Optional Chaining)
console.log(fetchedUserData?.job?.title);
