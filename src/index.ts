import Big from 'big.js';
import { isNumber, isString } from './utils';

const conversion = '100000000';

/**
 * Convert Satoshi to Bitcoin
 * @param satoshi Amount of Satoshi to convert. Must be a whole number
 * @param returnBN Optionally return the value as a Big number instance
 */
export function toBitcoin(satoshi: number | string, returnBig: boolean = false) {
  if (!isString(satoshi) && !isNumber(satoshi)) {
    throw new TypeError(
      `toBitcoin must be called on a number or string, got ${typeof satoshi}`,
    );
  }
  if (!Number.isInteger(Number(satoshi))) {
    throw new TypeError('toBitcoin must be called on a whole number or string format whole number');
  }
  if (returnBig) {
    return new Big(satoshi).div(conversion);
  }
  return Number(new Big(satoshi).div(conversion));
}

/**
 * Convert Bitcoin to Satoshi
 * @param bitcoin Amount of Bitcoin to convert
 * @param returnBN Optionally return the value as a Big number instance
 */
export function toSatoshi(bitcoin: number | string, returnBig: boolean = false) {
  if (!isString(bitcoin) && !isNumber(bitcoin)) {
    throw new TypeError(
      `toSatoshi must be called on a number or string, got ${typeof bitcoin}`,
    );
  }
  if (returnBig) {
    return new Big(bitcoin).times(conversion);
  }
  return Number(new Big(bitcoin).times(conversion));
}
