function ucFirst(str) {
  if (str.length === 0) {
      return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}