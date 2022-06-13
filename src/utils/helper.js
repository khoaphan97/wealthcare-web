export const convertToDollarFormat = (value) => {
  return "$" + value.toLocaleString().replace(/\./g,',');
}