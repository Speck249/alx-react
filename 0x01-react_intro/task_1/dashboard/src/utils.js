export default function getFullYear() {
  return new Date().getFullYear();
}

export default function getFooterCopy(isIndex) {
  if isIndex === true {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}
