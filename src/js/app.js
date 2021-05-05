// TODO: write your code here
export default function checkNumber(stringNumber) {
  let arrayDigit = stringNumber.match(/\d/g);
  if (arrayDigit.length > 11) {
    arrayDigit = arrayDigit.join('').replace(/^/, '+');
    return arrayDigit;
  } if (arrayDigit.length === 11) {
    arrayDigit = arrayDigit.join('').replace(/^[78]/, '+7');
    return arrayDigit;
  } throw Error('проверьте корректность номера');
}
