import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = String(n).split('');
  let result = 0;

  for (let i = 0; i < arr.length; i++)
  {
    let newArr = [];
    let arr1 = arr.slice(0, i);
    let arr2 = arr.slice(i + 1, arr.length);
    newArr = newArr.concat( arr1, arr2);
 
    if (result < Number(newArr.join('')))
    {
      result = Number(newArr.join(''));
    }   
  }
  
   return result;
}
