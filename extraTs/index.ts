import * as constants from "./constants";
import * as patterns from "./patterns/index";
import * as auth from "./utils/index";
const SIZE = process.argv.slice(2);
const user = [{
  traineeEmail: "trainee1@successive.tech",
  reviewerEmail: "reviewer1@successive.tech",
},
{
  traineeEmail: "trainee2@succesive.tech",
  reviewerEmail: "reviewer1@successive.tech",
},
];
console.log("\nDiamond Pattern\n");
patterns.diamondPattern(4);
console.log("\nEquilateral Pattern\n");
patterns.starPattern(4);
console.log("\nRunning Permissions.js\n");
console.log(auth.runHasPermission(
  constants.MODULE_USER,
  constants.ROLE_OF_TRAINER,
  constants.PERMISSION_DELETE,
));
console.log("\nRunning validate users\n");
auth.runValidateUsers(user);
