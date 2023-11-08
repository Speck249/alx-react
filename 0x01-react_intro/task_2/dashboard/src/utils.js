export function getFullYear() {
  // function implementation  
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  // function implementation
  if (isIndex === true) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
}

const defaultExport = {
  //default export content
  getFullYear, getFooterCopy
};

export default defaultExport;
