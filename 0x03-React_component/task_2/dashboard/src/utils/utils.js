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

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

const defaultExport = {
  //default export content
  getFullYear, getFooterCopy, getLatestNotification
};

export default defaultExport;
