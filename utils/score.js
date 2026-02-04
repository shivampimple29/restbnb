const calculateHostScore = (hostStats = {}) => {
  if (!hostStats || Object.keys(hostStats).length === 0) {
    return 70; // neutral default
  }

  let score = 100;

  score -= (hostStats.cancelledBookings || 0) * 5;
  score -= Math.min((hostStats.responseTimeMinutes || 0) / 2, 30);
  score += (hostStats.avgRating || 4) * 5;

  return Math.max(0, Math.min(100, Math.round(score)));
};

const calculateWFHScore = (wfh = {}) => {
  if (!wfh || Object.keys(wfh).length === 0) {
    return 60; // neutral default
  }

  let score = 0;

  score += Math.min((wfh.wifiSpeedMbps || 20) / 5, 50);
  if (wfh.hasDesk) score += 25;
  if (wfh.hasPowerBackup) score += 25;

  return Math.min(100, Math.round(score));
};

const calculateAreaScore = (area = {}) => {
  if (!area || Object.keys(area).length === 0) {
    return 65; // neutral default
  }

  let score = 100;

  score -= (area.crimeIndex || 20) * 1.2;
  score -= (area.nightNoiseLevel || 20) * 0.8;
  score += (area.avgSafetyRating || 4) * 10;

  return Math.min(100, Math.max(0, Math.round(score)));
};

module.exports = {
  calculateHostScore,
  calculateWFHScore,
  calculateAreaScore,
};