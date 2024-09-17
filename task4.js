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

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);

console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);
