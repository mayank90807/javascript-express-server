import { validateEmail } from "./helpers";


export function validateUsers(user) {
  let invalid = 0,
    invalidUsers = [],
    valid = 0,
    validUsers = [];
  user.forEach(element => {
    let { traineeEmail, reviewerEmail } = element;
    if (
      validateEmail(traineeEmail) === true &&
      validateEmail(reviewerEmail) === true
    ) {
      valid++;
      validUsers.push(traineeEmail);
    } else {
      invalid++;
      invalidUsers.push(traineeEmail);
    }
  });
  console.log("Valid Users count: " + valid);
  console.log("Valid Users: " + validUsers);
  console.log("Invalid Users count: " + invalid);
  console.log("Invalid Users: " + invalidUsers);
}
