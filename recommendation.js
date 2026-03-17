export function generateRecommendation(risk, moisture, nutrientLevel) {

  const recommendations = [];

  if (moisture < 35) {
    recommendations.push("irrigateSoon");
  } else {
    recommendations.push("moistureHealthy");
  }

  if (nutrientLevel < 60) {
    recommendations.push("addFertilizer");
  } else {
    recommendations.push("nutrientStable");
  }

  if (risk === "High") {
    recommendations.push("highRisk");
  }

  if (risk === "Moderate") {
    recommendations.push("moderateRisk");
  }

  if (risk === "Low") {
    recommendations.push("lowRisk");
  }

  return recommendations;
}