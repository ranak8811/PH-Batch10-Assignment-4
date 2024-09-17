function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  separation = email.split("@");

  return separation[0] + " sent you an email from " + separation[1];
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
