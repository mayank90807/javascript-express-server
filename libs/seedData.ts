import UserRepository from "./../src/repositories/user/UserRepository";
const userObj = UserRepository;
export default function seedData() {
  console.log("===== Seeding =====");
  userObj.count().then((result) => {
    if (result < 1) {
        userObj.create({ name: "Mayank Baraskar", email: "abc@gmail.com"});

        console.log("===== Seeding the data as it contains 0 users. =====");
      } else {
      console.log("===== Not Seeding the data as DB has initial seed =====");
    }
  });
}
