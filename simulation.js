export function simulateFarm(soilMoisture, irrigationDelay) {

  let updatedMoisture = soilMoisture - irrigationDelay * 2;

  if (updatedMoisture < 20) {
    updatedMoisture = 20;
  }

  return updatedMoisture;

}