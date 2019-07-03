// Function converts any string to Spinal case, or all lowercase words joined by dashes

function spinalCase(str) {
  return str.trim().split(/(?=[A-Z])/).join(" ").split(/[_\W]+/).join("-").toLowerCase();
}
