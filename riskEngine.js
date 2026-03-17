export function calculateRisk(moisture, temperature, nutrientLevel) {

  let score = 0;

  if (moisture < 30) score += 40;
  if (temperature > 35) score += 30;
  if (nutrientLevel < 50) score += 30;

  if (score >= 60) return "High";
  if (score >= 30) return "Moderate";

  return "Low";
}