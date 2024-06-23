function isYes(response) {
  const normalized = response.trim().toLowerCase();
  return ['yes', 'y', 'yeah', 'yep', 'ye', ''].includes(normalized); // Treat empty response as 'yes'
}

function isNo(response) {
  const normalized = response.trim().toLowerCase();
  return ['no', 'n', 'nope'].includes(normalized);
}

module.exports = { isYes, isNo };
