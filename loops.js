//for(let i= 0;i<10 ; i++){}

const users = ["Max", "Nathan", "joel"];

for (const user of users) {
  console.log(user);
}
const loggedInUser = {
  name: "Nathan",
  age: 24,
  isAdmin: true,
};
for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]);
}
let isFinished = 0;
while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log(done);
