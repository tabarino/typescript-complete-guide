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


// Nullish Coalescing
const userInput = null;

// We would in this way in Javascript
// const storedData = userInput || 'Default';

// This is on Typescript (Nullish Coalescing) - It only checks if it is null or undefined
const storedData = userInput ?? 'Default';
