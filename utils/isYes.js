function isYes(answer) {
  const normalized = answer.trim().toLowerCase();
  return ['yes', 'y', 'ye', 'yea', 'yeah'].includes(normalized);
}

module.exports = isYes;
