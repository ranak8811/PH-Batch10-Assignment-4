function calculateTax(income, expenses) {
  if (income < expenses || income < 0 || expenses < 0) {
    return "Invalid Input";
  }

  const remainingBalance = income - expenses;

  return remainingBalance * 0.2;
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  separation = email.split("@");

  return separation[0] + " sent you an email from " + separation[1];
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i])) {
      return true;
    }
  }

  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  let FFamilyScore = 0;

  if (obj.isFFamily) {
    FFamilyScore = 20;
  }

  const totalScore = obj.testScore + obj.schoolGrade + FFamilyScore;

  if (totalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let sum = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    sum += waitingTimes[i];
  }

  const avarageTime = Math.round(sum / waitingTimes.length);

  const personsRemaining = serialNumber - waitingTimes.length - 1;

  const haveToWait = avarageTime * personsRemaining;

  return haveToWait;
}
